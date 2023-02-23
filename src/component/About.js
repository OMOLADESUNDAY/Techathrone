import React from "react";
import { data } from "../data";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {

  return (
    <section id="about" >
      <h5 className="h5">Get To Know</h5>
      <h2 className="h2">About Us</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image" data-aos='fade-right'>
            <img src={data.me} alt="omolade sunday" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h4>Experince</h4>
              <small>10+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h4>Clients</h4>
              <small>120+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h4>Projects</h4>
              <small>450+ Completed Projects</small>
            </article>
          </div>
          <p className="techi">
            
            <b> TECH-ATHRONE digital and Power Solution</b> is an Information
            Communication Technology and General System Security/Hi-Technology
            registered company with core area of interest in Certified
            Enterprise Solutions, Training, Recruitment and Empowerment. We deal
            chiefly in installations, Service and Maintenance of all forms of
            sophisticated Security Systems gadgets and software. We are also
            Certified Professionals in Solar Energy, CCTV, IP-CCTV, Automation,
            Embedded system, PBX and many more System Security technologies
            related jobs. As Certified Professionals in the aforementioned
            endeavors with extensive projects done all over the country to back
            up this claim, we believe we are in the best position to pass
            hands-on knowledge to youths in the state as we have done in other
            states. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
