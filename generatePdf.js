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
          text: recipientFirstName +''+ recipientLastName,
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

    // Create and download the PDF
    pdfMake.createPdf(docDefinition).download('ButterDaySpaGC.pdf');
  };

  image.src = './ButterDaySpa.png';
  return false; // Prevent form submission
}