import React, { useState } from 'react'
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Adpost() {

  const [form, setForm] = useState({
    // adId: 100,
    adCategory: '',
    phoneNumber: '',
    price: '',
    specification: '',
    district: '',
    ownerDiscription: ''
  });
  const { adCategory, phoneNumber, price, specification, district, ownerDiscription } = form

  // const register = () => {
  //   axios.post('http://localhost:8080/ads', form)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  const register = async (e) => {

    try {
      await axios.post('http://localhost:8080/ads', form);
      console.log('Data posted successfully');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    setForm({ ...form, adId: form.adId + 1 });
    console.log(form);
    e.preventDefault();
    register();

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
                      {/* <form id="contact-form" role="form" onSubmit={handleSubmit}> */}
                      <form id="contact-form" role="form" onSubmit={handleSubmit}>
                        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Post Your Ads</h3>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            
                            <div className="col-md-12 mb-3">
                            <label htmlFor="form_phone" className="form-label">Ad Category</label>
                            <input type="text" id="adCategory" name="adCategory" value={adCategory} onChange={(e)=>handleChange(e)} className="form-control" />
                          </div>
                            {/* <select
                              id="form_need"
                              name="adCategory"
                              value={adCategory}
                              // onChange={handleChange}
                              onChange={(e)=>handleChange(e)}
                              className="form-select"
                              required
                            >
                              
                              <option value="cars">Cars</option>
                              <option value="motorcycle">Motorcycle</option>
                              <option value="electronics">Electronics</option>
                              <option value="property">Property</option>
                              <option value="jobs">Jobs</option>
                              <option value="mobiles">Mobiles</option>
                              <option value="furniture">Furniture</option>
                              <option value="fashion">Fashion</option>
                              <option value="pets">Pets</option>
                            </select> */}

                          </div>

                          <div className="col-md-12 mb-3">
                            <label htmlFor="form_district" className="form-label">Please Select Your District</label>
                            <div className="col-md-12 mb-3">
                            
                            <input type="text" id="district" name="district" value={district} onChange={(e)=>handleChange(e)} className="form-control" />
                          </div>
                            {/* <select
                              id="form_district"
                              name="district"
                              value={district}
                              onChange={(e)=>handleChange(e)}
                              className="form-select"
                              required
                            >
                              
                              <option value="Ampara">Ampara</option>
                              <option value="Anuradhapura">Anuradhapura</option>
                              <option value="Badulla">Badulla</option>
                              <option value="Batticaloa">Batticaloa</option>
                              <option >Colombo</option>
                              <option >Galle</option>
                              <option >Gampaha</option>
                              <option >Hambantota</option>
                              <option >Jaffna</option>
                              <option >Kalutara</option>
                              <option >Kandy</option>
                              <option >Kegalle</option>
                              <option >Kilinochchi</option>
                              <option >Kurunagala</option>
                              <option >Mannar</option>
                              <option >Matale</option>
                              <option >Moneragala</option>
                              <option >Mullaitivu</option>
                              <option >Nuwara Eliya</option>
                              <option >Polanaruwa</option>
                              <option >Puttalam</option>
                              <option >Ratnapura</option>
                              <option >Trincomalee</option>
                              <option >Vavuniya</option>
                            </select> */}
                            
                          </div>

                          <div className="col-md-12 mb-3">
                            <label htmlFor="form_phone" className="form-label">Phone Number</label>
                            <input type="text" id="phone" name="phoneNumber" value={phoneNumber} onChange={(e)=>handleChange(e)} className="form-control" />
                          </div>

                          <div className="col-md-12 mb-3">
                            <label htmlFor="form_price" className="form-label">Price</label>
                            <div className="input-group">
                              <span className="input-group-text">Rs</span>
                              <input type="number" id="price" name="price" value={price} onChange={(e)=>handleChange(e)} className="form-control" required />
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="form_message" className="form-label">Specification *</label>
                          <textarea id="form_message" name="specification" value={specification} onChange={(e)=>handleChange(e)} className="form-control" placeholder="Specification here." rows="4" required></textarea>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="form_description" className="form-label">Owner Description *</label>
                          <textarea id="form_description" name="ownerDiscription" value={ownerDiscription} onChange={(e)=>handleChange(e)} className="form-control" placeholder="Type Owner description here." rows="4"></textarea>
                        </div>

                        <div className="mb-4">
                          {/* <Link to="/"> */}
                          <button className="btn btn-lg btn-block" type="submit" style={{ backgroundColor: 'purple', color: 'white' }}>Post Ads</button>
                          <Link to="/">
                          <button className="btn btn-lg btn-block" style={{ backgroundColor: 'purple', color: 'white', margin :'10px'}}>Go Home</button>
                          </Link>
                          {/* </Link> */}
                        </div>


                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
