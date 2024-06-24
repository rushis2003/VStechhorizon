const mongoose = require("mongoose")

const scholarshipSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    // email: { type: String, required: true },
    // number: { type: String, required: true },
    // dateOfBirth: { type: Date },
    // gender: { type: String, required: true },
    // address: { type: String, required: true },
    // currentStudyStatus: { type: String, required: true },
    // transactionId: { type: String, required: true },
    // file1: { type: String, required: true },
    // submitDate: {type: String},
    scholarshipId: {type: Number,unique: true},
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    school: { type: String },
    std: { type: String },
    year: {type: String },
    branch: {type: String },
    aadhar: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String },
    address: { type: String },
    aadharadd: { type: String },
    transactionId: { type: String },
    screenshot: { type: String }, // Assuming you store file path for screenshot
    file1: { type: String },
    submitDate: {type: String},
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending'
  }
});

scholarshipSchema.pre('save', async function (next) {
    if (!this.submitDate) {
        const currentDate = new Date();
      this.submitDate = currentDate.toLocaleString();
    }
    next();
});

scholarshipSchema.pre('save', async function (next) {
  if (!this.scholarshipId) {
    this.scholarshipId = await generateNextscholarshipId();
  }
  next();
});

// Function to generate the next scholarshipId
async function generateNextscholarshipId() {
  // Find the maximum scholarshipId from the database
  const maxscholarship = await scholarship.findOne({}, {}, { sort: { 'scholarshipId': -1 } });
  let nextscholarshipId = 1;

  if (maxscholarship) {
    // Increment the maximum scholarshipId
    nextscholarshipId = maxscholarship.scholarshipId + 1;
  }

  return nextscholarshipId;
}


const scholarship = mongoose.model('scholarship', scholarshipSchema);

module.exports = scholarship;