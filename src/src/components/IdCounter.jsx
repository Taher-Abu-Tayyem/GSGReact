import React, { Component } from 'react'

class IdCounter extends Component {

  
  render() {
   // console.log(this.props)
    return (
      <div>
        <br/>
        <hr/>
        <button onClick={this.props.item.decrease}>-</button>
        <p>{this.props.item.count}</p>
        <button onClick={()=>this.props.onIncrement(this.props.item.id,this.props.item.steps)}>+</button>
        
        
      </div>
    )
  }
}
export default IdCounter;
