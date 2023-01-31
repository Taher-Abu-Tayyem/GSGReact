import React, { Component } from 'react'


const data =['ahmed','rq','kh','teto'];
class Counter extends Component {
 state={
counter:0,
 value: "" }

increase=(e)=>{
this.setState(
    (prevState)=>(this.state.value===""?{counter:prevState.counter +1}:{counter:prevState.counter + parseInt(this.state.value)})
)};

decrease=(e)=>{
    this.setState(
        (prevState)=>(this.state.value===""?{counter:prevState.counter -1}:{counter:prevState.counter - parseInt(this.state.value)})
    )};
hundlenumber =(e)=>{
    this.setState( (prevState)=>({value: e.target.value})
    )};

  render() {
    return (
      <div>
        <br/>
        <button onClick={this.decrease}>-</button>
        <p>{this.state.counter}</p>
        <button onClick={this.increase}>+</button>
        <input type="number" onChange={this.hundlenumber}/>
        {data.map((item)=>(
          <div key={item}>{item}</div>
          ))}
      </div>
    )
  }
}
export default Counter;
