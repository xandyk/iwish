import React from 'react';

const Login = () => {
  return (
    <>
      <section className="container">
        <div className="segment">
          <h2>Login to your account</h2>
          <form className="ui form" onSubmit={this.onLoginSubmit}>
            <div className="field">
              <label className="label email" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                value={this.state.email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
                required
              />
            </div>

            <div className="field">
              <label className="label password" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
                required
              />
            </div>

            <button className="button register" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
