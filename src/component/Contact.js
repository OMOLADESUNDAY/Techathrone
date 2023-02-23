import React from "react";
import { data } from "../data";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import "./Contact.css";
const Contact = () => {
  const nameRef = useRef();
  const messageRef = useRef();
  const emailRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const name = nameRef.current.value
    const email =emailRef.current.value;
    const message = messageRef.current.value;
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="h5">Get In Touch</h5>
      <h2 className="h2">Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="fade-down">
            <MdOutlineEmail className="contact__option_icon" />
            <h4>Email</h4>
            <h4>techathrone22@gmail.com</h4>
            <a
              href="mailto:techathrone22@gmail.com
"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
          <article className="contact__option" data-aos="fade-down">
            <RiMessengerLine className="contact__option_icon" />
            <h4>Messenger</h4>
            <h4>Techathrone</h4>
            <a href={data.facebookUrl} target="_blank" rel="noreferrer">
              send a message
            </a>
          </article>
          <article className="contact__option" data-aos="fade-down">
            <BsWhatsapp className="contact__option_icon" />
            <h4>WhatsApp</h4>
            <h4>+2347032547873</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+2347032547873"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            data-aos="fade-right"
            type="text"
            ref={nameRef}
            placeholder="Your full name"
            required
          />
          <input type="email" ref={emailRef} placeholder="Your mail" required />
          <textarea
            data-aos="fade-left"
            ref={messageRef}
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
