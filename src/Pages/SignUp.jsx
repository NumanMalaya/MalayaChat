import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function signUp() {
  const  [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const profilePic = e.target[3].files[0];

    const auth = getAuth();
    try {
      const res = createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true)
    }
  };
  return (
    <div className="container-fluid signUp-page">
      <form method="post" name="signUpForm" onSubmit={handleSubmit}>
        <div className="row r1">
          <div className="col-lg-4 col-md-6 col-sm-8 col-10 text-center cl">
            <h4 className="my-3 text-muted">
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
            <p className="text-muted">
              Already have an account? <a href="">sign in</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
