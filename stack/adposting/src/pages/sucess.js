import React from 'react'
import { Link } from 'react-router-dom'
export default function sucess() {
  return (
    <div className="container" >
      <div className="centered-svg" >
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="132.93"
  height="131.387"
  viewBox="0 0 134 132"
  fill="none"
  style={{ display: 'block', margin: 'auto' }}
>
          {/* <path
            d="M131.947 65.6934C131.947 101.13 102.878 129.887 66.9818 129.887C31.086 129.887 2.0166 101.13 2.0166 65.6934C2.0166 30.2568 31.086 1.5 66.9818 1.5C102.878 1.5 131.947 30.2568 131.947 65.6934Z"
            fill="#794782"
            stroke="#AD38C1"
            stroke-width="3"
            
          />
          <path */}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100.446 44.8579L62.3479 91.9408L32.4199 67.2875L38.0667 60.59L61.0774 79.54L93.5641 39.4163L100.446 44.8579Z"
            fill="white"
          />
        </svg>
        <br/><br/>
        
        <label className="col-md-4 control-label sucess-font">
        Success
        </label>
        <label className="col-md-4 control-label"></label>
        <div className="row" style={{margin:"center"}} >
      <div className="col-md-6">
        <Link to="/ad-post">
        <button
          id="submit"
          name="submit"
          className="btn btn-default purple-bg"
          value="1"
          height="60px"
          style={{ height: "40px", width: "120px" }}
        >
          Post Ads
        </button>
        </Link>
      </div>
      <div className="col-md-6">
        <Link to="/view-user">
        <button
          id="cancel"
          name="cancel"
          className="btn btn-default purple-border"
          value="1"
          style={{ height: "40px", width: "120px" }}
        >
          View Profile
        </button>
        </Link>
      </div>
    </div>

      </div>
    </div>
    

  )
}
