
import Adbutton from "../layout/Button/AdButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle, faHouse, faBriefcase,faMobile, faTv,faTable,faTshirt,faDog, faPlantWilt  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import ViewAds from './ViewAds';
import React, { useState } from 'react'
import axios from 'axios';
// import Popup from './Popup';

export default function Home() {
  const buttonStyle = {
    width: '80px',
    height: '70px',
    fontSize: '16px', 
    backgroundColor: '#cc00be',
  };





  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="container" >
      <div className="py-4">
        <h1 className="title">  “Discover Business, Products and Services.”</h1>
        <h1 className="subtitle">  Unlock your brand's potential with seamless online ad posting that reaches the right audience, right where they are</h1>
        <h1 className="subtitle2">Select Ads categories.</h1>
        
        <div className="table-responsive">
        <table className="table">
  <tbody>
    <tr>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faCar} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>Car</div>
          </button>
        </Link>

      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faMotorcycle} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>Motorcycle</div>
          </button>
        </Link>
      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faPlantWilt} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>Plants</div>
          </button>
        </Link>
      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faHouse} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>House</div>
          </button>
        </Link>
      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faBriefcase} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>Briefcase</div>
          </button>
        </Link>
      </td>
    </tr>
    <tr>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faMobile} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>Mobile</div>
          </button>
        </Link>
      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faTv} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>TV</div>
          </button>
        </Link>
      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faTable} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>Table</div>
          </button>
        </Link>
      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faTshirt} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>T-shirt</div>
          </button>
        </Link>
      </td>
      <td className="col-md-2 mb-4">
        <Link to="./view-ads">
          <button type="button" className="btn btn-warning px-3" style={buttonStyle}>
            <FontAwesomeIcon icon={faDog} />
            <div style={{ fontSize: '12px', textAlign: 'center' }}>Dog</div>
          </button>
        </Link>
      </td>
    </tr>
  </tbody>
</table>

    </div>
    
      </div>
      <div class="breakline mb-4"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="card mb-3 mb-sm-0">
              <div class="card-body">
                <h5 class="card-title">About Us</h5>
                <p class="card-text" style={{ textAlign: "justify", textJustify: "inter-word" }}>This site is used for largest online
                  Ad posting system. Is your business listed correctly on
                  America’s largest city directory network of 1,000 portals?</p>

              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mb-3 mb-sm-0">
              <div class="card-body">
                <h5 class="card-title">Information</h5>
                <p class="card-text">
                  <ul style={{ textAlign: "left" }}>
                    <li>Privacy and Policy</li>
                    <li>Terms of Use</li>
                    <li>Help</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mb-3 mb-sm-0">
              <div class="card-body">
                <h5 class="card-title">Contacts</h5>
                <p class="card-text">
                  <ul style={{ textAlign: "left" }}>
                    <li><a href="https://www.google.com/">sathurshans04@gmail.com</a></li>
                    <li>075-5284975</li>

                  </ul>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}


const Popup = ({ show, onClose, data }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
        <ViewAds data={data}/>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};