import React, { Component } from "react";
import ListItem from '../components/ListItem';
const MyData = [
  { userId: 1, id: 1, title: "create project", Completed: false },
  { userId: 2, id: 2, title: "create project", Completed: false },
  { userId: 3, id: 3, title: "create project", Completed: false },
];
export default class Todo extends Component {
  obj = {
    userId: 1,
    id: 1,
    title: "create project",
    Completed: false,
  };
state ={
    data :[],

}
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.setState({data:json}));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((todo,index)=>(
            <ListItem todo={todo} key={todo.id}/>
          ))}
        </ul>
      </div>
    );
  }
}
