import React, { Component } from 'react'
import IdCounter from './IdCounter'

const counters =[
    {id:1,count:0,steps:1},
    {id:2,count:0,steps:1},
    {id:3,count:0,steps:1},
]
export default class Counters extends Component {
    state={
        counters,
    };

   onIncrement=(id,steps=1)=>{
    this.setState((prevState)=>{
      return{
      counters:prevState.counters.map(item=>{  //عشان يحفظ الزيادة ويضل يزيد 
        if (item.id===id){
          console.log({...item,count: item.count +steps});
          return{...item,count: item.count +steps};
        }
        return item;
      }),
    };
   });
  };

  render() {
   // console.log(this.state);
    return (
      <div>
        {this.state.counters.map((item)=>(
          <IdCounter key={item.id} item={item} onIncrement={this.onIncrement} />
        ))}
      <h1>total:{this.state.counters.reduce(
        (accumulator,currentValue)=>accumulator+currentValue.count,0)} {/**عشان يجمع الكاونت */}
        </h1>
      </div>
    )
  }
}

