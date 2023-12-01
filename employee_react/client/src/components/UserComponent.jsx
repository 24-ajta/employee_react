import axios from "axios";
import { useState } from "react";
import ProfileComponent from "./ProfileComponent";
import {BrowserRouter as Router,Link,Routes , Route} from 'react-router-dom';
function UserComponent(){

const [data,setData] = useState([]);


axios.get(`http://localhost:3000/api/listing`)
.then((response)=>{
    setData(response.data);
    console.log(response.status,response.data);
})

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
                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                    <td>{item.contact}</td>
                   <td><button onClick={hadleClick} className="btn btn-info"> <Link to="/profile" style={{textDecoration:"none"}}>View</Link></button></td>
                   
                  
                  </tr>
                  <Routes>
                        <Route path='/profile' element={<ProfileComponent/>}/>
                  </Routes>
                    
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