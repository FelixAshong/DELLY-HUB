import React from "react";
import { AiFillFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
  <div className="footer-container">
    <p>&copy; {new Date().getFullYear()} Delly HubStore </p> 
    <p>All rights reserved!</p>
    <p className="icons">
      <a href="" target="_blank" className="social-media">  
      <AiOutlineLinkedin />
      </a>
      <a href="" target="_blank" className="social-media">
      <AiOutlineTwitter />
      </a>
      <a href="" target="_blank" className="social-media">
      <AiOutlineGithub />
      </a>
    </p>
    <p>created by <a href="" target="_blank">PHLEODELLY</a></p>
    </div>
  );
};

export default Footer;
