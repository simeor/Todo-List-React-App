import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
    return(
      <header style={headerStyle}>
        <h2> 📝 TodoList </h2>
        <Link to="/about">About</Link>
      </header>
    );
}

const headerStyle={
    background: '#3d5af1',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    
    
}


export default Header;