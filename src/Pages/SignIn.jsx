import React from "react";

export default function signIn() {
  return (
    <div className="container-fluid signIn-page">
      <form method="post" name="signInForm">
        <div className="row r1">
          <div className="col-lg-4 col-md-6 col-sm-8 col-10 text-center cl bdr">
            <h4 className="my-3 text-muted">
              Malaya Chat <br /> <span className="fs-6">Sign In</span>
            </h4>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <button className="submit mt-4">Sign In</button>
            <p className="text-muted">
              Don't have an account? <a href="">sign up</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
