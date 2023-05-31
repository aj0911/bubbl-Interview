import insta from './Images/Instagram-mobile-removebg-preview.png'
import bubble from './Images/bubble-removebg-preview.png'
import { BsArrowRight, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsMenuApp, BsMenuButton, BsTwitter, BsWhatsapp } from 'react-icons/bs'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRef } from 'react'

function App() {
  const ul = useRef();
  const toggleActive = ()=>{
    ul.current.classList.toggle('active');
  }
  const closeMenu = ()=>{
    ul.current.classList.toggle('active');
  }
  return (
    <div className="app">
      <header>
        <div className="nav">
          <div className="logo">
            <img src={bubble} alt="Bubbl" />
            <h4>Bubbl</h4>
          </div>
          <div onClick={toggleActive} className="menu">
            <AiOutlineMenu/>
          </div>
          <ul ref={ul}>
            <li onClick={closeMenu}>Home</li>
            <li onClick={closeMenu}>Team</li>
            <li onClick={closeMenu}>Blog</li>
            <li onClick={closeMenu}>Support</li>
            <li onClick={closeMenu}>About</li>
          </ul>
        </div>
        <div className="hero">
          <div className="scroll">
            <h3>Scroll Down <BsArrowRight/></h3>
          </div>
          <div className="left">
            <h2>Bubbl</h2>
            <h4>Bubbl Social is a social media start-up, looking to change the social media landscape across colleges, by providing a platform for students to interact and connect with each other.</h4>
            <button>Learn More</button>
          </div>
          <div className="right">
            <img src={insta} alt="" />
          </div>
          <div className="links">
            <ul>
              <li><a href="https://www.instagram.com/bubblsocial/?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram/></a></li>
              <li><a href="https://www.linkedin.com/company/bubbl-socialmedia/"><BsLinkedin/></a></li>
              <li><a href="#"><BsFacebook/></a></li>
              <li><a href="#"><BsGithub/></a></li>
              <li><a href="#"><BsWhatsapp/></a></li>
              <li><a href="#"><BsTwitter/></a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
