import React from 'react';

const Login = () => {
  return (
    <>
      <form className="ui form">
        <div className="segment login">
          <h2>Sign in to your account</h2>
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="label" type="text" />
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input type="text" />
        </div>

        <button className="button signin" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};

export default Login;
