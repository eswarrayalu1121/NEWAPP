import React from "react";
//import reactDom from "react-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { render } from "@testing-library/react";

const Register=(props)=>{

// const [register,setregister]=useState({
//     UserName:String
// })
    const [UserName,SetUserName]=useState("");
    const [id,Setid]=useState("");
    const [LastName,SetLastName]=useState("");
    const [MobileNo,SetMobileNo]=useState("");
    const [EmailId,SetEmailId]=useState("");
    const [Gender,SetGender]=useState("");
    const [Status,SetStatus]=useState("");
    const [Createdby,SetCreatedby]=useState("");
    const [Password,setPassword]=useState("");
    let history = useHistory();
   // async function k(){

      console.warn(UserName,Password,id,MobileNo,LastName,EmailId,Gender,Status,Createdby);
      let item ={UserName,Password,id,MobileNo,LastName,EmailId,Gender,Status,Createdby}
      const apiUrl = " https://localhost:44304/api/Values/api/Values/";
      const apiUrll = "https://localhost:44304/api/Values/api/values";
     //const get =>{

     //}
    //  const Get=(async()=>
    //  {
    //    debugger
    //    try {
    //      //const requestUrl = 'https://localhost:44304/api/Values/api/Values/chandu';
    //      const response = await fetch(apiUrl);
    //      const requestJSON = await response.json();
    //      debugger;
    //      console.log({requestJSON});
    //     // Id=requestJSON.Id
    //      console.log(requestJSON.email);
    //    //  const {data} = requestJSON;
 
    //    // setform()
    //    // console.log(form)
      
    //    }
    //    catch (error) {
    //      console.log('Failed to fetch post list: ',error.message);
    //    }
    //  })
      const k = (e) => {  
          e.preventDefault();  
       
            const dataaa = JSON.stringify(localStorage.getItem('Token'))
          
          debugger;  
 
          const data1 = { UserName: item.UserName, Password: item.Password,id:item.id,MobileNo:item.MobileNo,LastName:item.LastName,EmailId:item.EmailId,Gender:item.Gender,Status:item.Status,Createdby:item.Createdby };  
          axios.post(apiUrl ,item) 
       
            .then((result) => {
              debugger;  
              console.log(result.data);  
              if (result.status === 201)  
              history.push('/Login')   
              else  
              alert('Invalid User');  
            })  
      }  
      let dataget=[];
      const getdataGet=(async()=>{
debugger
        axios.get(apiUrll).then((result)=>{
          debugger
           dataget=result.data;
          console.log(dataget);
        }
        
        )

      } )
    return(
        <div>
       <h1>Register Form</h1>
      
       <label>id</label><br />
               <input type="number" onChange={e=>Setid(e.target.value)} placeholder="FirstName"></input><br />
               
               
              
               
               <label>MobileNo</label><br />
               <input type="number" onChange={e=>SetMobileNo(e.target.value)} placeholder="MobileNo"></input><br />
               
               
               <label>UserName</label><br />
               <input type="text" onChange={e=>SetUserName(e.target.value)} placeholder="UserName"></input><br />
               
               
               <label>EmailId</label><br />

               <input type="text" onChange={e=>SetEmailId(e.target.value)} placeholder="EmailId"></input><br />

 

               <label>Password</label><br />
               <input onChange={p=>setPassword(p.target.value)} type="password" placeholder="PasswordHash"></input><br />
               <button onClick={k}>submit</button>
               <button onClick={getdataGet}>getdata</button>
               <br/>
               <br/>
               <a href="/Eswar">data</a>
              
               <div>
      {
      dataget.map(dataget => (
        <p>{dataget[0].username}</p>
      )
      )}
    </div>
       </div>
    );
}
export default Register;

 //   Headers:{
        //     Authorization:"bearer";
        // } 
        // const config = {
        //    headers: {
        //       'Content-Type':'application/json',
        //       'Authorization ': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxM…wLyJ9.ry_40_FW1SswEqQHx-BZiqeis6YYhXFtUgd6beeUM38',
        //       'x-vaccination-api-version' : '1'
        //    }
        //     }
        //         { headers: {'Authorization' : `Bearer ${token}`,'Content-Type':'application/json','x-vaccination-api-version':'1'} }
         // const token="hjgbsdf";

      //    {this.state.dataget.map(event => (<tr>
      //     <td>{event.id}</td>
      //     <td>{event.username}</td>
      //     <td>{event.email}</td>
      //     <td>{event.phonenumber}</td>
      //     <td>{event.password}</td>
           {/* <td>{dataget[0].id}</td>
            <td>{dataget[0].username}</td>
          <td>{dataget[0].email}</td>
          <td>{dataget[0].phonenumber}</td>
          <td>{dataget[0].password}</td> </tr> */}
    //   {dataget.map(d => (<td key={d.id}>{d.username}</td>))} 
      //    </tr>
     {/* //  })} */}
      //  </tr>))}