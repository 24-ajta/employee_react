import  { useRef} from "react";
// import './styles.css';
import axios from "axios";

const FormComponent = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const placeInputRef =useRef(null);
  const designationInputRef=useRef(null);
  const contactInputRef=useRef(null);
  const passwordInputRef=useRef(null);


  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setState({
  //     ...state,
  //     [e.target.name]: value,
  //     [e.target.email]:value,
  //     [e.target.place]:value,
  //     [e.target.designation]:value,
  //     [e.target.contact]:value,
  //     [e.target.password]:value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
      const name = nameInputRef.current.value;
      const email = emailInputRef.current.value;
      const place=placeInputRef.current.value;
      const designation=designationInputRef.current.value;
      const  contact=contactInputRef.current.value;
      const password=passwordInputRef.current.value;
     const userdata={name,email,place,designation,contact,password}
    console.log(userdata)

    const API_URL="http://localhost:3000";

    axios.post(`http://localhost:3000/api/register`,userdata)
    .then((response) => {
      console.log(response.status, response.data);
    });
  };

  return (
    <>
    <div>
      <h1 style={{textAlign:"center"}}>Register or Create new account</h1>
      <hr />
      <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="form-group text-center" style={{padding:"20px"}}>
        <label htmlFor="name">
          Name
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            ref={nameInputRef}
           
          />
        </label>
        </div>
        <div className="form-group text-center" style={{padding:"20px"}}>
        <label htmlFor="email">
          Email
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            ref={emailInputRef}
          
          />
        </label>
        </div>
        <div className="form-group text-center" style={{padding:"20px"}}>
        <label htmlFor="place">
          Place
          <input
            className="form-control"
            type="text"
            name="place"
            id="place"
            ref={placeInputRef}
            
          />
        </label>
        </div>
        <div className="form-group text-center" style={{padding:"20px"}}>
        <label htmlFor="designation">
          Designation
          <input
            className="form-control"
            type="text"
            name="designation"
            id="designation"
            ref={designationInputRef}
         
          />
        </label>
        </div>
        <div className="form-group text-center" style={{padding:"20px"}}>
        <label htmlFor="contact">
          Contact
          <input
            className="form-control"
            type="text"
            name="contact"
            id="contact"
            ref={contactInputRef}
           
          />
        </label>
        </div>
        <div className="form-group text-center" style={{padding:"20px"}}>
        <label htmlFor="password">
          Password
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            ref={passwordInputRef}
           
          />
        </label>
        </div>
        <div className="form-group text-center" style={{padding:"20px"}}>
        <button type="submit">Register</button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
  }

export default FormComponent;