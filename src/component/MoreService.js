import React from 'react'
import { BiCloud, BiHappy } from 'react-icons/bi';
import './moreservice.css';
import moreImg from '../image/Kerfin7_NEA_2317.jpg';
const MoreService = () => {
  return (
    <section className="moreServiceContainer container" id="marketplace">
      <article className="leftmoreContainer">
        <div className="wlc">
          {" "}
          <hr className="horiLine" />
          <h4 className="morewelcome">Welcome To Our Company</h4>
        </div>
        <p className="moredetail">
          {" "}
          <b> OUR VISION</b>: To deliver innovative technology and services that
          make business better through powerful combination of customer
          knowledge/needs, inspired thinking and attentive associates.
          <br />
          <br/>
          <b>Our Mission</b>: Utilize Moor’s Law to bring smart connected devices
          to every person on earth, to be the catalyst in communities of
          customers, contributors and partners creating better technology in the
          open-source way.
        </p>
        <div className="downmore">
          <div className="downmoreleft">
            <BiHappy className="moreicon" />
            <div className="happcon">
              <h3>1459+</h3>
              <p>Happy Client</p>
            </div>
          </div>
          <div className="downmoreleft">
            <BiCloud className="moreicon" />
            <div className="happcon">
              <h3>1447+</h3>
              <p>Success Story</p>
            </div>
          </div>
        </div>
        <a href='#about' className="btn morelearn">Learn More</a>
      </article>
      <article className="rightmoreContainer">
        <img className="moreimg" src={moreImg} alt="solar power" />
      </article>
    </section>
  );
}

export default MoreService