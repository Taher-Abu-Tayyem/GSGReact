import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ListItem extends Component {
  render() {
    /*console.log(this.props.todo)*/
    return (
      <li style={{padding:3,backgroundColor:"gray",border:'1px solid #123'}}>
        <Link to={`/todo/${this.props.todo.id} `}>
        <span>user id:{this.props.todo.userId} | <span>id:{this.props.todo.id}</span></span>
        <span>{this.props.todo.completed ?'completed':'not completed'}</span>
        </Link>    
      </li>
    )
  }
}
