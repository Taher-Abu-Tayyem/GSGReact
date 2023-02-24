import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import {string,object } from 'yup'
import axios from 'axios'; 

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
export default class ApiForm extends Component {
  state={
    email:'',
    password:'',
    isLoggingin:false,
    isLoading:false,
  }

  schema = object().shape({
  email:  string().required(),
  password: string().required(),
  
  });


   handleSubmit=async(e)=>{
     e.preventDefault();
     this.setState({isLoading:true})
     this.schema
   .validate({
     email:"moh@mog.com",password:"123"},{abortEarly: false })
     .then(async(email,password)=>{
        console.log(email,password);
       const res= await axios.post('https://dummyjson.com/auth/login',{
        username: email,
        password,
        });
        console.log(res);
        if(res) this.setState({isLoggingin:true})
    })
     .catch((e)=>console.log(e.errors))
     .finally(()=>this.setState({isLoading:false}));  
   }
  
  handleChangeInput=(e)=>{
     const{value,id}=e.target;
     this.setState({[id]:value})
     }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <div>  {this.state.error}  </div>
        <br/>
        <div>  <label htmlFor="email">Email</label>
        <input id='email' type='text' placeholder='enter email' onChange={this.handleChangeInput} value={this.state.email}/>
        </div>
        <br/>
        <div>  <label htmlFor="password">Password</label>
        <input id='password' type='password' placeholder='enter password' onChange={this.handleChangeInput} value={this.state.password}/>
        </div>
        <button type='submit'>{this.state.isLoading ?"loading...":"Submit"}</button>
        {this.state.isLoggingin ? <Navigate to='/'/> :""}
      </form>
    )
  }
}
