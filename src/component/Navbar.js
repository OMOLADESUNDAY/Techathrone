import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import logo from  '../image/Throne_logo-removebg-preview.png'
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
    <div className="container">
      <nav className={show ? "navbarchange navbar" : "navbar"}>
        <div className="logoContainer">
          <a href="#home">
            <img src={logo} alt="SOLAR" />
          </a>
        </div>
        <div
          className={show ? "togglerContainerChange" : "togglerContainer"}
          onClick={togglerHandler}
        >
          {show ? <TiTimes className="col" /> : <BiMenu className="col" />}
        </div>
        <div className={show ? "show navlistContainer" : "navlistContainer"}>
          <div className="leftNavbar">
            <li>
              <a href="#home" onClick={() => setShow(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setShow(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#service" onClick={() => setShow(false)}>
                Service
              </a>
            </li>
          </div>
          <div className="rightNavbar">
            <li>
              <a href="#testimonies" onClick={() => setShow(false)}>
                Clients
              </a>
            </li>
            <li>
              <a onClick={() => setShow(false)} href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a onClick={() => setShow(false)} href="#contact">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
