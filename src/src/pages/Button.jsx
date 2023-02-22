import React, { Component } from 'react';

class Button extends Component{
state={text:"light"};

change=()=>{
    this.state.text ==="light" ? this.setState({text:"dark"}):this.setState({text:"light"})
    
}
render(){
    return(
        <div>
            <button onClick={this.change}>{this.state.text}</button>
        </div>
    )
}
}
export default Button;