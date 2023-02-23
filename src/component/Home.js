import React, { useEffect, useRef } from 'react'
import './home.css'
import homeImage from '../image/3d-cartoon-business-character-removebg-preview.png'
const Home = () => {
  const changeRef = useRef()
  const techRef = useRef()
  useEffect(() => {
     if (window.screen.width > 1024) {
        const interval = setTimeout(() => {
          techRef.current.style.display = "block";
          console.log("block");
          if (true) {
            setTimeout(() => {
              techRef.current.style.display = "none";
              console.log("-50");
            }, 6000);
          }
        }, 2000);
        return () => {
          clearTimeout(interval);
        };
     }
    
  })
  useEffect(() => {
    
      const interval = setTimeout(() => {
        changeRef.current.style.transform = 'translateX(50px)';
        console.log("50");
        if (true) {
          setTimeout(() => {
            changeRef.current.style.transform = "rotate(20deg)" ;
          
          },1000);  
        }
        
      }, 1000)
    
    return () => {
      clearTimeout(interval)
      // clearInterval(interval2)
    }
  })
  
    return (
      <section className="homeContainer " id="home">
        <div ref={techRef} className="techathroneWelcome">
          <p className="techpara">Welcome To Techathrone</p>
        </div>
        <div className="container wrapper">
          <aside className="homeleft">
            <div className="cover">
              <h1 className="hometext">
                <span className="techathroneText">
                  <span className='techtr'>Tech</span>athrone
                </span>{" "}
                solar and cctv solution{" "}
              </h1>
            </div>
            <div className="btnContainer">
              <a href="#contact" className="btn ">Get Started</a>
              <a href='#about' className="btn ">Learn More</a>
            </div>
          </aside>
          <article ref={changeRef} className="homeRight">
            <img className="dimg" src={homeImage} alt="solar power" />
          </article>
        </div>
      </section>
    );}

export default Home