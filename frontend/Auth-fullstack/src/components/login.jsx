import { useState } from "react";
import axios from "axios";



export function Login(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [token,setToken] = useState("");
  return <div>
    <h2 style={{
      color: "#0000ff80",
      fontFamily: "Lucida Console",
      display:"flex",
      justifyContent:"center", 
    }}>Log In</h2>
    <br></br>
    <input style={{
      padding:"10px",
      margin: "10px"
    }}
    type = "text"
    placeholder = "Enter Username"
    onChange={function(e){
      setUsername(e.target.value);

    }}></input><br></br>
    <input style={{
      padding:"10px",
      margin: "10px"
    }}
    type = "text"
    placeholder = "Enter Password"
    onChange={function(e){
      setPassword(e.target.value);

    }}></input><br></br>
    <div style={{
      display:"flex",
      justifyContent:"center",
      backgroundColor:"#0000ff80",
      paddingLeft:"10px",
      paddingRight:"10px",
      paddingTop:"5px",
      paddingBottom:"5px",
      borderRadius:"2px"}}
      onClick = {function(){
        const url = "http://localhost:3000/login"
        const data = {
          username: username,
          password: password
        }

        axios.get(url,data)
        .then(response =>{
          console.log("User Logged in")
          setToken(response.body.token);
        
        })
        


      }}>Log In

    </div>




  </div>
}

