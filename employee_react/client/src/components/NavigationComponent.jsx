import React from "react";
import RegistrationComponent from "./RegistrationComponent.jsx";
import UserComponent from "./UserComponent.jsx";
import PageLayoutComponent from "./PageLayoutComponent.jsx";
import { Link , useNavigate } from "react-router-dom";

function NavigationComponent(){
  
return(
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
        <Link to="/registration" style={{textDecoration:"none",color:"white"}}>Registration</Link>
        </li>
        <li className="nav-item ms-2">
       <Link to="/view" style={{textDecoration:"none",color:"white"}}>Employee Details</Link>
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
export default NavigationComponent;
// import React from "react";
// import { useNavigate } from 'react-router-dom';

// function NavigationComponent() {
//   const navigate = useNavigate();

//   const redirectToRegistration = () => {
//     navigate('/registration');
//   };

//   const redirectToView = () => {
//     navigate('/view');
//   };
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           {/* ... */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item ms-2">
//                 <button onClick={redirectToRegistration} style={{ /* button styles */ }}>
//                   Registration
//                 </button>
//               </li>
//               <li className="nav-item ms-2">
//                 <button onClick={redirectToView} style={{ /* button styles */ }}>
//                   View
//                 </button>
//               </li>
//               {/* ... */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavigationComponent;
