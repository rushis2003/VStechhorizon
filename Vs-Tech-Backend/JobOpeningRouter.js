const express = require('express');
const router = express.Router();
const Job = require('./JobOpeing');

// Create a new job opening
router.post('/job', async (req, res) => {
  console.log("inside add job");
  console.log(req.body);
  try {
    const newJob =Job(req.body);
    newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all job openings
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/job/:id', async (req, res) => {
  const jobId = parseInt(req.params.id, 10);
    console.log(jobId)
  try {
      const job = await Job.findOne({ id: jobId });
      if (!job) {
          return res.status(404).send({ message: 'Job not found' });
      }
      res.send(job);
      console.log(job);
  } catch (error) {
      res.status(500).send({ message: 'Server error', error });
  }
});
router.delete('/job/:id', async (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  console.log(jobId);
  try {
    const result = await Job.deleteOne({ id: jobId });
    if (result.deletedCount === 0) {
      return res.status(404).send({ message: 'Job not found' });
    }
    res.send({ message: 'Job deleted successfully' });
    console.log(`Job with id ${jobId} deleted successfully`);
  } catch (error) {
    res.status(500).send({ message: 'Server error', error });
  }
});


router.put('/job/:id', async (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  if (isNaN(jobId)) {
    return res.status(400).send({ message: 'Invalid job ID' });
  }

  const updateData = req.body;

  try {
    // Find the job by ID
    const job = await Job.findOne({ id: jobId });
    if (!job) {
      return res.status(404).send({ message: 'Job not found' });
    }

    // Update the job with the new data
    Object.assign(job, updateData);

    // Save the updated job
    await job.save();

    // Respond with the updated job
    res.send(job);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).send({ message: 'Server error', error });
  }
});

// Other CRUD routes for job openings (e.g., update, delete) can be added similarly

module.exports = router;
