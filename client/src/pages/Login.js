import React, {useState, useEffect} from "react";
import Axios from 'axios';


export const Login = () => {

    const[UserName, setUser] = useState("");
    const[Password, setPassword] = useState("");
    const[Type, setType] = useState("");

   
     const login = async () => {
         if (!UserName || !Password) {
            alert('breh')
            return;
        }
            
       const response = await Axios.post('http://localhost:3001/api/login',{
        UserName: UserName, 
         Password: Password,
        
       });

    
       const result = await response.data;
       console.log(response, result)
       if (result.length > 0) {
        alert('successful insert');
       } else {
        alert("invalid username and password");
       }
     };

    return (
        <>
             <div className="intext0">
    login
        </div>
        <form>
          <label htmlFor="uname">User Name:</label><br />
          <input type="text" name="UserName" onChange={(e) => {
            setUser(e.target.value);
          }}/>
          <br />
          <br />
          <label htmlFor="fname">Password:</label><br />
          <input type="text" name="Password" onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <br />
          <br />
          <label htmlFor="fname">Type:</label><br />
          <input type="text" name="Password" onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <br />
          <br />
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" />
          <br />
          <br />
          <label htmlFor="em">Email:</label><br />
          <input type="text" id="em" name="pem" />
        </form>
        <br />
        <button onClick={login}>Log in</button>
        </>
    )
}