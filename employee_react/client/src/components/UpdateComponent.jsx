// import axios from "axios";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// function UpdateComponent(){
// const {id} = useParams("");
// const [editData,seteditData] = useState({
//     name:'',
//     email:'',
//     designation:'',
//     place:'',
//     contact:''
// })

//   useEffect(() => {
//     // Fetch user data based on the userId when the component mounts
//     axios.get(`http://localhost:3000/api/profile/${id}`)
//       .then((response) => {
//         setData(response.data);
//         // Pre-fill the form with the existing user data
//         seteditData({
//           name: response.data.name,
//           email: response.data.email,
//           designation:response.data.designation,
//           place:response.data.place,
//           contact:response.data.contact
//           // Set other fields accordingly
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [id]);
// // axios.get(`http://localhost:3000/api/profile/${id}`)
// // .then((response)=>{
// //     setData(response.data);
// //     // console.log(response.status,response.data);
// //     // console.log("Singe user data : ", response.data);
// // })
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:3000/api/profile/${id}`, newData)
//       .then((response) => {
//         console.log('User updated successfully:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error updating user data:', error);
//       });
//   };

// return (
//     <>
//     <h1 style={{textAlign:"center"}}>Details of {data.name}</h1>
//     <div className="container">
//       <form className="mt-5" onSubmit={handleSubmit}>
//       <div className=" shadow-lg mb-5 bg-body rounded">
//       <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   ID
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="id"
//                     id="id"
//                     value={data._id}
//                   />
//                 </label>
//               </div>
//       <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Name
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={editData.name}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="email" style={{ color: "blue" }}>
//                   Email
//                   <input
//                     className="form-control border border-primary"
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={editData.email}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Work
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="designation"
//                     id="designation"
//                     value={editData.designation}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Place
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="place"
//                     id="place"
//                     value={editData.place}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Contact
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name="contact"
//                     id="contact"
//                     value={editData.contact}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//              <button type="submit" className="btn btn-primary">
//                 Update Details
//                 </button>
//               </div>

//       </div>
//       </form>
//     </div>

//     </>
// )

// }
// export default UpdateComponent;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// let {id} =useParams();
// const UpdateComponent = ({ id }) => {
//   const [user, setUser] = useState({});
//   const [newData, setNewData] = useState({
//     name: '',
//     email: '',
//     place:'',
//     designation:'',
//     contact:''
//     // Add other fields here that you want to update
//   });

//   useEffect(() => {
//     // Fetch user data based on the userId when the component mounts
//     axios.get(`http://localhost:3000/api/profile/${id}`)
//       .then((response) => {
//         setUser(response.data);
//         // Pre-fill the form with the existing user data
//         setNewData({
//           name: response.data.name,
//           email: response.data.email,
//           place:response.data.place,
//           designation:response.data.designation,
//           contact:response.data.contact
//           // Set other fields accordingly
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     setNewData({
//       ...newData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send a PUT request to update the user data
//     axios.put(`http://localhost:3000/api/update/${id}`, newData)
//       .then((response) => {
//         console.log('User updated successfully:', response.data);
//         // Optionally, perform actions after successful update
//       })
//       .catch((error) => {
//         console.error('Error updating user data:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Edit User</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" name="name" value={newData.name} onChange={handleChange} />

//         <label>Email:</label>
//         <input type="email" name="email" value={newData.email} onChange={handleChange} />

//         <label>Place:</label>
//         <input type="text" name="place" value={newData.place} onChange={handleChange} />

//         <label>Email:</label>
//         <input type="text" name="designation" value={newData.designation} onChange={handleChange} />

//         <label>Email:</label>
//         <input type="text" name="contact" value={newData.contact} onChange={handleChange} />

//         {/* Add other fields for editing */}

//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateComponent;

// import axios from "axios";
// import React, { useState,useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// function UpdateComponent(){
// const {id} = useParams("");
// const [editData,seteditData] = useState
// ({
//     name:'',
//     email:'',
//     designation:'',
//     place:'',
//     contact:''
// })
// console.log("edit data",editData)

// const getDetails=async()=>{
//   const data=axios.get(`http://localhost:3000/api/profile/${id}`)
//   console.log(data)
//   data
//   .then((response)=>
//   {
//     console.log("User Details", response.data.data)
//     seteditData(response.data.data);
//     console.log(data)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }
// const handleChange=(e)=>
// {
//   console.log("Reached here")

//   seteditData((pre)=>
//   {
//     return {...pre,[e.target.name]:e.target.value}
//   })
// }
// const handleSubmit = (e) => {
//   console.log("Reached handlesubmit");
//    e.preventDefault();
//    const {name,email,designation,place,contact} = editData;
//    console.log("Datas",editData)
//    axios.put(`http://localhost:3000/api/update/${id}`,editData)
//          .then((response) => {
//         console.log('User updated successfully:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error updating user data:', error);
//       });
// };
// useEffect(()=>{
//   getDetails();
// },[])
// const onDelete=async()=>{
//   axios.delete(`http://localhost:3000/api/deletedata/${id}`)
//   .then((response)=>{
//     setData(response.data)
//   })
// }
// return (
//     <>
//     <h1 style={{textAlign:"center"}}>Details of {editData.name}</h1>
//     <div className="container">
//       <form className="mt-5" onSubmit={handleSubmit}>
//       <div className=" shadow-lg mb-5 bg-body rounded">
//       <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Name
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name='name'
//                     id="name"
//                     value={editData.name}

//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="email" style={{ color: "blue" }}>
//                   Email
//                   <input
//                     className="form-control border border-primary"
//                     type="email"
//                     name='email'
//                     id="email"
//                     value={editData.email}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Work
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name='designation'
//                     id="designation"
//                     value={editData.designation}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Place
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name='place'
//                     id="place"
//                     value={editData.place}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Contact
//                   <input
//                     className="form-control border border-primary"
//                     type="text"
//                     name='contact'
//                     id="contact"
//                     value={editData.contact}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//              <button type="submit" className="btn btn-primary" style={{color:"white"}}>
//                 Update Details
//                 </button>

//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//                 <Link to="/view"><button type="submit" onClick={onDelete} className="btn btn-primary">
//                   Delete
//                 </button></Link>
//               </div>

//       </div>
//       </form>
//     </div>

//     </>
// )

// }
// export default UpdateComponent;

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// function UpdateComponent() {
//   console.log("Component rendering...");
//   const { id } = useParams("");
//   const [editData, seteditData] = useState({});

//   // console.log("data values..",editData.name)

//   const getDetails = () => {
//     const data = axios.get(`http://localhost:3000/api/profile/${id}`);
//     console.log(data);
//     data
//       .then((response) => {
//         console.log("User Details", response.data.data);
//         seteditData(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     getDetails();
//   }, []);

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/update/${id}`,
//         values
//       );
//       console.log("Form Submitted", response.data.data);
//       resetForm();
//     } catch (error) {
//       console.error("Not Submitted", error);
//     }
//   };


  // const onDelete = async () => {
  //   axios
  //     .delete(`http://localhost:3000/api/deletedata/${id}`)
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

//   const SignupSchema = Yup.object().shape({
    // name: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),

    // email: Yup.string().email("Invalid email").required("Required"),

    // place: Yup.string().min(2, "Invalid Address").required("Required"),

    // designation: Yup.string().required("Required"),

    // password: Yup.string()
    //   .required("No password provided.")
    //   .min(8, "Password is too short - should be 8 chars minimum.")
    //   .matches(
    //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
    //     "Password must contain one Uppercase and one lowercase and a number."
    //   ),

    // contact: Yup.string().matches(
    //   /^[6-9]\d{9}$/,
    //   "Please enter valid phone number."
    // ),
//   });

//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Details </h1>
//       <div className="container">
//         <Formik 
//         initialValues={{ 
//             name: editData.name,
//             email: editData.email,
//             place: editData.place,
//             designation: editData.designation,
//             contact: editData.contact,
//           }}
//           onSubmit={handleSubmit}
//           validationSchema={SignupSchema}
//           enableReinitialize
//         >
//           {({ errors, touched, isValidating }) => (
//             <Form className="mt-5">
//               <div className=" shadow-lg mb-5 bg-body rounded">
//                 <div
//                   className="form-group text-center "
//                   style={{ padding: "20px" }}
//                 >
//                   <label htmlFor="name" style={{ color: "blue" }}>
//                     Name
//                     <Field
//                       className="form-control border border-primary"
//                       type="text"
//                       name="name"
//                       id="name"
//                       // value={editData.name}
//                     />
//                   </label>
//                 </div>
//                 <div
//                   className="form-group text-center "
//                   style={{ padding: "20px" }}
//                 >
//                   <label htmlFor="email" style={{ color: "blue" }}>
//                     Email
//                     <Field
//                       className="form-control border border-primary"
//                       type="email"
//                       name="email"
//                       id="email"
//                       // value={values.email}
//                       // onChange={handleChange}
//                     />
//                     {/* {errors.email && touched.email ? (
//               <div>{errors.email }  </div>
//               ) : null} */}
//                     <ErrorMessage
//                       name="email"
//                       style={{ color: "red" }}
//                       component="div"
//                     />
//                   </label>
//                 </div>
//                 <div
//                   className="form-group text-center "
//                   style={{ padding: "20px" }}
//                 >
//                   <label htmlFor="designation" style={{ color: "blue" }}>
//                     Work
//                     <Field
//                       className="form-control border border-primary"
//                       type="text"
//                       name="designation"
//                       id="designation"
//                       // value={editData.designation}
//                       // onChange={handleChange}
//                     />
//                     <ErrorMessage
//                       name="designation"
//                       style={{ color: "red" }}
//                       component="div"
//                     />
//                   </label>
//                 </div>
//                 <div
//                   className="form-group text-center "
//                   style={{ padding: "20px" }}
//                 >
//                   <label htmlFor="place" style={{ color: "blue" }}>
//                     Place
//                     <Field
//                       className="form-control border border-primary"
//                       type="text"
//                       name="place"
//                       id="place"
//                       // value={editData.place}
//                       // onChange={handleChange}
//                     />
//                     <ErrorMessage
//                       name="place"
//                       style={{ color: "red" }}
//                       component="div"
//                     />
//                   </label>
//                 </div>
//                 <div
//                   className="form-group text-center "
//                   style={{ padding: "20px" }}
//                 >
//                   <label htmlFor="contact" style={{ color: "blue" }}>
//                     Contact
//                     <Field
//                       className="form-control border border-primary"
//                       type="text"
//                       name="contact"
//                       // id="contact"
//                       // value={editData.contact}
//                       // onChange={handleChange}
//                     />
//                   </label>
//                   <ErrorMessage
//                     name="contact"
//                     style={{ color: "red" }}
//                     component="div"
//                   />
//                 </div>
//                 <div
//                   className="form-group text-center "
//                   style={{ padding: "20px" }}
//                 >
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     style={{ color: "white" }}
//                   >
//                     Update Details
//                   </button>
//                 </div>
//                 <div
//                   className="form-group text-center "
//                   style={{ padding: "20px" }}
//                 >
//                   <Link to="/view">
//                     <button
//                       type="submit"
//                       onClick={onDelete}
//                       className="btn btn-primary"
//                     >
//                       Delete
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </>
//   );
// }
// export default UpdateComponent;


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// function UpdateComponent() {
//   const { id } = useParams();
//   console.log("id",id)
//   const [editData, seteditData] = useState({});

//   useEffect(() => {
//     getDetails();
//   }, []);

//   const getDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/profile/${id}`);
//       seteditData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     }
//   };

//   const handleSubmit = async (values,{resetForm}) => {
//     try {
//       const response = await axios.put(`http://localhost:3000/api/update/${id}`, values);
//       console.log("Form Submitted", response.data.data);
//       resetForm();
//       // You might set some state or perform further actions upon successful submission
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),

//   email: Yup.string().email("Invalid email").required("Required"),

//   place: Yup.string().min(2, "Invalid Address").required("Required"),

//   designation: Yup.string().required("Required"),

//   password: Yup.string()
//     .required("No password provided.")
//     .min(8, "Password is too short - should be 8 chars minimum.")
//     .matches(
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
//       "Password must contain one Uppercase and one lowercase and a number."
//     ),

//   contact: Yup.string().matches(
//     /^[6-9]\d{9}$/,
//     "Please enter valid phone number."
//   ),
//   });
  // const onDelete = async () => {
  //   axios
  //     .delete(`http://localhost:3000/api/deletedata/${id}`)
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Details </h1>
//       <div className="container">
//         <Formik
//           initialValues={{
//             name: editData.name || '',
//             email: editData.email || '',
//             place: editData.place || '',
//             designation: editData.designation || '',
//             contact: editData.contact || '',
//           }}
//           onSubmit={handleSubmit}
//           validationSchema={SignupSchema}
//           enableReinitialize
//         >
//             <Form className="mt-5">
//               {/* Form fields */}
//               <div className="form-group text-center" style={{ padding: "20px" }}>
//                 <label htmlFor="name" style={{ color: "blue" }}>
//                   Name
//                   <Field
//                     className="form-control border border-primary"
//                     type="text"
//                     name="name"
//                   />
//                   <ErrorMessage name="name" style={{ color: "red" }} component="div" />
//                 </label>
//               </div>
//               <div className="form-group text-center" style={{ padding: "20px" }}>
//                 <label htmlFor="email" style={{ color: "blue" }}>
//                   Email
//                   <Field
//                     className="form-control border border-primary"
//                     type="email"
//                     name="email"
//                   />
//                   <ErrorMessage name="email" style={{ color: "red" }} component="div" />
//                 </label>
//               </div>
//               <div className="form-group text-center" style={{ padding: "20px" }}>
//                 <label htmlFor="place" style={{ color: "blue" }}>
//                   Place
//                   <Field
//                     className="form-control border border-primary"
//                     type="text"
//                     name="place"
//                   />
//                   <ErrorMessage name="place" style={{ color: "red" }} component="div" />
//                 </label>
//               </div>
//               <div className="form-group text-center" style={{ padding: "20px" }}>
//                 <label htmlFor="designation" style={{ color: "blue" }}>
//                   Type of Work
//                   <Field
//                     className="form-control border border-primary"
//                     type="text"
//                     name="designation"
//                   />
//                   <ErrorMessage name="designation" style={{ color: "red" }} component="div" />
//                 </label>
//               </div>
//               <div className="form-group text-center" style={{ padding: "20px" }}>
//                 <label htmlFor="contact" style={{ color: "blue" }}>
//                   Name
//                   <Field
//                     className="form-control border border-primary"
//                     type="text"
//                     name="contact"
//                   />
//                   <ErrorMessage name="contact" style={{ color: "red" }} component="div" />
//                 </label>
//               </div>
//               <div className="form-group text-center" style={{ padding: "20px" }}>
//                 <button type="submit" className="btn btn-primary" style={{ color: "white" }}>
//                   Update Details
//                 </button>
//               </div>
//               <div className="form-group text-center" style={{ padding: "20px" }}>
//                 <Link to="/view">
//                   <button className="btn btn-primary" onClick={onDelete}>
//                     Delete
//                   </button>
//                 </Link>
//               </div>
//             </Form>
//         </Formik>
//       </div>
//     </>
//   );
// }
// export default UpdateComponent;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DeleteComponent from "./DeleteComponent";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import SuccessComponent from "./SuccessComponent";

function UpdateComponent() {
  const { id } = useParams("");
  console.log("id", id);
  const [editData, setEditData] = useState({});
  const [success, setSuccess] = useState(false);
  const [deletedata, setDeletedata] = useState(false);
  const [error, setError] = useState(false);
  const [showform, setShowform] = useState(true);
  const [validationMessage, setValidationMessage] = useState();
  const [backendErrors, setBackendErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails();
  }, [loading]);

  const handleupdate = () => {
    setSuccess(false);
    setShowform(true);
    setLoading(true);
  };
  const handledelete = () => {
    setDeletedata(false);
  };
  const handleError = () => {
    setError(false);
  };
  const getDetails = async () => {
    try {
      
      console.log("Reached in getDetails")
      const token = localStorage.getItem('adminToken');
      console.log("token in getting profile", token);
      const response = await axios.get(
        `http://localhost:3000/profile/${id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );
      
      console.log("response.data",response.data.data)
      formik.setValues(response.data.data);
      setEditData(response.data.data);
      const userType = response.data.user_type;
      console.log("userType",userType);
      // const token = localStorage.getItem('adminToken');
      // console.log("token in getting profile", token);
      // const response = await axios.get(
      //   `http://localhost:3000/profile/${id}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      // console.log("response.data.usertype",response.data.usertype)
      // if (response.data.usertype === 'admin') {
       
      //   formik.setValues(response.data.data);
      //   setEditData(response.data.data);
      // } else if (response.data.usertype === 'employee' && id) {
      //   console.log("response.data.usertype",response.data.usertype)
      //   formik.setValues(response.data.data);
      //   setEditData(response.data.data);
      // }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("User not found");
        setDeletedata(true);
      } else {
        console.error("Error fetching user details:", error);
        setError(true);
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken'); 
      console.log("token",token);
      const response = await axios.delete(
        `http://localhost:3000/deletedata/${id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setDeletedata(true);
        setValidationMessage(response.data.message);
      } else {
        setError(true);
      }
      setSuccess(false);
    } catch (error) {
      setError(true);
      console.log("Error in delete", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    place: Yup.string().min(2, "Invalid Address").required("Required"),
    designation: Yup.string().required("Required"),
    contact: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Please enter a valid phone number.")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: editData.name || "",
      email: editData.email || "",
      place: editData.place || "",
      designation: editData.designation || "",
      contact: editData.contact || "",
    },
    validationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      try {
        setLoading(true);
        const token = localStorage.getItem('adminToken'); 
        console.log("token",token)
        const response = await axios.put(
          `http://localhost:3000/update/${id}`,
          values,
          {
            headers:{
              Authorization:`Bearer ${token}`,
            },
          }
        );
        
        console.log("Form Submitted", response.data.data);
        if (response.data.errors) {
          setBackendErrors(response.data.errors);
          setErrors(response.data.errors);
          setValidationMessage(response.data.message);
          setError(true);
          setSuccess(false);
        } else if (response.data.success) {
          setSuccess(true);
          setShowform(false);
          setValidationMessage(response.data.message);
        }
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        setError(true);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    },
  });

  return (
    <>
      <div>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div>
            {
              <div>
                {showform && (
                  <div>
                    <h1 style={{ textAlign: "center" }}>Details</h1>
                    <div className="container">
                      <form onSubmit={formik.handleSubmit} className="mt-5">
                        {/* Form fields */}
                        <div
                          className="form-group text-center"
                          style={{ padding: "20px" }}
                        >
                          <label htmlFor="name" style={{ color: "blue" }}>
                            Name
                            <input
                              className="form-control border border-primary"
                              type="text"
                              name="name"
                              {...formik.getFieldProps("name")}
                            />
                            {formik.touched.name && formik.errors.name && (
                              <div style={{ color: "red" }}>
                                {formik.errors.name}
                              </div>
                            )}
                            {backendErrors.name_empty && (
                              <div>{backendErrors.name_empty}</div>
                            )}
                            {backendErrors.name && (
                              <div>{backendErrors.name}</div>
                            )}
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
                              {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                              <div style={{ color: "red" }}>
                                {formik.errors.email}
                              </div>
                            )}
                            {backendErrors.email_empty && (
                              <div>{backendErrors.email_empty}</div>
                            )}
                            {backendErrors.email && (
                              <div>{backendErrors.email}</div>
                            )}
                            {backendErrors.email_invalid && (
                              <div>{backendErrors.email_invalid}</div>
                            )}
                            {backendErrors.email_exist && (
                              <div>{backendErrors.email_exist}</div>
                            )}
                          </label>
                        </div>
                        <div
                          className="form-group text-center"
                          style={{ padding: "20px" }}
                        >
                          <label htmlFor="place" style={{ color: "blue" }}>
                            Place
                            <input
                              className="form-control border border-primary"
                              type="text"
                              name="place"
                              {...formik.getFieldProps("place")}
                            />
                            {formik.touched.place && formik.errors.place && (
                              <div style={{ color: "red" }}>
                                {formik.errors.place}
                              </div>
                            )}
                            {backendErrors.place_empty && (
                              <div>{backendErrors.place_empty}</div>
                            )}
                            {backendErrors.place && (
                              <div>{backendErrors.place}</div>
                            )}
                          </label>
                        </div>
                        <div
                          className="form-group text-center"
                          style={{ padding: "20px" }}
                        >
                          <label
                            htmlFor="designation"
                            style={{ color: "blue" }}
                          >
                            Work
                            <input
                              className="form-control border border-primary"
                              type="text"
                              name="designation"
                              {...formik.getFieldProps("designation")}
                            />
                            {formik.touched.designation &&
                              formik.errors.designation && (
                                <div style={{ color: "red" }}>
                                  {formik.errors.designation}
                                </div>
                              )}
                            {backendErrors.designation_empty && (
                              <div>{backendErrors.designation_empty}</div>
                            )}
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
                              {...formik.getFieldProps("contact")}
                            />
                            {formik.touched.contact &&
                              formik.errors.contact && (
                                <div style={{ color: "red" }}>
                                  {formik.errors.contact}
                                </div>
                              )}
                            {backendErrors.contact_empty && (
                              <div>{backendErrors.contact_empty}</div>
                            )}
                            {backendErrors.contact && (
                              <div>{backendErrors.contact}</div>
                            )}
                          </label>
                        </div>
                        {/* ... Other form fields */}
                        <div
                          className="form-group text-center"
                          style={{ padding: "20px" }}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ color: "white" }}
                          >
                            Update Details
                          </button>
                        </div>
                        <div
                          className="form-group text-center"
                          style={{ padding: "20px" }}
                        >
                          {/* <Link to="/view"> */}
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={onDelete}
                          >
                            Delete
                          </button>
                          {/* </Link> */}
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {success && (
                  <SuccessComponent
                    message={validationMessage}
                    onClose={handleupdate}
                  />
                )}
                {deletedata && (
                  <DeleteComponent
                    message={validationMessage}
                    onClose={handledelete}
                  />
                )}
                {error && (
                  <ErrorComponent
                    message={validationMessage}
                    onClose={handleError}
                  />
                )}
                {/* {error && !deletedata && <ErrorComponent onClose={handleError} />} */}
              </div>
            }
          </div>
        )}
      </div>
    </>
  );
}

export default UpdateComponent;