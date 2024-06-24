const express = require('express');
const router = express.Router();
const PopupSettings = require('./popUp');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'popUpImage/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });


// router.post('/popup-settings', (req, res) => {

// //     const newSettings = new PopupSettings(req.body);

// //     newSettings.save((err, savedSettings) => {
// //       if (err) return res.status(500).send(err);
// //       res.status(200).send(savedSettings);
// //     });
// //   });
// try {
//     const newSettings = new PopupSettings(req.body);
//     console.log(newSettings)
//     newSettings.save();
//     res.status(200).send(savedSettings);
//   } catch (err) {
//     res.status(500).send({ message: 'Error saving settings', error: err });
//   }
// });


// router.post('/popup-settings', upload.single('imageFile'), async (req, res) => {
//     try {
//       const { showPopup, popupType, popupContent } = req.body;
//       console.log("show")
//       const newSettings = new PopupSettings({
//         showPopup: JSON.parse(showPopup),
//         popupType,
//         popupContent,
//         imageUrl: req.file ? `/popUpImage/${req.file.filename}` : null
//       });
//       console.log(newSettings)
//       const savedSettings = await newSettings.save();
//       res.status(200).send(savedSettings);
//     } catch (err) {
//       res.status(500).send({ message: 'Error saving settings', error: err });
//     }
// });


router.post('/popup-settings', upload.single('imageFile'), async (req, res) => {
  try {
    const { showPopup, popupType, popupContent } = req.body;

    // Check if there is an existing record
    let existingSettings = await PopupSettings.findOne();

    if (existingSettings) {
      // Update existing record
      existingSettings.showPopup = JSON.parse(showPopup);
      existingSettings.popupType = popupType;
      existingSettings.popupContent = popupContent;
      existingSettings.imageUrl = req.file ? `/popUpImage/${req.file.filename}` : existingSettings.imageUrl;

      const updatedSettings = await existingSettings.save();
      res.status(200).send(updatedSettings);
    } else {
      // Create new record if none exists
      const newSettings = new PopupSettings({
        showPopup: JSON.parse(showPopup),
        popupType,
        popupContent,
        imageUrl: req.file ? `/popUpImage/${req.file.filename}` : null
      });

      const savedSettings = await newSettings.save();
      res.status(200).send(savedSettings);
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving settings', error: err });
  }
});

router.get('/popup-settings', async (req, res) => {
  console.log("feached")
  try {
    const settings = await PopupSettings.findOne();
    if (settings) {
      res.status(200).send(settings);
    } else {
      res.status(404).send({ message: 'Settings not found' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error retrieving settings', error: err });
  }
});

module.exports = router;
