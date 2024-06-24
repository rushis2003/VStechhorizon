const express = require('express');
const router = express.Router();
const sendEmail = require('./sendEmail');
const ProjectKit = require('./projectKitForm')

router.post('/projectkit', async (req, res) => {
    console.log(req.body);
    const projectKit = new ProjectKit({
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        pincode: req.body.pincode,
        kit: req.body.kit,
        quantity: req.body.quantity,
        additionalRequests: req.body.additionalRequests
    });

 

    projectKit.save()
        .then(() => res.status(200).send({
            message: 'Form submitted successfully'
        }))
        .catch(error => res.status(500).send({ message: 'Error saving form data', error }));

        const subject = 'VS Tech Horizon - Project Kit Order form submission';
        const message = `
<p>Dear ${req.body.fullName},</p>

<p>Thank you for your order from VS Tech Horizon!</p>

<p>We have received your request to purchase a project kit. Here are the details of your order:</p>

<p>One of our representatives will contact you shortly at the phone number you provided to confirm your order details and arrange payment and shipping.</p>

<p>If you have any questions or need immediate assistance, please feel free to contact us at <a href="mailto:vstechhorizon@gmail.com">vstechhorizon@gmail.com</a> or call us at (+91) 93253 60357.</p>

<p>Thank you for choosing VS Tech Horizon. We look forward to speaking with you soon!</p>
`;

    
        sendEmail(req.body.email, subject, message);
});

// Route to fetch all project kit orders
router.get('/projectkits', async (req, res) => {
    try {
        const projectKits = await ProjectKit.find();
        res.status(200).json(projectKits);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching project kit data', error });
    }
});


module.exports = router;