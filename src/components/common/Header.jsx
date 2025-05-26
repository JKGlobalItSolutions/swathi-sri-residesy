import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Data";
// import SocialIcons from "./SocialIcons";
import logo from "../common/logo.jpeg";

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
   <div className="container-fluid bg-dark px-0">
  <div className="row gx-0 p-3">
    {/* Logo Area */}
    <div className="col-lg-3 bg-dark  d-lg-flex align-items-center justify-content-center"  style={ window.innerWidth < 992 ? { marginLeft: "10px", marginTop: "15px" }  : {}
  }>
      <Link
        to="/"
        className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "50px",
            width: "50px",
            objectFit: "contain",
            marginRight: "10px",
          }}
        />
        <h4 className="text-warning text-uppercase mb-0">Swathisri Residency</h4>
      </Link>
    </div>

    {/* Navbar Items */}
    <div className="col-lg-9">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">

        {/* Mobile brand */}
        {/* <Link to="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-warning text-uppercase">Swathisri Residency</h1>
        </Link> */}

        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setNavbarCollapse(!navbarCollapse)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            navbarCollapse
              ? "navbar-collapse justify-content-around navbarCollapse"
              : "collapse navbar-collapse justify-content-around"
          }
        >
          <div className="navbar-nav mr-auto py-0">
            {navList.map((item, index) => (
              <div key={index}>
                {item.subItems ? (
                  <div
                    className="nav-item dropdown"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link dropdown-toggle text-light">
                      {item.text}
                    </Link>
                    <div
                      className={`dropdown-menu rounded-0 m-0 ${
                        activeDropdown === item.id ? "show" : ""
                      }`}
                    >
                      {item.subItems.map((sub, subIndex) => (
                        <Link
                          to={sub.path}
                          className="dropdown-item"
                          key={subIndex}
                        >
                          {sub.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={item.path} className="nav-item nav-link text-light">
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>


    </>
  );
}
