const express = require('express');
const router = express.Router();
const sendEmail = require('./sendEmail');
const Subscribe = require('./subscribe');

router.post('/subscribe', async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const subscribe = new Subscribe(data);
        await subscribe.save();

        const subject = 'Welcome to VS Tech Horizon!';
        const message = `
            <p>Hi,</p>
            <p>Thank you for subscribing to our newsletter!</p>
            <p>You will now receive the latest updates, news, and exclusive offers from VS Tech Horizon directly in your inbox.</p>
            <p>If you have any questions or need further assistance, feel free to contact us.</p>
            <p>Welcome aboard!</p>
        `;

        sendEmail(req.body.email, subject, message);
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to subscribe' });
    }
});

router.get('/subscribe', async (req, res) => {
    try {
        const subscribes = await Subscribe.find();
        res.status(200).json(subscribes);
    } catch (error) {
        console.error('Error fetching form details:', error);
        res.status(500).json({ message: 'Failed to fetch form details' });
    }
});

module.exports = router;
