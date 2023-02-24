import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const TodoDetails = () => {
    const {id}=useParams();
  return (
    <Details id={id}/>
  )
}

export default TodoDetails;

class Details extends Component {
    state ={
        data :[],
        isLoading:false    
    }
    componentDidMount() {
        this.setState({isLoading:true})
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.id}`)
          .then((response) => response.json())
          .then((json) =>this.setState({data:json}))
          .catch((e)=>console.log(e.message))
          .finally(()=> this.setState({isLoading:false}));
      }
  render() {
    return (
      <div>
        id:{this.props.id}
        {this.state.isLoading ? "loading..." : <div>title: {this.state.data.title}</div>}
        
      </div>
    )
  }
}
