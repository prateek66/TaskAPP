import React, { useEffect, useState } from "react";

import { Badge } from 'reactstrap';
import {
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

const List = (props) => {

    const[task,setTask]= useState([])

   const className = (staus)=>{
       if(staus === 'To-Do') return 'primary'
       if(staus === 'Review') return 'secondary'
       if(staus === 'Completed') return 'success'
   }

   const changeStaus = (id) =>{
        Axios.get('https://internship-task-app.herokuapp.com/changeStatus/'+id).then(data=>{
           
 toast("Status has been changed!",{type:'success'})
          getTask();
       }).catch(err=>{
           console.log(err)

       })
   }

   useEffect(()=>{
      getTask();
   },[])


   const getTask =()=>{
        Axios.get('https://internship-task-app.herokuapp.com/viewall').then(data=>{
           console.log(data.data.alltask)
           setTask([...data.data.alltask])
       }).catch(err=>{
           console.log(err)

       })
   }
   

  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle tag="h5">To-Do List</CardTitle>
          <ul className="list-group">
            {task.map((e,i)=>{
                return(
                    <li key={i} className="list-group-item">{e.Name} <Badge  color={className(e.Task_Status)}>{e.Task_Status}</Badge>&nbsp;{new Date(e.Due_Date).toLocaleString()}
             <Badge className="float-right" onClick={()=>changeStaus(e._id)} color="warning"><i className="fas fa-edit"></i></Badge></li>
          
                )
            })}
            </ul>
          <Button onClick={()=>props.mode(true)}>Create Task</Button>
        </CardBody>
      </Card>
       <ToastContainer />
    </div>
  );
};

export default List;
