// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// function ProfileComponent(){

// const [data,setData]=useState([]);
// let {id} = useParams();
// // console.log("id from useParams : ", id);

// useEffect(()=>{
//   axios.get(`http://localhost:3000/api/profile/${id}`)
//   .then((response)=>{
//       setData(response.data);
//       // console.log(response.status,response.data);
//       // console.log("Singe user data : ", response.data);
//   })

// },[])
// const onDelete=async()=>{
//   axios.delete(`http://localhost:3000/api/deletedata/${id}`)
//   .then((response)=>{
//     setData(response.data)
//   })
// }

// return (
//     <>
//     <h1 style={{textAlign:"center"}}>Details of {data.name}</h1>
//     <div className="container">
//       <form className="mt-5" >
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
//                     value={data.name}
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
//                     value={data.email}
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
//                     value={data.designation}
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
//                     value={data.place}
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
//                     value={data.contact}
//                   />
//                 </label>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
//              <button type="submit" className="btn btn-primary">
//              <Link to={`/update/${data._id}`} style={{textDecoration:"none",color:"white"}}>Update</Link>
//                 </button>
//               </div>
//               <div className="form-group text-center "
//                 style={{ padding: "20px" }}
//               >
          
//            <Link to="/"><button type="submit" onClick={onDelete} className="btn btn-primary">
//                   Delete
//                 </button></Link>  
              
//               </div>
                
//       </div>
//       </form>
//     </div>

//     </>
// )


// }
// export default ProfileComponent;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProfileComponent(){

const [data,setData]=useState(
{
  name:'',
  email:'',
  designation:'',
  place:'',
  contact:''
}
);
const {id} = useParams();
// console.log("id from useParams : ", id);

useEffect(()=>{
  const token = localStorage.getItem('adminToken');
  axios.get(`http://localhost:3000/profile/${id}`,
  {
    headers:{
      Authorization:`Bearer ${token}`,
    },
  }
  )
  .then((response)=>{
      setData(response.data);
      // console.log(response.status,response.data);
      // console.log("Singe user data : ", response.data);
  })

},[])
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
   const {name,email,designation,place,contact} = data;
   console.log("Datas",data)
   const token = localStorage.getItem('adminToken');
   axios.put(`http://localhost:3000/update/${id}`,data,
   {
    headers:{
      Authorization:`Bearer ${token}`,
    },
  })
         .then((response) => {
        console.log('User updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
};
const onDelete=async()=>{
  const token = localStorage.getItem('adminToken');
  axios.delete(`http://localhost:3000/api/deletedata/${id}`,
  {
    headers:{
      Authorization:`Bearer ${token}`,
    },
  })
  .then((response)=>{
    setData(response.data)
  })
}

return (
    <>
    <h1 style={{textAlign:"center"}}>Details of {data.name}</h1>
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
      <div className=" shadow-lg mb-5 bg-body rounded">
      <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  ID
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name="id"
                    id="id"
                    value={data._id}
                  />
                </label>
              </div>
      <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
                <label htmlFor="name" style={{ color: "blue" }}>
                  Name
                  <input
                    className="form-control border border-primary"
                    type="text"
                    name="name"
                    id="name"
                    value={data.name}
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
                    name="email"
                    id="email"
                    value={data.email}
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
                    name="designation"
                    id="designation"
                    value={data.designation}
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
                    name="place"
                    id="place"
                    value={data.place}
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
                    name="contact"
                    id="contact"
                    value={data.contact}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
             <button type="submit" className="btn btn-primary">
            Update
                </button>
              </div>
              <div className="form-group text-center "
                style={{ padding: "20px" }}
              >
          
           <Link to="/"><button type="submit" onClick={onDelete} className="btn btn-primary">
                  Delete
                </button></Link>  
              
              </div>
                
      </div>
      </form>
    </div>

    </>
)


}
export default ProfileComponent;
