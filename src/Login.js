//import react from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
//import {Link,BrowserRouter as Router} from 'react-router-dom'
const Login=(props)=>{
    const [UserName,Setusername]=useState("");
    const [Password,setpassword]=useState("");
    let history = useHistory();
   // async function k(){

      console.warn(UserName,Password);
      let item ={UserName,Password}
    //   let result=await fetch("https://localhost:44350/api/login/Authenticate/",
    //       method:'POST',
    //       headers:{
    //           "Content-Type": "applcation/json",
    //           "Accept":'application/json'
    //       },
    //       body:JSON.stringify(item)
    //   });
    const apiUrl = "https://localhost:44304/api/Login/";
    const k = (e) => {  
        e.preventDefault();  
        debugger;  
        const data1 = { UserName: item.UserName, Password: item.Password };  
        axios.post(apiUrl, data1) 
          .then((result) => {  
            debugger;  
            console.log(result.data); 
           // const Token = result.data.Result.Token; 
            //localStorage.setItem('Token', Token);
            if (result.data.Status === 'Invalid')  
              alert('Invalid User');  
            else  
              history.push('/Move')  
          })  
      }  
    //   result=await result.json();
    //   localStorage.setItem("user-info",JSON.stringify(result))
    //   history.push("/Move");
    //   if(UserName==='e' & Password==='e'){
    //     alert("welcome");
    //     history.push("/Move");
    //   }
   // }
    return(
    
        <div>
<label>UserName</label><br />
        <input type="text" onChange={e=>Setusername(e.target.value)} placeholder="username"></input><br />
        <label>Password</label><br />
        <input onChange={p=>setpassword(p.target.value)} type="password" placeholder="password"></input><br />
        <button onClick={k}>submit</button>
        <br/>
        <br/>
        <a href="/Eswar">data</a>
</div>
    );
}
export default Login;