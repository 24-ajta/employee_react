import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayoutComponent from './components/PageLayoutComponent';
import AdminComponent from './components/AdminComponent';
import HomeComponent from './components/HomeComponent';
import NavigationComponent from './components/NavigationComponent';
import RegistrationComponent from './components/RegistrationComponent';
import UserComponent from './components/UserComponent';
import UpdateComponent from './components/UpdateComponent';
import LogoutComponent from './components/LogoutComponent';
import ProfileComponent from './components/ProfileComponent';
import ResetComponent from './components/ResetComponent';
import Employeenavbar from './components/Employeenavbar';
function App() {
//   const [adminLoggedIn, setAdminLoggedIn] = useState(false);

//   const handleAdminLogin = () => {
//     setAdminLoggedIn(true);
//   };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomeComponent/>} />
      <Route path="/admin" element={<AdminComponent/>}/>
      <Route path='/navigate' element={<NavigationComponent/>}/>
      <Route path='/registration' element={<RegistrationComponent/>} />
      <Route path='/view' element={<UserComponent/>}/>
      <Route path='/employeenavbar' element={<Employeenavbar/>}/>
      {/* <Route path='/viewprofile/:id' element={<UpdateComponent/>}/> */}
      {/* <Route path='/viewprofile' element={<UpdateComponent/>}/> */}
      <Route path='/employeelogin' element={<AdminComponent/>}/>
      <Route path='/resetpassword' element={<ResetComponent/>}/>
      <Route path='/profile/:id' element={<ProfileComponent />} />
      <Route path='/update/:id' element={<UpdateComponent />} />
      <Route path='/logout' element={<LogoutComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
