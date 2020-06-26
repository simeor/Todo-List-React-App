import React, {Fragment,useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';




const App=(props)=> {
    
    const [todos, setTodos]=useState([
            {id: 1,title: 'Create react app',completed: false},
        
            {id: 2,title: 'Push to Github',completed: false},
        
            {id: 3,title: 'Send email',completed: false},
        ])
    
    // Toggle Status
   const markComplete=(id)=>{
      setTodos(todos.map(todo=> {
          if(todo.id === id){
              todo.completed = !todo.completed
          }
          return todo;
      }))  
    }
    
    // delete item
   const delTodo=(id)=>{
        setTodos([...todos.filter(todo => todo.id !== id)] );
    }
    
    
    
    //Add Todo
   const addTodo=(title)=>{
      
      const newTodo={
        id: Math.floor(Math.random() * 100000),
        title: title,
        completed: false
      }
      
      setTodos( [...todos, newTodo])  
    }
    
    

      return (
        <Router>
          <div>
            <Header/>
          
            <Route exact path="/" render={props => (
             <Fragment>
               <div className="container">
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} markComplete={markComplete} delTodo={delTodo}/>
               </div>
             </Fragment>
             )}/>
           
            <Route path="/about" component={About}/>
            
          </div>
        </Router>  
      ); 
}

export default App;
