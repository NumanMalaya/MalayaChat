import React, { useState } from "react";

export default function signUp() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const profilePic = e.target[3].files[0];
  };
  return (
    <form method="post" name="signUpForm" onSubmit={handleSubmit}>
      <div className="col-lg-4 col-md-6 col-sm-8 col-10 text-center signUp-page">
        <h4 className="my-3">
          Malaya Chat <br />
          <span className="fs-6">Sign Up</span>
        </h4>
        <input
          type="text"
          className="input"
          placeholder="Name"
          name="name"
          required
        />
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
        <input type="file" className="input" name="profilePic" />
        {err && <span>Someting went wrong</span>}
        <button className="submit mt-4">Sign Up</button>
        <p>
          Already have an account? <span>Sign_In</span>
        </p>
      </div>
    </form>
  );
}
