import React from "react";
import UserComponent from "./UserComponent";
// import RegistrationComponent from "./RegistrationComponent";
import RegistrationComponent from "./RegistrationComponent.jsx";
import {BrowserRouter as  Router, Routes , Route,useNavigate} from 'react-router-dom';
import NavigationComponent from "./NavigationComponent";
import ProfileComponent from "./ProfileComponent.jsx";
import UpdateComponent from "./UpdateComponent.jsx";
import AdminComponent from "./AdminComponent.jsx";


function PageLayoutComponent(){

return (
<>


<Routes>
      <Route path="/" element={<NavigationComponent />} />
      <Route path="/admin" element={<AdminComponent />} />
      <Route path='/registration' element={<RegistrationComponent />} />
      <Route path='/view' element={<UserComponent />} />
      <Route path='/profile/:id' element={<ProfileComponent />} />
      <Route path='/update/:id' element={<UpdateComponent />} />
      <Route path='/resetpassword' element={<ResetComponent/>}/>

</Routes>

    
</>
)

}
export default PageLayoutComponent;


// import React from "react";
// import { Routes, Route } from 'react-router-dom';
// import NavigationComponent from "./NavigationComponent";
// import RegistrationComponent from "./RegistrationComponent.jsx";
// import ProfileComponent from "./ProfileComponent";
// import UpdateComponent from "./UpdateComponent";
// import AdminComponent from "./AdminComponent";
// import UserComponent from "./UserComponent";

// function PageLayoutComponent() {
//   return (
//     <>
//       <NavigationComponent />
//       <Routes>
//         <Route path="/admin" element={<AdminComponent />} />
//         <Route path="/registration" element={<RegistrationComponent />} />
//         <Route path="/view" element={<UserComponent />} />
//         <Route path="/profile/:id" element={<ProfileComponent />} />
//         <Route path="/update/:id" element={<UpdateComponent />} />
//       </Routes>
//     </>
//   );
// }

// export default PageLayoutComponent;
