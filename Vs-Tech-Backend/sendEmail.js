const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Create a transporter
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'vstechhorizon@gmail.com', // Your email
        pass: 'pprw zoxt vnoy kiga'  // Your email password or app password
    }
});

// Read the HTML template
const emailTemplate = fs.readFileSync(path.join(__dirname, 'emailTemplate.html'), 'utf8');

const sendEmail = (to, subject, message ,additionalAttachments = []) => {
    // Replace placeholder with the actual message
    const htmlContent = emailTemplate.replace('{{message}}', message);



    const defaultAttachments = [
        {
            filename: 'logo.png',
            path: path.join(__dirname, 'logo.png'), // Path to your logo
            cid: 'logo' // Same CID as in the HTML template
        }
    ];
    const allAttachments = defaultAttachments.concat(additionalAttachments);

    // Define email options
    let mailOptions = {
        from: 'vstechhorizon@gmail.com',
        to,
        subject,
        html: htmlContent,
        attachments: allAttachments
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

module.exports = sendEmail;
