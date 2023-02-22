import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import {posts} from '../mock/Posts'

const data=[
    {id:1,title:'create project',body:"fglfkgnlfdgnfd" },
    {id:2,title:'create project',body:"fglfkgnlfdgnfd" },
    {id:3,title:'create project',body:"fglfkgnlfdgnfd" },
];
 const Post =()=>{
    const{id}=useParams();
    const myData =posts.find((item)=> item.id === Number(id));
    console.log(myData);
    return <div>
        <h1>post number {myData?.id}</h1>
        <h3>{myData?.title}</h3>
        <p>{myData?.body}</p>
    </div>
   
}
export default Post
