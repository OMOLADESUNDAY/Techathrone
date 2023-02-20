import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import logo from  '../image/Throne logo.JPG'
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const togglerHandler = () => {
    setShow(!show);
    const checkSize = window.addEventListener("resize", () => {
      if (window.screen.width > 768) {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  };
 
  return (
    <header className="header container">
      <nav className={show ? "navbarchange navbar" : "navbar"}>
        <div className="logoContainer"><img src={logo} alt='SOLAR'/></div>
        <div
          className={show ? "togglerContainerChange" : "togglerContainer"}
          onClick={togglerHandler}
        >
          {show ? <TiTimes /> : <BiMenu />}
        </div>
        <div className={show ? "show navlistContainer" : "navlistContainer"}>
          <div className="leftNavbar">
            <li>
              <Link to="/" onClick={() => setShow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/marketplace" onClick={() => setShow(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/assets" onClick={() => setShow(false)}>
                Service
              </Link>
            </li>
          </div>
          <div className="rightNavbar">
            <li>
              <Link to="/events" onClick={() => setShow(false)}>
                Clients
              </Link>
            </li>
            <li>
              <Link onClick={() => setShow(false)} to="/login">
                blog
              </Link>
            </li>
            <li>
              <Link onClick={() => setShow(false)} to="/signup">
                contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
