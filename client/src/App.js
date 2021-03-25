import React, { useEffect, useState } from "react";


// react-router-dom3

// react toastify stuffs
import "react-toastify/dist/ReactToastify.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



import Header from "./layout/Header";
import List from "./components/List";
import { Createtask } from "./components/CreateTask";
import { ToastContainer } from "react-toastify";


const App = () => {
 
    const [createMode,setCreateMode] = useState(false)

  // getting contact  when component did mount
  useEffect(() => {
    // getContacts();
  }, []);

  return (
    
       <>
        <Header  />
        {createMode ?  <Createtask mode={setCreateMode} /> :
          <List mode={setCreateMode} />}
     
       <ToastContainer />
       </>
        
  );
};

export default App;
