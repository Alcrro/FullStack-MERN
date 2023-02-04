import React, { useRef, useState } from "react";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerT = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    console.log(response);
    //Check empty fields
    if (response.status === 400 && !name) {
      setErrMsg("Please enter your name");
    }
    if (response.status === 400 && !email) {
      setErrMsg("Please enter your email");
    }
    if (response.status === 400 && !password) {
      setErrMsg("Please enter your password");
    } else if (response.status === 401) {
      setErrMsg("Email-ul este deja folosit");
    } else if (response.status === 201) {
      const data = await response.json();
      setErrMsg("Te-ai inregistrat cu succes");
      console.log(data);
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label> Introdu numele </label>
          <input
            type="text"
            id="name"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label> Introdu adresa de email</label>
          <input
            type="email"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label> Introdu adresa o parola</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <p ref={errRef} className={errMsg ? "errmsg" : ""} aria-live="assertive">
          {errMsg}
        </p>
        <button onClick={registerT}>Register</button>
      </form>
    </div>
  );
};

export default Register;
