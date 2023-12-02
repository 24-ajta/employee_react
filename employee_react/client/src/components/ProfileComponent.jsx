import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";


function ProfileComponent(){

const [data,setData]=useState([]);
let {id} = useParams();
console.log("id from useParams : ", id);

axios.get(`http://localhost:3000/api/profile/${id}`)
.then((response)=>{
    setData(response.data);
    console.log(response.status,response.data);
    console.log("Singe user data : ", response.data);
})

return (
    <>
    <h1 style={{textAlign:"center"}}>Details of {data.name}</h1>
    <div className="container">
    <table className="table table-success ">
                <thead>
                  <tr>
                    
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Work</th>
                    <th scope="col">Place</th>
                    <th scope="col">Contact</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {console.log("data from useState  : ", data)}
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.designation}</td>
                    <td>{data.place}</td>
                    <td>{data.contact}</td>

                  </tr>
                  
                </tbody>
              </table>
              </div>

    </>
)


}
export default ProfileComponent;

