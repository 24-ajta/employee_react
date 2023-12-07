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

import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup';

function UpdateComponent(){
const {id} = useParams("");
const [editData,seteditData] = useState
({
  name:'',
  email:'',
  place:'',
  designation:'',
  contact:''
})
console.log("data values..",data.name)
// const initialValues={
//   name:editData.data.name,
//   email:editData.data.email,
//   place:editData.data.place,
//   designation:editData.data.designation,
//   contact:editData.data.contact
//  };
console.log("edit data",editData)

const getDetails=async()=>{
  const data=axios.get(`http://localhost:3000/api/profile/${id}`)
  console.log(data)
  data
  .then((response)=>
  {
    console.log("User Details", response.data.data)
    seteditData(response.data.data);
    console.log(data)
  })
  .catch((error)=>{
    console.log(error)
  })
}
// const handleChange=(e)=>
// {
//   console.log("Reached here")

//   seteditData((pre)=>
//   {
//     return {...pre,[e.target.name]:e.target.value}
//   })
// }
const handleSubmit = (e) => {
  console.log("Reached handlesubmit");
   e.preventDefault();
   const {name,email,designation,place,contact} = editData;
   console.log("Datas",editData)
   axios.put(`http://localhost:3000/api/update/${id}`,editData)
         .then((response) => {
        console.log('User updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
};
useEffect(()=>{
  getDetails();
},[])
const onDelete=async()=>{
  axios.delete(`http://localhost:3000/api/deletedata/${id}`)
  .then((response)=>{
    setData(response.data)
  })
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

    email: Yup.string()
    .email('Invalid email')
    .required('Required'),

    place:Yup.string()
    .min(2,"Invalid Address")
    .required("Required"),

    designation: Yup.string()
    .required("Required"),

   

  contact: Yup.string()
  .matches(/^[6-9]\d{9}$/, "Please enter valid phone number.")

});

return (
    <>
    <h1 style={{textAlign:"center"}}>Details </h1>
    <div className="container">
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignupSchema} >

      <Form className="mt-5" >
      <div className=" shadow-lg mb-5 bg-body rounded">
      <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Name
                  <Field
                    className="form-control border border-primary"
                    type="text"
                    name='name'
                    id="name"
                    value={editData.name}
                 
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="email" style={{ color: "blue" }}>
                  Email
                  <Field
                    className="form-control border border-primary"
                    type="email"
                    name='email'
                    id="email"
                    value={editData.email}
                    onChange={Formik.handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Work
                  <Field
                    className="form-control border border-primary"
                    type="text"
                    name='designation'
                    id="designation"
                    value={editData.designation}
                    onChange={Formik.handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Place
                  <Field
                    className="form-control border border-primary"
                    type="text"
                    name='place'
                    id="place"
                    value={editData.place}
                    onChange={Formik.handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Contact
                  <Field
                    className="form-control border border-primary"
                    type="text"
                    name='contact'
                    id="contact"
                    value={editData.contact}
                    onChange={Formik.handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
             <button type="submit" className="btn btn-primary" style={{color:"white"}}>
                Update Details
                </button>
                 
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <Link to="/view"><button type="submit" onClick={onDelete} className="btn btn-primary">
                  Delete
                </button></Link> 
              </div>
                
      </div>
      </Form>
      </Formik>
    </div>

    </>
)


}
export default UpdateComponent;