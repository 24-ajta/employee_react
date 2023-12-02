import axios from "axios";
import { useState } from "react";
import ProfileComponent from "./ProfileComponent";
import {BrowserRouter as Router,Link,Routes , Route, useParams} from 'react-router-dom';
function UserComponent(){

const {id}=useParams();
const [data,setData] = useState([]);
const [singleUser ,setSingleUser] = useState('');


const handleclick=async()=>{
try {
  const response = await axios.get(`http://localhost:3000/api/profile/${id}`);
  setSingleUser(response.data);
  console.log(response.data);
} catch (error) {
  console.log("error fetching data",error)
}
}


axios.get(`http://localhost:3000/api/listing`)
.then((response)=>{
    setData(response.data);
    // console.log(response.status,response.data);
})
.catch((error)=>{
  console.log(error);
});

return (
    <>
   
    <div className="container ">
    
                <h1 style={{textAlign:"center"}}>User Details</h1>
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
                  <>
                    
                  <tr key={index.id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                    <td>{item.contact}</td>
                    <td><button className="btn btn-primary" onClick={handleclick}><Link to={"/profile"} style={{textDecoration:"none",color:"white"}}>View</Link></button></td>
                   
                   
                  
                  </tr>
                  {/* <Routes>
                        <Route path='/profile' element={<ProfileComponent/>}/>
                  </Routes> */}
                    
                  </>
                  )
                })}
                </tbody>
              </table>
              {singleUser && (
        <div>
          <h2>Selected Employee Details</h2>
          <p>Name: {singleUser.name}</p>
          <p>Email: {singleUser.email}</p>
          {/* Display other selected employee details as needed */}
        </div>
      )}
          
</div>                   
</>
)
}
export default UserComponent;