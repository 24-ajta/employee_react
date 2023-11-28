import  { useState } from "react";
// import './styles.css';
import axios from "axios";

const FormComponents = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password:"",
    address:""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
      [e.target.email]:value,
      [e.target.password]:value,
      [e.target.address]:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      email: state.email,
      password:state.password,
      address:state.address
    };

    const API_URL="http://localhost:3000"
    axios.post(`${API_URL}/register`, userData)
    .then((response) => {
      console.log(response.status, response.data);
    });
  };

  return (
    <>
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="address">
          Address
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  

    </>
  );
}

export default FormComponents;
