import React, { useState } from 'react'
import {
  Card,
  CardBody,
  Toast, ToastBody, ToastHeader ,
  CardTitle,
  Button,
} from "reactstrap";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

export function Createtask(props) {

    const [task,setTask]= useState({
        Name:'',
        Priority:'',
        Due_Date:''
    })

   const onchangeDate = date=>{
       setTask({...task,Due_Date:date})
   }
    const onchangeName = Name=>{
       setTask({...task,Name})
   }
    const onchangePriority = Priority=>{
       setTask({...task,Priority})
   }

   const submit = ()=>{
       console.log(task)

       if(task.Name === '' || task.Priority === '' || task.Due_Date === '' ){
       toast("Please fill all fields",{type:'error'})
       return;  
       }
      Axios.post('https://internship-task-app.herokuapp.com/create',task).then(data=>{
       toast("New task is added in To-Do list!",{type:'success'})
        props.mode(false)
         
      }).catch((err)=>{
        toast("Something went wrong!",{type:'error'});
      })
   }
    

    return (
       <div className="container">
           
      <Card>
        <CardBody>
          <CardTitle tag="h5">Create Task</CardTitle>
          
          <form>
               <div className="form-group">
    <label htmlFor="exampleInputEmail1">Task Name</label>
    <input type="email" className="form-control" onChange={e=>onchangeName(e.target.value)} value={task.Name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter task name" />
    </div>
  <div className="form-group">
      <label htmlFor="inputGroupSelect02">Set task priority</label>
  <select className="custom-select form-control" onChange={e=>onchangePriority(e.target.value)} value={task.Priority} id="inputGroupSelect02">
    <option  value="">Options</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
</div>
<div className="form-group">
      <label >Pick date of completion</label>
      <br/>
 <Datepicker id="inputGroupSelect03"
                    required
                    selected={task.Due_Date}
                    onSelect={onchangeDate}
                    onChange={onchangeDate}
                     className="form-control"
                    dateFormat="Pp"
                    minDate={new Date()}
                    placeholderText="Select a date"
                    calendarClassName="form-control"
                   
                />
</div>
          </form>

          <Button onClick={submit} >Create Task</Button>
          <Button onClick={()=>props.mode(false)} color="secondary">Cancel</Button>
        </CardBody>
      </Card>
      
    </div>
    )
}
