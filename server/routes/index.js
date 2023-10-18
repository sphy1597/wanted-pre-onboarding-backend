const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// router.get('/job', controller.get_job);
// router.post('/jobs', controller.post_job);
// router.patch('/job/:todoId', controller.patch_job);
// router.delete('/job/:todoId', controller.delete_job);

// add user 
router.post('/user', controller.post_user);

// add company 
router.post('/company', controller.post_company);

// add job posting
router.post('/job', controller.post_job);

// get Job list
router.get('/job', controller.get_job);

module.exports = router;
