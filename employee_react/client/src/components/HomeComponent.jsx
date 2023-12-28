import React from "react";
import { Link } from "react-router-dom";

function HomeComponent(){
return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <form className="d-flex" role="search">
        
        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Login
          </a>
          <ul className="dropdown-menu">
          {/* <Link className="dropdown-item" to="/">
                  Admin
          </Link> */}
          <li>
              <a className="dropdown-item" href="#">
              <Link
                    to="/admin"
                  >
                    Login
                  </Link>
              </a>
            </li>
            
          </ul>
        </li>
        </ul>
      </form>
    </div>
  </div>
</nav>

    </>
)
}

export default HomeComponent;