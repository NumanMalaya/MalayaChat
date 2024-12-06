import React, { useState } from "react";
import "./logReg.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function LogReg() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handleAvatar = (e) => {
    e.target.files[0] &&
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // const imgUrl = await upload(avatar.file);
      const imgUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-G-kQKuUE3HzBQgig07yEH_QiQu4Y02S_UQ&s";
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      toast.success("Account created! You can login now!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row logReg-row">
      <div className="col-md-6 col-12 text-center login-col">
        <form onSubmit={handleLogin}>
          <h4>Welcome back,</h4>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="input"
            placeholder="Password"
            name="password"
          />
          <button disabled={loading} className="submit mt-4">
            {loading ? "loading" : "Login"}
          </button>
        </form>
      </div>
      <div className="col-md-6 col-12 text-center register-col">
        <form onSubmit={handleRegister}>
          <h4>Create an Account</h4>
          <div className="avatarDiv">
            <img src={avatar.url || "./avatar.webp"} alt="" />
            <label htmlFor="avatar">Upload an Image</label>
          </div>
          <input
            type="file"
            className="d-none"
            id="avatar"
            onChange={handleAvatar}
          />
          <input
            type="text"
            className="input"
            placeholder="Username"
            name="username"
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="input"
            placeholder="Password"
            name="password"
          />
          {err && <span className="d-block text-danger">Someting went wrong</span>}
          <button disabled={loading} className="submit mt-4">
            {loading ? "loading" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
