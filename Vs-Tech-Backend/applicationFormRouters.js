const express = require('express');
const router = express.Router();
const sendEmail = require('./sendEmail');
const ApplicationForm = require('./applicationForm')
const multer = require('multer');
const mongoose = require('mongoose');


// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'resume/');
    },
    filename: function (req, file, cb) {
        return cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

router.post('/applicationforms', upload.single('resume'), async (req, res) => {

    console.log(req.body, req.file)
    const applicationForm = new ApplicationForm({
        position: req.body.position,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        alternateContactNumber: req.body.alternateContactNumber,
        dob: req.body.dob,
        linkedin: req.body.linkedin,
        currentCompany: req.body.currentCompany,
        totalExperience: req.body.totalExperience,
        relevantExperience: req.body.relevantExperience,
        currentCTC: req.body.currentCTC,
        expectedCTC: req.body.expectedCTC,
        noticePeriod: req.body.noticePeriod,
        resume: `/resume/${req.file.filename}`
    });
    const subject = 'Job Application Received';
    const message = `
    <p>Hi ${req.body.firstName} ${req.body.lastName},</p>
    
    <p>Thank you for applying at VS Tech Horizon.</p>
    
    <p>We have received your application and our team is currently reviewing your qualifications. If your skills and experience match our requirements, we will reach out to you to discuss the next steps.</p>
    
    <p>If you have any questions in the meantime, please feel free to contact us at <a href="mailto:hr@vstechhorizon.com">hr@vstechhorizon.com</a>.</p>
    
    <p>Thank you for your interest in VS Tech Horizon. We appreciate the time you put into your application.</p>
    `;
    
    sendEmail(req.body.email, subject, message);
    applicationForm.save()
        .then(() => res.status(200).send({
            message: 'Form submitted successfully'
        }))
        .catch(error => res.status(500).send({ message: 'Error saving form data', error }));
});


router.get('/applicationforms', async (req, res) => {
    try {
        const applicationForm = await ApplicationForm.find();
        res.status(200).json(applicationForm);
    } catch (error) {
        console.error('Error fetching form details:', error);
        res.status(500).json({ message: 'Failed to fetch form details' });
    }
});


module.exports = router;