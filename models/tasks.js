const mongoose = require('mongoose')
const task = new mongoose.Schema({
    Name:{
        type:String
    },
    Priority:{
        type:String,
        default:"Low",
        enum:['Low','Medium','High']
    },
      Due_Date:{
          type:Date
      },
      Task_Status:{
          type:String,
          default:"To-Do",
          enum:['To-Do','Review','Completed']
      }
},{
    timestamps:true
});

const Task = mongoose.model('Task', task);

module.exports = Task;