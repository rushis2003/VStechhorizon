const mongoose = require('mongoose');

// Define the schema for job openings
const jobOpeningSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    experienceLevel: {
        type: String,
        required: true
    },
    jobLocation: {
        type: String,
        required: true
    },
    jobDescription: {
        companyProfile: String,
        position: String,
        currentOpening: Number,
        primarySkill: [String],
        workDays: String,
        workTimings: String,
        salary: String,
        educationalQualifications: [String],
        roleOverview: String,
        requiredRoleAttributes: [String],
        requiredSkills: [String],
        additionalSkills: [String],
        careerPath: String
      }
});



jobOpeningSchema.pre('save', async function (next) {
    if (!this.id) {
      this.id = await generateNextid();
    }
    next();
  });
  
  // Function to generate the next id
  async function generateNextid() {
    // Find the maximum id from the database
    const maxContact = await jobOpening.findOne({}, {}, { sort: { 'id': -1 } });
    let nextid = 1;
  
    if (maxContact) {
      // Increment the maximum id
      nextid = maxContact.id + 1;
    }
  
    return nextid;
  }
  


// Create a model using the schema
const jobOpening = mongoose.model('jobOpening', jobOpeningSchema);

module.exports = jobOpening;
