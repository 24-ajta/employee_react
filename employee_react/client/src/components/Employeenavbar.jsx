import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Employeenavbar(){
  
    const id = localStorage.getItem('employeeId');
  

  
    console.log("Employee ID:", id);
return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
   <Link to="/home" style={{textDecoration:"none",color:"white"}}>Home Page</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        
        <li className="nav-item ms-2">
            <Link to={`/profile/${id}`} style={{ textDecoration: "none", color: "white" }}>
              View Profile
            </Link>
         
             {/* <Link to='/viewprofile/' style={{ textDecoration: "none", color: "white" }}>
              View Profile
            </Link> */}
         
        </li>
        <li className="nav-item ms-2">
       <Link to="/logout" style={{textDecoration:"none",color:"white"}}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
)
}
export default Employeenavbar;