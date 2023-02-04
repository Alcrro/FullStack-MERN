import React, { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Login = (props) => {
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [showTotalUsers, setTotalUsers] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/api/users");

      if (response.status !== 200) {
        throw new Error("Cannot fetch the data");
      } else {
        const data = await response.json();
        setUsersList(data.data);

        setTotalUsers(data.totalUsers);
      }
    };
    fetchUsers();
  }, []);

  const loginT = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 400) {
      setErrMsg("Nu ai introdus email-ul sau parola");
    } else if (response.status === 401) {
      setErrMsg("Datele sunt invalide");
    } else if (response.status === 200) {
      const data = await response.json();
      setErrMsg("Te-ai logat cu success");
      console.log(data);

      setIsLogged(true);
    }
  };

  return (
    <>
      <div className="auth-box">
        {/* Logo Component  */}
        <div className="auth-logo">
          <a href="/">{}</a>
        </div>

        <div className="auth-panel">
          <div className="auth-panel-header">{isLogged ? `Bun venit ${email}` : "Salut!"}</div>
          <div className="auth-panel-body">
            <form>
              <div className="form-group">
                <label> Introdu adresa de email</label>
                <input
                  type="email"
                  id="userEmail"
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
                  id="userPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <p ref={errRef} className={errMsg ? "errmsg" : ""} aria-live="assertive">
                {errMsg}
              </p>
              <button onClick={loginT}>Login</button>
            </form>
          </div>
        </div>
        <div className="users-list">
          <h1>Users List Users number:{showTotalUsers}</h1>
          <div>
            {usersList &&
              usersList.map((user, key) => {
                return (
                  <div key={key}>
                    <table>
                      <thead>
                        <tr>
                          <td>Adresa de email</td>
                          <td>Parola</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{user.email}</td>
                          <td>secret</td>
                        </tr>
                      </tbody>
                    </table>
                    <button>Delete</button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
