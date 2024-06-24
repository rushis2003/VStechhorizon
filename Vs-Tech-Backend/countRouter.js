const express = require('express');
const router = express.Router();
const ProjectKit =require('./projectKitForm');
const Subscribe = require('./subscribe');
const Contact = require('./contactUs');
const Scolarships = require('./scholarshipForm')


router.get('/counts', async (req, res) => {
    try {
        const buyKitCount = await ProjectKit.countDocuments();
        const subscribersCount = await Subscribe.countDocuments();
        const contactUsCount = await Contact.countDocuments();
        const scholarshipCount = await Scolarships.countDocuments();

        res.json({
            buyKitCount,
            subscribersCount,
            contactUsCount,
            scholarshipCount
        });
    } catch (error) {
        console.error('Error fetching counts:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports=router;