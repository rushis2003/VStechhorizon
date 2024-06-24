const mongoose = require('mongoose')

const projectKitSchema = new mongoose.Schema({
    projectKitId: {type: Number,unique: true},
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    kit: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    additionalRequests: { type: String },
    submitDate: {type: String}
});

projectKitSchema.pre('save', async function (next) {
    if (!this.submitDate) {
        const currentDate = new Date();
      this.submitDate = currentDate.toLocaleString();
    }
    next();
});






projectKitSchema.pre('save', async function (next) {
  if (!this.projectKitId) {
    this.projectKitId = await generateNextprojectKitId();
  }
  next();
});

// Function to generate the next projectKitId
async function generateNextprojectKitId() {
  // Find the maximum projectKitId from the database
  const maxscholarship = await projectKit.findOne({}, {}, { sort: { 'projectKitId': -1 } });
  let nextprojectKitId = 1;

  if (maxscholarship) {
    // Increment the maximum projectKitId
    nextprojectKitId = maxscholarship.projectKitId + 1;
  }

  return nextprojectKitId;
}










const projectKit = mongoose.model('ProjectKit', projectKitSchema);

module.exports=projectKit;