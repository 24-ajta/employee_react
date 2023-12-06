// import { useRef } from "react";
// // import './styles.css';
// import axios from "axios";

// const RegistrationComponent = () => {
//   const nameInputRef = useRef(null);
//   const emailInputRef = useRef(null);
//   const placeInputRef = useRef(null);
//   const designationInputRef = useRef(null);
//   const contactInputRef = useRef(null);
//   const passwordInputRef = useRef(null);



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const name = nameInputRef.current.value;
//     const email = emailInputRef.current.value;
//     const place = placeInputRef.current.value;
//     const designation = designationInputRef.current.value;
//     const contact = contactInputRef.current.value;
//     const password = passwordInputRef.current.value;
//     const userdata = {
//       name,
//       email,
//       place,
//       designation,
//       contact,
//       password
//     };
//     console.log(userdata);

//     const API_URL = "http://localhost:3000";

//     axios
//       .post(`http://localhost:3000/api/register`, userdata)
//       .then((response) => {
//         console.log(response.status, response.data);
//       });
//   };
//   // function validateForm(){
//   //   if(emailInputRef.current.value.length == 0){
//   //     alert('Invalid name');
//   //     return
//   //   }
//   // }




//   return (
//     <>
//       <div>
//         <h1 style={{ textAlign: "center", color: "blue" }}>
//           Register or Create new account
//         </h1>
//         <hr style={{ color: "blue" }} />

//         <div className="container mx-auto col-sm-12 col-md-12 col-lg-4">
//           <form onSubmit={handleSubmit}>
//             <div className=" shadow-lg mb-5 bg-body rounded">
//               <div
//                 className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Name
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="name"
//                     id="name"
//                     ref={nameInputRef}
//                   />
//                 </label>
//               </div>
//               <div
//                 className="form-group text-center"
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="email" style={{ color: "blue" }}>
//                   Email
//                   <input
//                     className="form-control border border-primary"
//                     type="email"
//                     name="email"
//                     id="email"
//                     ref={emailInputRef}
//                   />
//                 </label>
//               </div>

//               <div
//                 className="form-group text-center"
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="place" style={{ color: "blue" }}>
//                   Place
//                   <input
//                     className="form-control border border-primary w-100"
//                     type="text"
//                     name="place"
//                     id="place"
//                     ref={placeInputRef}
//                   />
//                 </label>
//               </div>
//               <div
//                 className="form-group text-center"
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="designation" style={{ color: "blue" }}>
//                   Type of Work
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="designation"
//                     id="designation"
//                     ref={designationInputRef}
//                   />
//                 </label>
//               </div>
//               <div
//                 className="form-group text-center"
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="contact" style={{ color: "blue" }}>
//                   Contact
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="contact"
//                     id="contact"
//                     ref={contactInputRef}
//                   />
//                 </label>
//               </div>
//               <div
//                 className="form-group text-center"
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="password" style={{ color: "blue" }}>
//                   Password
//                   <input
//                     className="form-control border border-primary"
//                     type="password"
//                     name="password"
//                     id="password"
//                     ref={passwordInputRef}
//                   />
//                 </label>
//               </div>
//               <div
//                 className="form-group text-center"
//                 style={{ padding: "20px" }}
//               >
//                 <button type="submit" className="btn btn-primary">
//                   Add Employee
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RegistrationComponent;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const RegistrationComponent=()=>{
 const initialValues={
  name:'',
  email:'',
  place:'',
  designation:'',
  contact:'',
  password:''
 };

 const handleSubmit=async(values,{resetForm})=>{
  try {
    const response= await axios.post(`http://localhost:3000/api/register`,values);
    console.log("Form Submitted",response.data);
    resetForm();
  } catch (error) {
    console.error("Not Submitted",error)
  }
 };

 const validate=(values)=>{
  const errors={};
  if (!values.name) {
    errors.name = 'Required';
  } else if (!/^[A-Za-z]+ [a-zA-Z]+$/.test(values.name)) {
    errors.firstName = 'Invalid name';
  }
  
  if(!values.email){
    errors.email='Email is Required'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email='Invalid email address'
  }

  if(!values.contact){
    errors.contact='Phone Number is Required'
  }else if(!/^\+?[1-9][0-9]{7,10}$/.test(values.contact)){
    errors.contact='Invalid phone number'
  }

  if(!values.password){
    errors.password='Required'
  }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(values.password)){
    errors.password='Invalid password'
  }

  return errors;
 }

return (
  <>
  <div>
    <h1 style={{ textAlign: "center", color: "blue" }}>Register Employee Details</h1>
    <div className="container mx-auto col-sm-12 col-md-12 col-lg-4">
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}
    >
     {({ errors, touched, isValidating }) => (
        <Form >
          <div className=" shadow-lg mb-5 bg-body rounded ">
          <div className="form-group text-center" >
            <label htmlFor='name' style={{ color: "blue" }}>
              Name
              <Field type="text" id="name" className="form-control" name = "name"  />
              <ErrorMessage name="name" />
              {/* {Formik.touched.name && Formik.errors.name ? (
              <div>{Formik.errors.name}</div>
              ) : null} */}
              </label>
          </div>
          <div className="form-group text-center" style={{ color: "blue" }}>
            <label htmlFor='email'>
              Email
              <Field type="email" id="email" className="form-control" name = "email" />
              <ErrorMessage name="email" component="div"/>
              {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
            </label>
          </div>
          <div className="form-group text-center">
            <label htmlFor='place' style={{ color: "blue" }}>
              Place
              <Field type="text" id="place" className="form-control" name = "place" />
              <ErrorMessage name="place" component="div"/>
            </label>
          </div>
          <div className="form-group text-center" >
            <label htmlFor='designation' style={{ color: "blue" }}>
              Type Of Work
              <Field type="text" id="designation" className="form-control" name = "designation" />
              <ErrorMessage name="designation" component="div"/>

            </label>
          </div>
          <div className="form-group text-center">
            <label htmlFor='contact' style={{ color: "blue" }}>
              Contact
              <Field type="text" id="contact" className="form-control" name = "contact" />
              <ErrorMessage name="contact" component="div"/>
            </label>
          </div>
          <div className="form-group text-center">
            <label htmlFor='password' style={{ color: "blue" }}>
              Password
              <Field type="password" className="form-control" id="password" name = "password" />
              <ErrorMessage name="password" component="div"/>
            </label>
          </div>
          <div className="form-group text-center" style={{padding:"20px"}}>
          <button type="submit" className="btn btn-primary">Add Employee</button>
          </div>
          </div>
        </Form>
       
       )}
    </Formik>
    </div>
  </div>
  </>
);

}
export default RegistrationComponent;