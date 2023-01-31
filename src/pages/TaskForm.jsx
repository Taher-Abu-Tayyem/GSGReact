import React, { Component } from 'react'
;

export default class TaskForm extends Component {
    state={
        background:'red',
        width:'0px'
    }


    handleChangePassword=(e)=>{
        const Teto=e.target.value;
        console.log(Teto);
        // eslint-disable-next-line default-case
        switch (Teto.length){
            case 0:
                this.setState({background :"red", width:'10px'})
                break;
            case 1:
                this.setState({background :"red", width:'20px'})
                break;
            case 2:
                this.setState({background :"orange", width:'30px'})
                break;
            case 3:
                this.setState({background :"orange", width:'40px'})
                break;
            case 4:
                this.setState({background :"green", width:'50px'})
                break;
            case 5:
                this.setState({background :"green", width:'60px'})
                break;
         
        }   
    }

  render() {
    return (
     <form >
        <label htmlFor="email">Email address</label>
        <input id='email' type="email" />
        <br/>
        <label htmlFor="password">Create password</label>
        <input id='password' type="password" onChange={this.handleChangePassword}/>

        <div className="password-strength-meter">
            <div style={{background:this.state.background,width:this.state.width}} className="password-strength-meter-fill"></div>
        </div>
        
        <label   htmlFor="passwordd">Repeat password</label>
        <input id='passwordd' type="password" />
        <br/><input type="checkbox" />I agree

      
  
     </form>
    )
  }
}

