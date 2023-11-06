import './App.css'
import React from 'react'
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import image from './img/1-removebg-preview.png'
import resume from './img/resume.pdf'

function Header() {
    return (
      <div className='header-div'>
        <p className='p-header'>Hello, I am</p>
        <h1 className='Name-header'>RAHUL ROSHAN G</h1>
        <h3 className="description">Web Developer & Programmer<br /></h3>
        <div className='a-header'>
            <div style={{width:'50px', height:'50px'}}>
                <a href="https://www.linkedin.com/in/rahul-roshan-g-27000b241/" target="_blank"><BiLogoLinkedin className='icon'/></a>
            </div>
            <div style={{width:'50px', height:'50px'}}>
                <a href="mailto:rahulroshnganesh2002@gmail.com" target='_blank'><BiLogoGmail className='icon'/></a>
            </div>
            <div style={{width:'50px', height:'50px'}}>
                <a href="https://github.com/RAHUL-ROSHAN-G" target='_blank'><BiLogoGithub className='icon'/></a>
            </div>
        </div>
        <a href={resume} className='header-a-button'><button className='button-header'>DOWNLOAD CV/RESUME</button></a>
        <div className='photo-header'>
            <img src={image} alt="" />
        </div>
      </div>
    );
  }

export default Header
