import { useState } from "react";
import axios from "axios";



export function SignUp(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  return <div>
    <h2 style={{
      color: "#0000ff80",
      fontFamily: "Lucida Console",
      display:"flex",
      justifyContent:"center", 
    }}>Sign Up</h2>
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
        const url = "http://localhost:3000/signup"
        const data = {
          username: username,
          password: password
        }

        axios.post(url,data)
        .then(response =>{
          console.log("User signed up")
        })


      }}>Sign Up

    </div>




  </div>
}