import React , {useState} from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
export default function SignUp() {
  const [form, setForm] = useState({
    id: 7,
    name: '',
    email: '',
    username: '',
    password: ''
  });
  const { id,email,name, username, password } = form;



  const register = () =>  {
    axios.post('http://localhost:8080/users', form )
    .then(response => {
      console.log(response);
    })
     .catch(error => {
      console.log(error);
    });   
  }

  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    setForm({ ...form, id: form.id + 1 });
    e.preventDefault();
    register();
    console.log(form);
    // console.log({id, name,email, username, password})
  }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign Up</h3>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
      <input
        type="text"
        name='name'
        value={name}
        onChange={handleChange}
        id="form3Example1c"
        className="form-control"
        placeholder="Enter your name"
      />
    </div>
  </div>
  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
      <input
        type="email"
        name='email'
        value={email}
        onChange={handleChange}
        id="form3Example3c"
        className="form-control"
        placeholder="Enter your email"
      />
    </div>
  </div>
  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example4cd">Username</label>
      <input
        type="text"
        name='username'
        value={username}
        onChange={handleChange}
        id="form3Example4cd"
        className="form-control"
        placeholder="Choose a username"
      />
    </div>
  </div>
  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example4c">Password</label>
      <input
        type="password"
        name='password'
        value={password}
        onChange={handleChange}
        id="form3Example4c"
        className="form-control"
        placeholder="Enter your password"
      />
    </div>
  </div>

  <div className="form-check d-flex justify-content-center mb-5">
    {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" /> */}
    <label className="form-check-label" htmlFor="form2Example3c">
      I agree to all statements in <a href="#!">Terms of service</a>
    </label>
  </div>
  <div className="mb-4">
    
    <button type='submit' className="btn  btn-lg btn-block" style={{ backgroundColor: 'purple', color: 'white', height:'50px'}}>Register</button>
    <Link to="/">
    <button className="btn btn-lg btn-block" style={{ backgroundColor: 'purple', color: 'white', margin :'10px'}}>Go Home</button>
    </Link>
  </div>
</form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 signUp-bg">
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
