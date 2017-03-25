import React from 'react';
import './NavBar.css';

export default function(props) {
    return (
      <div className="navbar"> 
        {props.title}
      </div>
    );
} 