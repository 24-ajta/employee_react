import { useRef } from "react";
// import './styles.css';
import axios from "axios";

const RegistrationComponent = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const placeInputRef = useRef(null);
  const designationInputRef = useRef(null);
  const contactInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const place = placeInputRef.current.value;
    const designation = designationInputRef.current.value;
    const contact = contactInputRef.current.value;
    const password = passwordInputRef.current.value;
    const userdata = {
      name,
      email,
      place,
      designation,
      contact,
      password
    };
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
                className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Name
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name="name"
                    id="name"
                    ref={nameInputRef}
                  />
                </label>
              </div>
              <div
                className="form-group text-center"
                style={{ padding: "20px" }}
              >
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

              <div
                className="form-group text-center"
                style={{ padding: "20px" }}
              >
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
                  Add Employee
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
