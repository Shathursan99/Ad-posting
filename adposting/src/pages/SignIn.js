import React, { useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';




export default function SignIn() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const [auth, setAuth] = useState(false);  

  const login = async () => {
    axios.post('http://localhost:8080/auth/login', form)
      .then(response => {
        console.log(response);
        if (response.data.success) {
          const token = response.data.token;
          const user = response.data.user;
          setAuth(true);
          const redirect = location.search
            ? "/" + location.search.split("=")[1]
            : "/sucess";
          navigate(redirect);
          // Store the token in a secure way (e.g., in a cookie or local storage)
          // Store the token in local storage
          // localStorage.setItem('token', token);
          // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          // You will use this token for future authenticated requests
        } else {
          // Authentication failed
          const message = response.data.message;
          console.error(message);
          setAuth(false);
          NotificationManager.error( 'Invalide Username or Password','', 2000);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { username, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
      <NotificationContainer/>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <form onSubmit={handleSubmit}>
                      <span className="h1 fw-bold mb-0 signIn_Font" style={{textDecoration:"underline"}}>Login into your  VIA account</span><br/><br/>
                      <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign in</h3>

                      <div className="form-outline mb-4">
                        <input onChange={handleChange} name='username' value={username} type="username" id="form2Example18" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example18">VIA Account</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input onChange={handleChange} name='password' value={password} type="password" id="form2Example28" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example28">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-lg btn-block" type="submit" style={{ backgroundColor: 'purple', color: 'white' }}>Login</button>
                      </div>

                      <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                      <p>
                          Don't have an account?{" "}
                          <Link to="/sign-up">
                            <a href="" className="link-info">
                              Register hereeS
                            </a>
                          </Link>
                        </p>

                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 signIn-bg">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
