// const express = require('express');
// const router = express.Router();
// const Scolarships = require('./scholarshipForm')
// const sendEmail = require('./sendEmail');
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'paymentSleep/') // Specify the directory where uploaded files will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname) // Use the original file name as the name of the uploaded file
//   }
// });
// const upload = multer({ storage: storage });


// router.post('/applyscholarship', upload.single('screenshot'), async (req, res) => {
//     console.log(req.body, req.file);
//     // const scholarship = new Scolarships({
//     //     name: req.body.name,
//     //     email: req.body.email,
//     //     number: req.body.number,
//     //     dateOfBirth: req.body.dateOfBirth,
//     //     gender: req.body.gender,
//     //     address: req.body.address,
//     //     currentStudyStatus: req.body.currentStudyStatus,
//     //     id: req.body.id,
//     //     file: `/paymentSleep/${req.file.filename}`
//     // });

//     // const subject = 'Thank you for applying for the scholarship';
//     // const message = 'We have received your scholarship application. Thank you!';

//     // sendEmail(req.body.email, subject, message);

//     // scholarship.save()
//     //     .then(() => res.status(200).send({
//     //         message: 'Form submitted successfully'
//     //     }))
//     //     .catch(error => res.status(500).send({ message: 'Error saving form data', error }));
// });

// router.get('/scholarships', async (req, res) => {
//     try {
//         const scholarships = await Scolarships.find();
//         res.status(200).json(scholarships);
//     } catch (error) {
//         res.status(500).send({ message: 'Error fetching scholarship data', error });
//     }
// });


// module.exports=router;



const multer = require('multer');
const express = require('express');
const router = express.Router();
const Scolarships = require('./scholarshipForm')
const sendEmail = require('./sendEmail');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const pdf = require('html-pdf');

// Define storage for files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'file1') {
      cb(null, 'markSheet/'); // Store registration files in 'uploads/registration/' folder
    } else if (file.fieldname === 'screenshot') {
      cb(null, 'paymentSleep/'); // Store screenshots in 'uploads/screenshots/' folder
    } else {
      cb(new Error('Invalid file fieldname'));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// Filter function to accept only specific file types (optional)
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'file1') {
    // Add validation for registration files (if required)
    cb(null, true);
  } else if (file.fieldname === 'screenshot') {
    // Add validation for screenshots (if required)
    cb(null, true);
  } else {
    cb(new Error('Invalid file fieldname'));
  }
};

// Initialize multer instance with storage and fileFilter configurations
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Handle file uploads in your API endpoint
router.post('/applyscholarship', upload.fields([{ name: 'file1', maxCount: 1 }, { name: 'screenshot', maxCount: 1 }]), (req, res) => {

  console.log(req.body)
  // Extract file paths or other relevant information from req.files
  // const registrationFilePath = req.files.registrationFile ? req.files.registrationFile[0].path : null;
  // const screenshotFilePath = req.files.screenshot ? req.files.screenshot[0].path : null;

  // Handle storing file paths or performing any other operations
  // ...
  try {
    const formData = req.body;
    const screenshotPath = req.files['screenshot'] ? req.files['screenshot'][0].path : null;
    const registrationFilePath = req.files['file1'] ? req.files['file1'][0].path : null;


    const screenshotName = req.files['screenshot'] ? req.files['screenshot'][0].filename : null;
    const markSheetName = req.files['file1'] ? req.files['file1'][0].filename : null;

    // Create a new registration document
    const scolarships = new Scolarships({
      name: formData.name,
      number: formData.number,
      email: formData.email,
      school: formData.school,
      std: formData.std,
      year: formData.year,
      branch: formData.branch,
      aadhar: formData.aadhar,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      address: formData.address,
      aadharadd: formData.aadharadd,
      referralCode: formData.referralCode,
      transactionId: formData.transactionId,
      screenshot: `/paymentSleep/${screenshotName}`,
      file1: `/markSheet/${markSheetName}`

    });

    // Save the registration document to the database
    scolarships.save();

    res.status(200).json({ message: 'Successfully Applied for Scolarships' });
  } catch (error) {
    console.error('Error saving registration data:', error);
    res.status(500).json({ error: 'An error occurred while saving registration data' });
  }

});


async function generatePDF(scholarship) {
  const currentDate = new Date();

  // Define arrays for month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get day, month, and year from the current date object
  const day = currentDate.getDate(); // Returns the day of the month (1-31)
  const month = months[currentDate.getMonth()]; // Returns the month name (0-11)
  const year = currentDate.getFullYear();

  // Read images and convert them to base64
  const vsTechLogoPath = path.resolve(__dirname, 'img/vs tech logo.png');
  const vsTechBlackLogoPath = path.resolve(__dirname, 'img/vs tech black logo[1].png');

  const vsTechLogoBase64 = fs.readFileSync(vsTechLogoPath, { encoding: 'base64' });
  const vsTechBlackLogoBase64 = fs.readFileSync(vsTechBlackLogoPath, { encoding: 'base64' });

  return new Promise((resolve, reject) => {
    const htmlContent = `
      <style>
  .main{
    width: 450px;
    height: 600px;
    background-color: white;
    align-items: center;
    border: 1px solid black;
    position: relative;
    
}

img{
    width: 220px;
    margin: 2%;
}
h1{
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    margin-left: 10%;
    margin-top: 10px;
    font-size: 25px;
    
}
.info-contact-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 20px;
    
}

.info{
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 12%; 
    padding: 0;
}
 .contact-info {
    display: flex;
    flex-direction: column;
    width: 30%;

}
label{
    font-weight: bold;
    font-size: 10px;
    margin: 0;
    padding: 0;
}
p{
    font-size: 10px;
}
.contact-info{
    display: flex;
    flex-direction: column;
    
}
h4{
    font-weight: bold;
    font-size: 10px;
    padding: 0;
    margin: 0;
}
table{
  margin-left: 10%;
    width: 80%;
    border-collapse: collapse;
    
}
.table-bordered td {
    padding: 5px; 
    font-size: 10px; 
}
    .table-bordered td,th{
     border: 1px solid black;
    }
.amount{
    margin-left: 12%;
    font-size: 10px;
    font-weight: bold;
}
.sign{
    margin-left: 10%;
    font-size: 10px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 5px;
    width: 80%;
    text-align: center;
}
.thank-you {
    position: absolute;
    right: 1px;
    bottom: 10px;
    width: 450px; 
    opacity: 0.1; 
    
}
span{
    
    margin-left: 60%;
    font-size: 35px;
    font-weight: bold;
    opacity: 0.3;
    
}
.you{
    margin-left: 69%;
    font-size: 35px;
    font-weight: bold;
    opacity: 0.3;
    margin-top:7px;
}
    #wid{
    width: 170px;
    }

</style>
      <div class="main">
        <img src="data:image/png;base64,${vsTechLogoBase64}" alt="VS Tech Logo">
        <h1>RECEIPT</h1>
        
          <table>
          <tr>
          <td id="wid">Date:</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Contact Info:</td>
          
          </tr>
          <tr>
          <td id="wid">${day} ${month} ${year}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>vstechhorizon@gmail.com </td>
          </tr>

          <tr>
           <td id="wid">Name:</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>+91 9325360357 </td>
          </tr>

          <tr>
          <td id="wid">${scholarship.name}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>https://www.vstechhorizon.com/</td>
          </tr>
           
          </table>
          </br>
          </br>
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">SR.NO</th>
              <th scope="col">REGISTRATION FEES</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>999/-</td>
              <td>999/-</td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
              <td>Total</td>
              <td></td>
              <td>999/-</td>
            </tr>
          </tbody>
        </table>
        <h5 class="amount">*Amount in words: Nine Hundred Ninety-Nine.</h5>
        <h5 class="sign">This is a computer-generated receipt and no stamp or signature is needed.</h5>
        <div class="image-container">
          <img src="data:image/png;base64,${vsTechBlackLogoBase64}" alt="Thank You" class="thank-you">
          <span>Thank</span><div class="you">You</div>
        </div>
      </div>
    `;

    const options = {
      format: 'Letter', // Size of the page, can be 'A3', 'A4', 'A5', 'Legal', 'Letter' etc.
      width: '300px',   // Width of the page in pixels
      height: '400px',  // Height of the page in pixels
      border: {
        top: '10px',    // optional, defaults to 0
        right: '10px',
        bottom: '10px',
        left: '10px'
      }
    };

    const pdfFilePath = path.join(__dirname, `Receipt/${scholarship.scholarshipId}-scholarship-payment-receipt.pdf`);

    pdf.create(htmlContent, options).toFile(pdfFilePath, (err, res) => {
      if (err) {
        console.error('Error generating PDF:', err);
        reject(err);
      } else {
        console.log('PDF created:', res.filename);
        resolve(res.filename);
      }
    });
  });
}







router.post('/accept', async (req, res) => {
  const { scholarshipId } = req.body;
  console.log(scholarshipId)
  try {
    // Update scholarship status to 'accepted' in the database
    const scholarships = await Scolarships.findOneAndUpdate({ scholarshipId }, { status: 'accepted' });

    console.log(scholarships)
    const subject = 'Scholarship Registration Confirmed';
    const message = `
<p>Hi ${scholarships.name},</p>

<p>We are pleased to inform you that your registration for the Scholarship has been confirmed.</p>

<p>Thank you for completing the payment verification process. You will receive further details about the next steps soon.</p>

<p>If you have any questions, feel free to contact us.</p>
`;

    const pdfFilePath = await generatePDF(scholarships);
    sendEmail(scholarships.email, subject, message, [
      {
        filename: 'scholarship-payment-receipt.pdf',
        path: pdfFilePath,
        contentType: 'application/pdf'
      }
    ]);
    // sendEmail(scholarships.email, subject, message);
    // res.sendStatus(200);
    res.status(200).json(scholarships);
  } catch (error) {
    console.error('Error accepting scholarship:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/reject', async (req, res) => {
  const { scholarshipId } = req.body;
  console.log(scholarshipId)
  try {
    // Update scholarship status to 'rejected' in the database
    const scholarships = await Scolarships.findOneAndUpdate({ scholarshipId }, { status: 'rejected' });
    console.log(scholarships)
    const subject = 'Scholarship Registration Declined';
    const message = `
Hi ${scholarships.name},

Unfortunately, we could not confirm your registration for the Scholarship due to an issue with the payment verification.

Please double-check your transaction details and try again. If you need assistance, contact us.

We appreciate your understanding and hope to assist you soon.
`;






    sendEmail(scholarships.email, subject, message);

    res.status(200).json(scholarships);
  } catch (error) {
    console.error('Error rejecting scholarship:', error);
    res.status(500).send('Internal Server Error');
  }
});









router.get('/scholarships', async (req, res) => {
  try {
    const scholarships = await Scolarships.find();
    res.status(200).json(scholarships);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching scholarship data', error });
  }
});


router.put('/updatescholarshipstatus/:id/:status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  console.log(id + "  " + status)
  // Validate status
  if (![1, 2, 3].includes(status)) {
    return res.status(400).send('Invalid status value. Allowed values are 1, 2, 3.');
  }

  try {
    const scholarship = await Scolarships.findOneAndUpdate(
      { scholarshipId: id },
      { status: status },
      { new: true }
    );

    if (status == 2) {
      subject = 'Scholarship Application and Payment Received';
      message = `
            Dear ${scholarship.name},
            
            We are pleased to inform you that we have received your application for the  scholarship and your payment.
            
            Here are the details:
            - Name: ${scholarship.name}
            - Email: ${scholarship.email}
            - Amount: 9999
            
            You are now eligible to take the scholarship exam. We will provide you with further details shortly.
            
            Best regards,
            VS Tech Horizon
            Website: www.vstechhorizon.com
            Contact No: +91 93253 60357
            Email: vstechhorizon@gmail.com`;

      sendEmail(scholarship.email, subject, message);
    }

    if (status == 3) {
      const subject = 'Thank you for submitting the form';
      const message = 'We have received your submission. Thank you!';
      sendEmail(req.body.email, subject, message);
    }

    if (!scholarship) {
      return res.status(404).send('Scholarship not found');
    }

    res.send(scholarship);
  } catch (error) {
    res.status(500).send('Error updating scholarship status: ' + error.message);
  }
});



module.exports = router;
