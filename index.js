const express = require('express');
const { form2 } = require('./form2.js');
const fs = require('fs');
const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`${form2()}`);
});

app.post('/submit', (req, res) => {
  const {
    recipientFirstName,
    recipientLastName,
    buyerFirstName,
    giftName,
    initials,
    voucher,
    costCode,
    message,
  } = req.body;

  function generatePDF() {
    // Read the image file
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

  generatePDF();
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});






