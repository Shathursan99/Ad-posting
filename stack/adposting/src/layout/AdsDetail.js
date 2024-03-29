import React from 'react'

export default function AdsDetail() {
  return (
    
<div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 mt-3">
        <div className="first">
          <div className="heading">
            {" "}
            <p className="lead fw-normal mb-1">Motorcycle</p>
          </div>
          <div className="time d-flex flex-row align-items-center justify-content-between mt-3">
            <div className="d-flex align-items-center">
              <i className="fa fa-clock-o clock"></i>
              {/* <span>@Kamal K</span> */}
            </div>

            <div
              
                className="font-weight-bold"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  fontSize:"20px",
                 
                    borderRadius: "2px",
                    height: "50px",
                    width: "200px",
                    borderRadius:"500%",
                    color:"black"
                }}
              >
                Rs 12000
             
            </div>
          </div>
        </div>
        <div className="second d-flex flex-row mt-2">
          {/* <div className="image mr-4">
            <img
              src=""
              style={{ width: '150px', height: '150px',  borderRadius:"10px"}} 
              width="150"
            />
          </div> */}

          <div className="d-flex flex-column justify-content-center">
            <p style={{ fontFamily: "initial", fontWeight: "bold",  marginLeft:"15px"}}>
             Fz v3 2019 model<br></br> fuel injuction <br></br>ABS breaking system
            </p>
          </div>
        </div>

        <h6 style={{ fontFamily: "initial" }}>
        Good condition|| low mileage
        </h6>
        <div className="third mt-4 d-flex justify-content-center"></div>
      </div>
    </div>


  )
}
