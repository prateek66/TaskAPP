const Task = require("../models/tasks");

const defaultResponseObject = {
    success: true,
    data: null, //{},[] or null
    message: "",
    error: null,
  };


  exports.create = async(req,res)=> {
      try{
     const task = await Task.create({...req.body})
     const response = {...defaultResponseObject}
     response.data = task

     res.status(201).send(response);
      }catch(e){
          let response = {...defaultResponseObject}
          response.error =e
          response.success = false

          res.status(400).send(response)

      }
  };

  exports.GetTask = async(req,res) => {
      try{
      const id = req.params._id
      const check = await Task.findById(id)
      if(!check){
          console.log("no Task created");
      }
      const view = await Task.find({})
      let response = {...defaultResponseObject}
      response.data = view
      res.status(200).send(response)
  }catch(e){
    let response = {...defaultResponseObject}
    response.error =e
    response.success = false

    res.status(400).send(response)
  }
};

exports.changeStatus = async(req,res) => {
    const id = req.params._id,
            status = ['To-Do','Review','Completed'];
    const check = await Task.findById(id)
    if(!check){
        throw new Error("not a task")
    }
    
    if(check.Task_Status === status[2]){
        throw new Error("task is Completed")
    }
    else{

   let index = status.findIndex(x=> x===check.Task_Status)

    check.Task_Status = status[index+1]
   const Status = await check.save();

    
    let response = {...defaultResponseObject}
    response.data = Status
    res.status(200).send(response)
    }
}