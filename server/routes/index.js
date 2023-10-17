const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/job', controller.get_job);
router.post('/jobs', controller.post_job);
router.patch('/job/:todoId', controller.patch_job);
router.delete('/job/:todoId', controller.delete_job);

module.exports = router;
