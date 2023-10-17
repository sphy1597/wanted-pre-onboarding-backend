const { Job } = require('../models/');
const { User } = require('../models/');
const { Company } = require('../models/');

// show all job offer list
const get_job = async (req, res) => {
  const result = await Job.findAll();

  res.json({ data: result });
};

// create a new job posting 
const post_job = async (req, res) => {
  const { title } = req.body;

  const result = await Job.create({ title });

  res.json({ data: result });
};

// create a new user
const post_user = async (req, res) => {
  const { name } = req.body;

  const result = await User.create({ user_name: name }); 

  res.json({ data: result });
};

// create a new company
const post_company = async (req, res) => {

  const { name } = req.body;
  const { country } = req.body;
  const { area } = req.body;

  const result = await Company.create({
    company_name: name,
    company_country: country,
    company_area: area
  });

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

module.exports = { get_job, post_job, patch_job, delete_job, post_user, post_company };
