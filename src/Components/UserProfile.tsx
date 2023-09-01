import React, { useRef, useEffect, useState } from "react";
import userphoto from "../Images/userphoto.png";
import "../Styles/UserProfile.css";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Typed from "typed.js";
import Modal from "react-modal";


const UserProfile = () => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Senior Developer", "Software Intern"],
      typeSpeed: 100,//speed of typing
      backSpeed: 100,
      backDelay: 100, // Delay after typing "developer"
      loop: true,// continuesly running
    };


    if (spanRef.current) {
      const typedInstance = new Typed(spanRef.current, options);
      return () => {
        typedInstance.destroy();
      };
    }
  }, []);

  return (
    <>
      <Home />
      <section className="user-profile">
        <div className="home-content">
          <div className="details">
            <h3>MY PROFILE</h3>
            <h1>User Name</h1>
            <h3>
              <span className="span" ref={spanRef}></span>
            </h3>
            <button className="btn" onClick={openPopup}>
              About Me!
            </button>
          </div>
          <div>
            <img src={userphoto} className="user" alt="user" />
          </div>
        </div>
      </section>

      {/* Pop-up using react-modal */}
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        contentLabel="About Me Pop-up"
      >
        <h2>About Me</h2>
        <p>This is some information about me...</p>
        <button className="close-btn" onClick={closePopup}>Close</button>
      </Modal>
    </>
  );
};


export default UserProfile;