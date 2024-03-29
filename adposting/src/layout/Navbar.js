import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const buttonStyle = {
  width: '50px',
  height: '45px',
  borderRadius:'50%',
  backgroundColor: 'Gray',
};
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg" style={{ height: '200px' }}>
        <div className="container-fluid">
            <Link to="/">
            <div className="navbar-brand navbar-logo"  /> 
           
            </Link>
            {/* <button type="button" className="btn  px-3" style={buttonStyle}>
                <FontAwesomeIcon icon={faUser} />
              </button> */}
          <div className="d-flex justify-content-end">
            <Link to="/"><button className="btn btn-outline-secondary" style={{ borderRadius: '10px', marginRight: '10px' }}>
              Home
            </button></Link>
            <Link to="/sign-in">
            <button className="btn btn-outline-secondary" style={{ borderRadius: '10px', marginRight: '10px' }}>
              Sign In
            </button></Link>
            <Link to="/sign-up">
            <button className="btn btn-outline-secondary" style={{ borderRadius: '10px', marginRight: '10px' }}>
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
