import axios from "axios";
import { useState } from "react";




function ProfileComponent(){

const [data,setData]=useState([]);

axios.get(`http://localhost:3000/api/profile`)
.then((response)=>{
    setData(response.data);
    console.log(response.status,response.data);
})

return (
    <>
    <h1>My Profile</h1>
    <table className="table table-success ">
                <thead>
                  <tr>
                    <th scope="col">Sl No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Place</th>
                    <th scope="col">Contact</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item,index)=>{
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                    <td>{item.contact}</td>
                    <td><button className="btn btn btn-primary" href="#" role="button">View</button></td>
                  </tr>
                  )
                })}
                </tbody>
              </table>

    </>
)


}
export default ProfileComponent;