const { Job } = require('../models/');
const { User } = require('../models/');
const { Company } = require('../models/');

// show all job offer list
const get_job = async (req, res) => {
  try {
    // "Job" 모델을 조회하면서 연관된 "Company" 모델을 포함
    const jobsWithCompany = await Job.findAll({
      include: [Company],
    });

    // "jobsWithCompany" 배열 내의 각 항목을 가공하여 원하는 형태로 변환
    const combinedData = jobsWithCompany.map((job) => {
      const company = job.Company;
      return {
        company_id: company.company_id,
        company_name: company.company_name,
        company_country: company.company_country,
        company_area: company.company_area,
        position: job.position,
        compensation: job.compensation,
        content: job.content,
        skill: job.skill,
      };
    });

    res.json({ data: combinedData });
  } catch (error) {
    res.status(500).json({ error: "서버 에러" });
  }
};

// create a new job posting 
const post_job = async (req, res) => {
  const { company_id } = req.body;
  const { position } = req.body;
  const { compensation } = req.body;
  const { content } = req.body;
  const { skill } = req.body;
  
  const result = await Job.create({ 
    position : position,
    compensation : compensation,
    content : content,
    skill : skill,
    company_id : company_id
   });

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
