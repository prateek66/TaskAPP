const express = require('express')
const path = require("path")
const TaskContoller = require("../Controller/TaskController")

const router = express.Router();

console.log(path.join(__dirname, '..',"public", "index.html"));
router.post('/create', TaskContoller.create);
router.get('/view/:_id',TaskContoller.GetTask);
router.get('/changeStatus/:_id',TaskContoller.changeStatus);
router.get('/viewall',TaskContoller.getalltask);
router.get('/',async(req,res)=> {
    res.sendFile(path.join(__dirname, '..',"public", "index.html"));

})

module.exports = router;