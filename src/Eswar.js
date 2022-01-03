import React,{Component} from 'react';
import axios from 'axios';

export default class Eswar extends Component {
    constructor(){
        super();
        this.getUser=this.getUser.bind(this);
        this.state={
          users:[]
        }
      }
      componentDidMount(){
          debugger
        this.getUser();
      }
      async getUser(){
          debugger
        let usersData=await axios.get('https://localhost:44304/api/Values/api/values')
                        .then(res=>{
                          return res.data;
                        })
                        .catch(err=>{
                          console.log(err);
                        })
        this.setState({
          users:usersData
        },()=>{console.log(this.state)})
      }
  async delete(){
      console.log("eswar");
  }
  render(){
    const {users}=this.state;
    return (
       
        <div className="Eswar">
             <table>
               <thead>  <tr><td>id</td><td>username</td><td>email</td><td>phonenumber</td><td>password</td><td>Update/Delete</td></tr>

               </thead>
               <tbody>

                        {users.map((user,index)=>(
                            <tr>
                               
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phonenumber}</td>
                                <td>{user.password}</td>
                               <td><button >Update</button>
               <button onClick={this.delete}>Delete</button></td>
                            </tr>
                        ))}

               </tbody>


           
         
               </table>
        {/* {users && users.map(user=>{
          return(
            <div className="card" key={user.id}>
              
              <div className="container" >
                <h4 ><b>{user.id}</b></h4>
              
              </div>
              <div className="container" >
               
                <p>{user.username}</p>
              </div>
            </div>
          )
        })} */}
        
      </div>
    );
  }
}