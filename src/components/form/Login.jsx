import React from 'react';

const Login = () => {
  return (
    <div className="container p-3">
      <form className="container border border-dark p-3 rounded-3">
        <div className="mb-3">
          <label className="form-label"></label>
          Email:
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label"></label>
          Password:
          <input type="password" name="name" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
