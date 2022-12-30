import React from 'react';
import '../../components/form/loginform.css';

const Login = () => {
  return (
    <div className="auth-box text-center">
      <div className="auth-logo">
        <a href="/" className="d-inline-block text-dark">
          <img src="" alt="" />
          ALCRRO
        </a>
      </div>
      <div className="auth-panel">
        <div className="auth-panel-header">
          <h1>Salut!</h1>
        </div>
        <div className="auth-panel-body">
          <form method="post">
            <div className="d-none alert alert-danger"></div>
            <div className="form-group">
              <label htmlFor="">Introdu adresa de email:</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Adauga o parola:</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div>
            Nu ai cont? Nu-ti face griji!
            <br />
            Poti crea unul in pasul urmator.
          </div>
          <div className="text-muted mt-sm">
            <div className="text-hr-line">
              <span>sau</span>
              <div>intra in cont cu</div>
            </div>
            <div>
              <form method="post">
                <button type="submit" className="btn btn-social  facebook mt-md">
                  Facebook
                </button>
              </form>
              <form method="post">
                <button type="submit" className="btn btn-social google mt-md">
                  Google
                </button>
              </form>
              <form method="post">
                <button type="submit" className="btn btn-social apple mt-md">
                  Apple
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="/">Ai nevoie de ajutor?</a>
      </div>
    </div>
  );
};

export default Login;
