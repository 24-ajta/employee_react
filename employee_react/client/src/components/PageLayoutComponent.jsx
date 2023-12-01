import React from "react";
import UserComponent from "./UserComponent";
import RegistrationComponent from "./RegistrationComponent.jsx";
import {BrowserRouter as  Router, Routes , Route} from 'react-router-dom';
import NavigationComponent from "./NavigationComponent";


function PageLayoutComponent(){

return (
<>
<Router>
        <Routes>
          <Route path="/" element={<NavigationComponent/>}/>
            {/* <Route path="/home" element={<PageLayoutComponent/>}></Route> */}
            <Route path='/registration' element={<RegistrationComponent/>}/>
            <Route path='/view' element={<UserComponent/>}/>
        </Routes>
        </Router>
    
</>
)

}
export default PageLayoutComponent;