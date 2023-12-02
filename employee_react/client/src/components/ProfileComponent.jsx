// import axios from "axios";
// import { useState } from "react";




// function ProfileComponent(){

// const [data,setData]=useState([]);

// axios.get(`http://localhost:3000/api/profile`)
// .then((response)=>{
//     setData(response.data);
//     console.log(response.status,response.data);
// })

// return (
//     <>
//     <h1 style={{textAlign:"center"}}>My Profile</h1>
//     <div className="container">
//     <table className="table table-success ">
//                 <thead>
//                   <tr>
//                     <th scope="col">Sl No</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Work</th>
//                     <th scope="col">Place</th>
//                     <th scope="col">Contact</th>
//                     <th scope="col"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((item,index)=>{
//                 return (
//                   <tr key={index}>
//                     <td>{index+1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.designation}</td>
//                     <td>{item.place}</td>
//                     <td>{item.contact}</td>
             
//                   </tr>
//                   )
//                 })}
//                 </tbody>
//               </table>
//               </div>

//     </>
// )


// }
// export default ProfileComponent;

// EmployeeDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfileComponent = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`/api/employees/${id}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    if (id) {
      fetchEmployeeData();
    }
  }, [id]);

  return (
    <div>
      {singleUser ? (
        <div>
          <h2>Employee Details</h2>
          <p>Name: {singleUser.name}</p>
          <p>Email: {singleUser.email}</p>
          {/* Display other employee details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileComponent;
