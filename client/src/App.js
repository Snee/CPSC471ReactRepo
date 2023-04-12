import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
// import Admin from './pages/Admin';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Signup } from './pages/Signup';
// import { Login } from './pages/Login';

function App() {

//  const[UserName, setUser] = useState("");
//  const[Password, setPassword] = useState("");

  // const submit = () => {
  //   Axios.post('http://localhost:3001/api/insert', {
  //     UserName: UserName, 
  //     Password: Password,
     
  //   }).then(() => {
  //     console.log('button check after axios')
  //     alert('successful insert');
  //   });
  // };

  return (
    <div>
      <h1>
        Hello! Welcome to the Lakers Catalog
      </h1>
        <div>
          Here is the Lakers Catalog
        </div>
    </div>
      
  );
  
}


export default App;