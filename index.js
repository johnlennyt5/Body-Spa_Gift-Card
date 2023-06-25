const express = require('express');
const app = express();
const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./')); 

app.get('/', (req, res) => {
    res.sendFile(path.join("./", 'index.html'));
  });


app.post('/submit', (req, res) => {
  // Extract form data here and generate the PDF
  const formData = req.body; // Remove .formData
  generatePDF(req, res, formData); 

  // Send a response to the client
  res.send('PDF generated successfully!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

function generatePDF(req, res, formData) {
    const {
      recipientFirstName,
      recipientLastName,
      buyerFirstName,
      giftName,
      initials,
      voucher,
      costCode,
      message,
    } = formData;
  
    fs.readFile('Butter Day Spa.png', (err, imageBuffer) => {
      if (err) {
        console.error('Error reading image file:', err);
        res.status(500).send('Failed to generate PDF');
        return;
      }

      // Convert the image buffer to a base64 string
      const imageData = imageBuffer.toString('base64');

      // Create a document definition
      const docDefinition = {
        pageSize: 'LETTER',
        background: [
          {
            image: `data:image/png;base64,${imageData}`,
            width: 612
          }
        ],
        content: [
          
      {
        text: `${recipientFirstName} ${recipientLastName}`,
        fontSize: 14,
        bold: false,
        margin: [0, 0, 0, 0],
        alignment: 'left',
        absolutePosition: { x: 115, y: 396 },
      },
      {
        text: `${buyerFirstName}`,
        fontSize: 14,
        bold: false,
        margin: [0, 0, 0, 0],
        alignment: 'left',
        absolutePosition: { x: 115, y: 418 },
      },
      {
        text: `${giftName}`,
        fontSize: 14,
        bold: false,
        margin: [0, 0, 0, 0],
        alignment: 'left',
        absolutePosition: { x: 115, y: 440 },
      },
      {
        text: `${initials}-${voucher}-${costCode}`,
        fontSize: 18,
        bold: false,
        margin: [0, 0, 0, 0],
        alignment: 'left',
        absolutePosition: { x: 435, y: 460 },
      },
      {
        text: `${message}`,
        fontSize: 14,
        bold: false,
        margin: [0, 0, 0, 15],
        alignment: 'left',
        absolutePosition: { x: 52, y: 463 },
      },
    ],
  };

      // Generate the PDF
      const pdfDoc = pdfMake.createPdf(docDefinition);
      pdfDoc.getBuffer((buffer) => {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename= Body Day Spa Gift Certicate');
        res.write(buffer);
        res.end();
      });
    });
  }

 

