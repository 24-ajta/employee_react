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




import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UpdateComponent(){
const {id} = useParams("");
const [editData,seteditData] = useState
({
    name:'',
    email:'',
    designation:'',
    place:'',
    contact:''
})
console.log("edit data",editData)

const getDetails=async()=>{
  const data=axios.get(`http://localhost:3000/api/profile/${id}`)
  console.log(data)
  data
  .then((response)=>
  {
    console.log(response.data)
    seteditData(response.data);
    console.log(data)
  })
  .catch((error)=>{
    console.log(error)
  })
}
const handleChange=(e)=>
{
  console.log("Reached herre")

  seteditData((pre)=>
  {
    return {...pre,[e.target.name]:e.target.value}
  })
}
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
return (
    <>
    <h1 style={{textAlign:"center"}}>Edit Details</h1>
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
      <div className=" shadow-lg mb-5 bg-body rounded">
      <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Name
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name='name'
                    id="name"
                    value={editData.name}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="email" style={{ color: "blue" }}>
                  Email
                  <input
                    className="form-control border border-primary"
                    type="email"
                    name='email'
                    id="email"
                    value={editData.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Work
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name='designation'
                    id="designation"
                    value={editData.designation}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Place
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name='place'
                    id="place"
                    value={editData.place}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Contact
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name='contact'
                    id="contact"
                    value={editData.contact}
                    onChange={handleChange}
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
                
      </div>
      </form>
    </div>

    </>
)


}
export default UpdateComponent;