import axios from "axios";
import { useEffect, useState } from "react";
import ProfileComponent from "./ProfileComponent";
import {BrowserRouter as Router,Link,Routes , Route, useParams} from 'react-router-dom';
function UserComponent(){

const {id}=useParams();
const [data,setData] = useState([]);

useEffect(()=>{
  axios.get(`http://localhost:3000/api/listing`)
  .then((response)=>{
      setData(response.data.data);
      // alert(response.data.message)
      // console.log(response.status,response.data);
  })
  .catch((error)=>{
    console.log(error);
  });
},[])


return (
    <>
   
    <div className="container ">
    
                <h1 style={{textAlign:"center"}}>User Details</h1>
                <table className="table table-success ">
                <thead>
                  <tr>
                    <th scope="col">Sl No</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Place</th>
                    <th scope="col">Contact</th>
                    <th scope="col">View Details</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item,index)=>{
                return (
                  <>
                    {console.log("index.id : ", item._id)}
                  <tr key={item._id}>
                    <td>{index+1}</td>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                    <td >{item.contact}</td>
                    <td><button className="btn btn-primary"><Link to={`/update/${item._id}`} style={{textDecoration:"none",color:"white"}}>View</Link></button></td>
                   
                  
                  </tr>
                  </>
                  )
                })}
                </tbody>
              </table>
  
          
</div>                   
</>
)
}
export default UserComponent;