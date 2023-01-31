import React, { Component } from 'react'
import {string,object,boolean,ref} from 'yup'


const regularExpression = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
const initialData={
  name:'abdo',
  email:'abdo@gerg.com',
  password:'123',
 };
 const defaults={
    name:'',
    email:'',
    password:'',
 };
export default class Form extends Component {
  state={
    name:'',
    email:'',
    password:'',
    myData:initialData,
  }

  schema = object().shape({
  name:  string().min(6,"name more than 8").max(16).required(),
  email:  string().email().required(),
  password: string().min(8).matches(regularExpression).required(),
  rePassword: string().oneOf([ref("password"),null]).required(),
  inChecked: boolean().oneOf([true]).required(),
  });


   handleRandomValues=( )=>{
   this.setState((prevState)=>({name:prevState.myData.name,email:prevState.myData.email,password:prevState.myData.password}))
   };

   handleSubmit=(e)=>{
     e.preventDefault();
     this.schema
   .validate({/**name:this.state.name,email:this.state.email,password:this.state.password},{abortEarly: false */
     name:"moh",email:"moh@mog.com",password:"123",rePassword:"456",inChecked:true},{abortEarly: false })
     .then((valid)=>{
      console.log('valid');
      //this.setState((prevState)=>({myData:{name:prevState.name,email:prevState.email,password:prevState.password}, ...defaults}))
      
    })
     //console.log("Submit",this.state)
     .catch((e)=>console.log(e.errors));
     
   }
  // handleChangeName=(e)=>{
  //   console.log("Name",e.target.value);
  //   this.setState({name :e.target.value})
  // }
  // handleChangeEmail=(e)=>{
  //   console.log("Email",e.target.value);
  //   this.setState({email :e.target.value})
  // }
  // handleChangePassword=(e)=>{
  //   console.log("Password",e.target.value);
  //   this.setState({password :e.target.value})
  // }
  handleChangeInput=(e)=>{
     const{value,id}=e.target;
     console.log(value,id);
     this.setState({[id]:value})
     }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>  <label htmlFor="name">Name</label>
        <input id='name' type='text' placeholder='enter name' onChange={this.handleChangeInput} value={this.state.name}/>
        </div>

        <div>  <label htmlFor="email">Email</label>
        <input id='email' type='email' placeholder='enter email' onChange={this.handleChangeInput} value={this.state.email}/>
        </div>

        <div>  <label htmlFor="password">Password</label>
        <input id='password' type='password' placeholder='enter password' onChange={this.handleChangeInput} value={this.state.password}/>
        </div>
        <button type='submit'>submit</button>
        <button type='button' onClick={this.handleRandomValues}>random</button>
      </form>
    )
  }
}
