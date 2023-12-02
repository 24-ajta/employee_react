import React from "react";
import UserComponent from "./UserComponent";
import RegistrationComponent from "./RegistrationComponent.jsx";
import {BrowserRouter as  Router, Routes , Route} from 'react-router-dom';
import NavigationComponent from "./NavigationComponent";
import ProfileComponent from "./ProfileComponent.jsx";


function PageLayoutComponent(){

return (
<>
<Router>
        <Routes>
          <Route path="/" element={<NavigationComponent/>}/>
          <Route path='/registration' element={<RegistrationComponent/>}/>
          <Route path='/view' element={<UserComponent/>}/>
          <Route path='/profile/' element={<ProfileComponent/>} />
        </Routes>
        </Router>
    
</>
)

}
export default PageLayoutComponent;