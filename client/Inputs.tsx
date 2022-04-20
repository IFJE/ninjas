import React from 'react';
import Form from './Form';

function Inputs() {

    function displayForm() {
      alert("hello");
    }
  
    return (
        <div id = "input">
          <div>
            <h1>NJAS</h1>
          </div>
          <span>
            <input type="text"/>
            <button>Search</button> 
          </span>
          <span>
            <button>Metrics</button> 
            <button onClick = {displayForm}>+</button>
          </span>
        </div>
    )
}

export default Inputs;