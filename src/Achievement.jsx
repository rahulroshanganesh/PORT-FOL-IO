import React, { useState, useEffect } from 'react';
import './App.css'
import img1 from './img/IEEE-resize.jpg'
import img2 from './img/bp_IEEE_resize.jpg'
import img3 from './img/exceed.jpg'
import img4 from './img/best-pape-resize.jpg'
import img5 from './img/practi-iee-resize1.jpg'
import img6 from './img/sum-intern_malw.jpeg'
import img7 from './img/Xiaomi ode2Code 3.0 organised by Xiaomi India Quiz round 1.jpg'
import img8 from './img/certificate of participation Xiaomi ode2code 3.0.jpg'

function Achievement()
{
    const [index, setIndex] = useState(0);
    const images = [img1,img2,img4,img5];

    useEffect(() => {
        const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const [index1, setIndex1] = useState(0);
    const images1 = [img7, img8]

    useEffect(() =>{
        const intervalId1 = setInterval(() => {
            setIndex1(prevIndex => (prevIndex + 1) % images1.length);
        },5000);

        return () => clearInterval(intervalId1)
    }, []);

    return(
        <div>
            <h2 className='h2-title'>ACHIEVEMENTS</h2>
            <div className='achieve-div'>
                <div className='achieve-header'>
                    <img src={images[index]} alt="image_iee"/>
                    <h3 className='h3-achieve'>Published a research paper in IEEE MRTM 2023. Won Best paper on the same conference. Visit the related project <a href="https://github.com/RAHUL-ROSHAN-G/ADVANCED-TEXT-EDITOR.git" style={{color:'green'}} target='_blank'>here.</a></h3>
                </div>

                <div className='achieve-header'>
                    <img src={img3} alt="wabtech" />
                    <h3 className='h3-achieve'>Participated in Exceed Wabtech hackathon. Our team qualified for second round. We did Train Route optimisation as problem statement</h3>
                </div>

                <div className='achieve-header'>
                    <img src={img6} alt="internship" style={{marginTop:'5rem'}}/>
                    <h3 className='h3-achieve'>Under the guidance of Professor Shruthi mam, I have successfully completed my internship on the topic of "Malware Detection Using CNN and Built-in Models.</h3>
                </div>

                <div className='achieve-header'  style={{marginTop:'7rem'}}>
                    <img src={images1[index1]} alt="image_mi" />
                    <h3 className='h3-achieve'  style={{paddingBottom:'1.3rem'}}><br />Xiaomi ode2Code 3.0 organised by Xiaomi India Quiz round. Verify <a href="https://unstop.com/certificate-preview/c8940cda-c754-4008-9311-029d1cf2abcd" target="_blank" style={{color:'green'}}>here.</a></h3>
                </div>
            </div>
        </div>
    );
}

export default Achievement