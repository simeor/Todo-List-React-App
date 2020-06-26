import React from 'react';
import PropTypes from 'prop-types';

const TodoItem=(props)=>{
    
    
    const getStyle=()=>{
        
        return{
            textDecoration: props.todo.completed ? 'line-through' : 'none',
            opacity: props.todo.completed ? '0.3' : '1',
            color: props.todo.completed ? '#3D5AF1' : '#fff',
            background: '#3d5af1',
            padding:'10px',
            borderRadius: '20px',
            margin: '5px 0',
        }
    }
    
        
        const {title, id}=props.todo;
        
        return(
         <div style={getStyle()}>
            <p className="JC">
            <input onChange={props.markComplete.bind(this, id)} type="checkbox" className="selectBox"/> {" "}
            {title}
            <button onClick={props.delTodo.bind(this, id)} style={btnStyle} className="delete-btn">❎</button>
            </p>
         </div>
        );
    
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


const btnStyle ={
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold'
}




export default TodoItem;