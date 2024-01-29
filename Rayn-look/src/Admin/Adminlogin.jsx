import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './adminauthentication/autheslice';
import axios from 'axios';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [redirected, setRedirected] = useState(false);

  const handleLogin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("handleLogin function called with username:", username);

    try {
      const response = await axios.post("http://localhost:8080/Admin/login", {
        username,
        password
      });

      console.log("Received response status from login API:", response.status);
      console.log("Received response data from login API:", response.data);

      const { data } = response;
      const { token } = data;
      console.log("Received token:", token);
      dispatch(setToken(token));
      setRedirected(true);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(JSON.parse(token)));
      setRedirected(true);
    } else {
      console.log("No token found");
    }
  }, []);

  useEffect(() => {
    if (redirected) {
      window.location.href = "/admin";
    }
  }, [redirected]);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control border border-primary" id="username" name="username" aria-describedby="usernameHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control border border-primary" id="password" name="password" />
          </div>
          <br />
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;