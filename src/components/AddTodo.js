import React, {useState} from 'react';

const AddTodo=(props)=>{
    
    const [title, setTitle]=useState("")
    
    
    
    const onChange=(e)=>{
        setTitle( e.target.value)
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        props.addTodo(title);
        setTitle("");
    }
    
    
        return(
          <form style={{display:'flex'}} onSubmit={onSubmit}>
            
            <input type="text" name="title" placeholder="Add list item ..." style={{flex: '4', padding: '5px'}} vlaue={title} onChange={onChange}/>
            
            <input type="submit" vlaue="Submit" className="btn" style={{flex: '1'}}/>
            
          </form>
        
        );
}


export default AddTodo;