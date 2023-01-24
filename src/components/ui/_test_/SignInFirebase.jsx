import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignInFirebase = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      navigate("/");
    } catch (error) {}
  };
  const setShowPassword = () => {};

  const navigate = useNavigate();

  return (
    <div className="container mt-5 pt-5">
      <div className="pageHeader">Welcome Back</div>
      <form onSubmit={onSubmit}>
        <div className="nameInputDiv">
          <input
            type="name"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="emailInputDiv">
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="passwordInputDiv">
          <input
            type="password"
            className="passwordInput"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />
          <img
            src=""
            alt="show password"
            className="showPassword"
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>
        <Link to="/forgot-password" className="forgotPasswordLink">
          Forgot Password
          <div className="signInBar">
            <button className="signInButton">Login</button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default SignInFirebase;
