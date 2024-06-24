const mongoose = require('mongoose');
const popupSettingsSchema = new mongoose.Schema({
    showPopup: Boolean,
    popupType: String,
    popupContent: { type: String,function() { return this.popupType === 'text'; } },
    imageUrl: { type: String, required: function() { return this.popupType === 'image'; } }
  
  });
  
const PopupSettings = mongoose.model('PopupSettings', popupSettingsSchema);

module.exports= PopupSettings;