import React from 'react';

function login() {
  return (
    <div className="login-container">
      <form action="/api/login" method="post">
        <label htmlFor="loginUsername">
          Username:
          <input type="text" id="loginUsername" placeholder="Username" name="username" />

        </label>
        <label htmlFor="loginPassword">
          Password:
          <input type="password" id="loginPassword" placeholder="Password" name="password" />

        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default login;
