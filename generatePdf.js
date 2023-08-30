// Function to generate PDF
function generatePDF() {
   // Set AWS SDK logger to console for debugging
   AWS.config.logger = console;

  // Get values from input fields
  var recipientFirstName = document.getElementById('recipientFirstName').value;
  var recipientLastName = document.getElementById('recipientLastName').value;
  var buyerFirstName = document.getElementById('buyerFirstName').value;
  var giftName = document.getElementById('giftName').value;
  var initials = document.getElementById('initials').value;
  var voucher = document.getElementById('voucher').value;
  var costCode = document.getElementById('costCode').value;
  var message = document.getElementById('message').value;
  var buyerEmail = document.getElementById('buyerEmail').value;
  var recipientEmail = document.getElementById('recipientEmail').value;

  // Load the background image for the PDF
  var image = new Image();
  image.setAttribute('crossOrigin', 'anonymous');

  image.onload = function() {
    // Create a canvas and set its dimensions
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    // Convert the canvas to a data URL
    var imageUrl = canvas.toDataURL('image/png');

    // Define the PDF document structure
    var docDefinition = {
      pageSize: 'LETTER',
      background: [
        {
          image: imageUrl,
          width: 612
        }
      ],
      content: [
        {
          text: recipientFirstName,
          fontSize: 14,
          bold: false,
          margin: [0, 0, 0, 0],
          alignment: 'left',
          absolutePosition: { x: 115, y: 396 },
        },
        {
          text: buyerFirstName,
          fontSize: 14,
          bold: false,
          margin: [0, 0, 0, 0],
          alignment: 'left',
          absolutePosition: { x: 115, y: 418 },
        },
        {
          text: giftName,
          fontSize: 14,
          bold: false,
          margin: [0, 0, 0, 0],
          alignment: 'left',
          absolutePosition: { x: 115, y: 440 },
        },
        {
          text: initials + '-' + voucher + '-' + costCode,
          fontSize: 14,
          bold: false,
          margin: [0, 0, 0, 0],
          alignment: 'left',
          absolutePosition: { x: 435, y: 460 },
        },
        {
          text: message,
          fontSize: 14,
          bold: false,
          margin: [0, 0, 0, 15],
          alignment: 'left',
          absolutePosition: { x: 52, y: 463 },
        },
      ],
    };

    // Create the PDF
    var pdfDocGenerator = pdfMake.createPdf(docDefinition);

    // Get the PDF blob
    pdfDocGenerator.getBlob(function(blob) {
      // Configure AWS SDK with your credentials
      AWS.config.update({
        accessKeyId: 'AKIAVH7HVKUXM6MU4FV4',
        secretAccessKey: 'itfD8HQqxHn/rrGT5jOsFYdJ7R/Ad+EScK1DMMKw',
        region: 'us-east-1'
      });

      // Initialize S3 object
      var s3 = new AWS.S3();

      // Define S3 bucket and file path
      var bucketName = 'butter-day-spa';
      var filePath = recipientFirstName + '_' + voucher + '.pdf';

      // Upload the PDF blob to AWS S3
      s3.upload({
        Bucket: bucketName,
        Key: filePath,
        Body: blob,
        ContentType: 'application/pdf',
        ACL: 'public-read' 
      }, function(err, data) {
        if (err) {
          console.error('Error uploading PDF to S3:', err);
        } else {
          // Get the public URL of the uploaded PDF
          var publicPdfUrl = data.Location;

          // Create a new message content object
          var messageContent = {
            recipientFirstName: recipientFirstName,
            buyerFirstName: buyerFirstName,
            giftName: giftName,
            voucher: voucher,
            costCode: costCode,
            url: publicPdfUrl,
          };

          // Retrieve existing alert messages from local storage
          var alertMessages = JSON.parse(localStorage.getItem('alertMessages')) || [];

          // Add the new message content to the existing alert messages
          alertMessages.push(messageContent);

          // Save the updated alert messages to local storage
          localStorage.setItem('alertMessages', JSON.stringify(alertMessages));

          openModal(messageContent);
        }
      });
    });
  };

  image.src = './ButterDaySpa.png';
  return false; // Prevent form submission
}
