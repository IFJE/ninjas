import React from 'react';
import Account from './Account';
import Login from './components/Login';

let loggedIn = false;
function App() : JSX.Element {
  if (loggedIn) {
    return (
      <div id="app">
        <Account />
      </div>
    );
  }
  loggedIn = true;
  return (<Login />);
}

export default App;
