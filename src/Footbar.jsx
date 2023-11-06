import React from "react";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiPhone } from "react-icons/bi";
import './App.css'

function Footbar()
{
    return(
        <div style={{color:'white'}}>
            <div style={{backgroundColor:"white", width:'99vw', height:'0.01vh', }}>
                    <p></p>
                </div>
            <div className="foot-connect-social">
                {/* <p>Get connected with me on social networks: </p> */}
                <div>
                    <a href="https://www.linkedin.com/in/rahul-roshan-g-27000b241/" target="_blank"><BiLogoLinkedin className='icon' style={{fontSize:'1.3rem'}}/></a>
                    <a href="mailto:rahulroshnganesh2002@gmail.com" target='_blank'><BiLogoGmail className='icon' style={{fontSize:'1.3rem'}}/></a>
                    <a href="https://github.com/RAHUL-ROSHAN-G" target='_blank'><BiLogoGithub className='icon' style={{fontSize:'1.3rem'}}/></a>
                </div>
            </div>
            <a href="https://www.pexels.com/photo/city-lit-up-at-night-316902/" className="a-credits" target='_blank'>Credits - Life of Pix</a>
                <div style={{backgroundColor:"white", width:'99vw', height:'0.01vh', }}>
                    <p></p>
                </div>
                
            <div className="footer-final">
                <p> &copy; OCT-2023 RAHUL ROSHAN G</p>
            </div>
        </div>
    );
}

export default Footbar;