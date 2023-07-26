// Function to generate PDF
function generatePDF() {
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
  pdfDocGenerator.getBlob(function (blob) {
    // Create a new Dropbox client instance
    var dropbox = new Dropbox.Dropbox({ accessToken: 'sl.Bi8gbz3gBubTWEG2TsFlaewak6gc6g7gLKui5c8WQPs31Fc2Z1fJi6I99KacBkX3pRYe1v5XJvAr88PP9HiUmgW280bLvdAIMX0uvacx_lWK7l9G68-Iq9ie0NIgyGMSqUI1sX5Ihu0kP8Ts25zhSHE', fetch: fetch, clientId: 'corjv3mmhxfugpn'});

    // Set the path where the PDF will be uploaded in your Dropbox
  
var filePath = '/path/to/your/folder/' + voucher + '.pdf';


    // Upload the PDF blob to Dropbox
    dropbox
      .filesUpload({ path: filePath, contents: blob })
      .then(function (response) {
        // Get the publicly accessible URL of the uploaded PDF file
        dropbox
          .sharingCreateSharedLinkWithSettings({ path: response.path_display })
          .then(function (sharedLinkResponse) {
            // The sharedLinkResponse contains the URL for the uploaded PDF
            var publicPdfUrl = sharedLinkResponse.url;

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
          })
          .catch(function (error) {
            console.error('Error creating shared link:', error);
            // Handle the error if necessary
          });
      })
      .catch(function (error) {
        console.error('Error uploading PDF:', error);
        // Handle the error if necessary
      });
  });
};

image.src = './ButterDaySpa.png';
return false; // Prevent form submission
}