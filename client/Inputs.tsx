import React from 'react';

function Inputs() {
  function displayForm() {
    alert('hello');
  }

  return (
    <div id="input">
      <div>
        <h1>NJAS</h1>
      </div>
      <span>
        <input type="text" />
        <button type="button">Search</button>
      </span>
      <span>
        <button type="button">Metrics</button>
        <button type="button" onClick={displayForm}>+</button>
      </span>
    </div>
  );
}

export default Inputs;
