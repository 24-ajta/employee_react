import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AdminComponent from './AdminComponent';
import PageLayoutComponent from './PageLayoutComponent';
function AdminLoggedinComponent(){

    const isAdminLoggedIn = () => {
        const adminToken = localStorage.getItem('token');
        return adminToken 
      };
      const AdminRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={(props) =>
            isAdminLoggedIn() ? (
              <Component {...props} />
            ) : (
              <Redirect to="/admin-login" />
            )
          }
        />
      );
    
      return (
        <Router>
          <AdminRoute exact path="/admin" component={AdminComponent} />
          <Route exact path="/other" component={OtherComponent} />
          {/* Define other routes as needed */}
        </Router>
      );

}
export default AdminLoggedinComponent;