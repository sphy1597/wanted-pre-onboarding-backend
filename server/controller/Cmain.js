const { Job } = require('../models');

// show all job offer list
const get_job = async (req, res) => {
  const result = await Job.findAll();

  res.json({ data: result });
};

// create a new job offer
const post_job = async (req, res) => {
  const { title } = req.body;

  const result = await Job.create({ title });

  res.json({ data: result });
};

// edit a specific offer
const patch_job = (req, res) => {
  const { jobId } = req.params;
  const { title, done } = req.body;

  Job.update({ title, done }, { where: { id: jobId } }).then(() => {
    res.json({ result: true });
  });
};

// remove a specific offer
const delete_job = (req, res) => {
  const { jobId } = req.params;

  Job.destroy({ where: { id: jobId } }).then(() => {
    res.json({ result: true });
  });
};

module.exports = { get_job, post_job, patch_job, delete_job };
