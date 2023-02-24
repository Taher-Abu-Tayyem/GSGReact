import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = (props) => {
  return (
    <header>
        <h1>Logo</h1>
        <ul>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/">home</NavLink>
            </li>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/ApiForm">ApiForm</NavLink>
            </li>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/counters">counters</NavLink>
            </li>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/TodoList">todoList</NavLink>
            </li>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/form">form</NavLink>
            </li>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/passwordCheck">password check</NavLink>
            </li>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/posts">posts</NavLink>
            </li>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/todo">todo</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header