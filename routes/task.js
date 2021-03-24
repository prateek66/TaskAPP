const express = require('express')
const TaskContoller = require("../Controller/TaskController")

const router = express.Router();

router.post('/create', TaskContoller.create);
router.get('/view/:_id',TaskContoller.GetTask);
router.get('/changeStatus/:_id',TaskContoller.changeStatus);

module.exports = router;