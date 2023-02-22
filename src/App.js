
import Card from './components/Card';
import Counter from './components/Counter';
import Counters from './components/Counters';
import IdCounter from './components/IdCounter';
import Header from './components/Header';
import Button from './pages/Button';
import Form from './pages/Form';
import TaskForm from './pages/TaskForm';
import { Routes,Route,Link, useRoutes } from 'react-router-dom';
import TodoList from './mock/TodoList';
import Post from './pages/Post';
import {posts} from './mock/Posts';

function App() {
  const router=useRoutes([
    {path:'/',element:<h1>home</h1>},
    {path:'/Form',element:<Form/>},
    {path:'/counters',element:<Counters/>},
    {path:'/TodoList',element:<TodoList/>},
    {path:'/passwordCheck',element:<TaskForm/>},

    {path:'/posts/:id',element:<Post/>},
    {path:'/posts',element:
     <ul>
    {posts.map(item=> <li><Link to={`/Posts/${item.id}`} >post {item.id}</Link></li>)} 
    </ul>} ,
    {path:'*',element:<h1>page not found 404</h1>},
  ])

  
    

  return (
    <div className="App">
      <Header/>
      {router}

    {/*
      <Routes>
        <Route path='/' element={<div>
          <Counters/>
        <ul>
       <li>
       <Link to='/Form'>todo</Link>
       </li>
       <li>
       <Link to='/Posts'>posts</Link>
       </li>
       </ul>
       </div>}/>

        <Route path='/Form' element={<Form/>}/>
        <Route path='/TaskForm' element={<TaskForm/>}/>

        <Route path='/Posts' element={
        <ul>
          {posts.map(item=> 
          <li><Link to={`/Posts/${item.id}`} >post {item.id}</Link></li>)}
          
        </ul>}/> 

        <Route path='/Posts/:id' element={<Post/>}/>
        <Route path='*' element={<h1>page not found 404</h1>}/>
       </Routes>
       
      <Form/>
      <Card title='taher' imgSrc='https://th.bing.com/th/id/R.2ebeec42ddf574bc598e1ff2d52688c7?rik=jvOiIVHeF3MB5g&pid=ImgRaw&r=0' body='123'/> 
        <Card title='tareq' imgSrc='' body='456'/>
        <Card title='majd' imgSrc='' body='789'/>
        <Button/>
        <Counter/>
        <Counters/>
        <Form/>
        <TaskForm/>
        <IdCounter/>
       <TodoList/>*/}
    </div>
  );
}

export default App;