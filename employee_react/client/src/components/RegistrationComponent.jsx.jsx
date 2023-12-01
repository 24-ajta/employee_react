import { useRef } from "react";
// import './styles.css';
import axios from "axios";

const RegistrationComponent = () => {
  const fnameInputRef = useRef(null);
  const lnameInputRef = useRef(null);
  const genderInputRef = useRef(null);
  const dobInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const placeInputRef = useRef(null);
  const stateInputRef = useRef(null);
  const districtInputRef = useRef(null);
  const designationInputRef = useRef(null);
  const contactInputRef = useRef(null);
  const passwordInputRef = useRef(null);

 

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = fnameInputRef.current.value;
    const lname = lnameInputRef.current.value;
    const gender = genderInputRef.current.value;
    const dob = dobInputRef.current.value;
    const email = emailInputRef.current.value;
    const place = placeInputRef.current.value;
    const state = placeInputRef.current.value;
    const district = placeInputRef.current.value;
    const designation = designationInputRef.current.value;
    const contact = contactInputRef.current.value;
    const password = passwordInputRef.current.value;
    const userdata = { fname, lname, gender ,dob,email, place,state,district, designation, contact, password };
    console.log(userdata);

    const API_URL = "http://localhost:3000";

    axios
      .post(`http://localhost:3000/api/register`, userdata)
      .then((response) => {
        console.log(response.status, response.data);
      });
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "blue" }}>
          Register or Create new account
        </h1>
        <hr style={{ color: "blue" }} />

        <div className="container mx-auto col-sm-12 col-md-12 col-lg-4">
          <form onSubmit={handleSubmit}>
            <div className=" shadow-lg mb-5 bg-body rounded">
              <div
                className="input-group text-center "
                style={{ padding: "20px" }}
              >
                <div className="col-lg-6">
                  <label htmlFor="fname" style={{ color: "blue" }}>
                    First Name
                    <input
                      className="form-control border border-primary"
                      type="text"
                      name="fname"
                      id="fname"
                      ref={fnameInputRef}
                    />
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="lname" style={{ color: "blue" }}>
                    Last Name
                    <input
                      className="form-control border border-primary"
                      type="text"
                      name="lname"
                      id="lname"
                      ref={lnameInputRef}
                    />
                  </label>
                </div>
              </div>
              <div
              className="input-group text-center "
                style={{ padding: "20px" }}
              >
                <div className="col-lg-4">
                  <label htmlFor="gender" style={{ color: "blue" }} >
                    Gender
                  <select className="form-select border border-primary"  name="gender"
                      id="gender" ref={genderInputRef} style={{ color: "blue" }}>
                  <option selected>Please Specify</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Transgender</option>
                  <option value="3">Prefer not to say</option>
                  </select>
                  </label>
                </div>
            
                <div className="col-lg-4">
                  <label htmlFor="dob" style={{ color: "blue" }}>
                    Date of Birth
                    <input
                      className="form-control border border-primary"
                      type="date"
                      name="dob"
                      id="dob"
                      ref={dobInputRef}
                      style={{color:"blue"}}
                    />
                  </label>
                </div>
                <div className="col-lg-4">
                <label htmlFor="email" style={{ color: "blue" }}>
                  Email
                  <input
                    className="form-control border border-primary"
                    type="email"
                    name="email"
                    id="email"
                    ref={emailInputRef}
                  />
                </label>
              
                </div>
              </div>
              
              <div
              className="input-group text-center "
                style={{ padding: "20px" }}
              >
              <div className="col-lg-4">
                <label htmlFor="place" style={{ color: "blue" }}>
                  Place
                  <input
                    className="form-control border border-primary w-100"
                    type="text"
                    name="place"
                    id="place"
                    ref={placeInputRef}
                  />
                </label>
                </div>
              
              <div className="col-lg-4">
                  <label htmlFor="gender" style={{ color: "blue" }} >
                    State
                  <select className="form-select border border-primary"  name="state"
                      id="state" ref={stateInputRef} style={{ color: "blue" }}>
                  <option value="SelectState">Select State</option>
                  <option value="Andra Pradesh">Andra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  </select>
                  </label>
                
              </div>
              <div className="col-lg-4">
              <label htmlFor="district" style={{ color: "blue" }}>District</label>
              <select className="form-control border border-primary" name="district" id="district" style={{ color: "blue" }}>
              <option value="">-- select one -- </option>
              </select>
              </div>
              </div>
              <div
                className="form-group text-center"
                style={{ padding: "20px" }}
              >
                <label htmlFor="designation" style={{ color: "blue" }}>
                  Type of Work
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name="designation"
                    id="designation"
                    ref={designationInputRef}
                  />
                </label>
              </div>
              <div
                className="form-group text-center"
                style={{ padding: "20px" }}
              >
                <label htmlFor="contact" style={{ color: "blue" }}>
                  Contact
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name="contact"
                    id="contact"
                    ref={contactInputRef}
                  />
                </label>
              </div>
              <div
                className="form-group text-center"
                style={{ padding: "20px" }}
              >
                <label htmlFor="password" style={{ color: "blue" }}>
                  Password
                  <input
                    className="form-control border border-primary"
                    type="password"
                    name="password"
                    id="password"
                    ref={passwordInputRef}
                  />
                </label>
              </div>
              <div
                className="form-group text-center"
                style={{ padding: "20px" }}
              >
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationComponent;
