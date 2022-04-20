import React from 'react';

function login() {
  return (
    <div className="register-container">
      <form action="/api/register" method="post">
        <label htmlFor="registerUsername">
          Username:
          <input type="text" id="registerUsername" placeholder="Username" name="username" />
        </label>
        <label htmlFor="registerPassword">
          Password:
          <input type="text" id="registerPassword" placeholder="Password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default login;
