import React, { useState } from "react";
import './App.css';
import img1 from './img/course_certificates/aws-resize.png';
import img2 from './img/course_certificates/intro_cyber.jpg';
import img3 from './img/course_certificates/java_certify.jpg';
import img4 from './img/course_certificates/linux-kernel.jpg';
import img5 from './img/course_certificates/responsive-web-freecodecamp.jpeg';
import img6 from './img/course_certificates/seo-hubspot.png';
import img7 from './img/course_certificates/Introduction_to_Ethical_Hacking[Great Learning].jpeg'

function CourseCertificates() {
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const certificateToShow = 2;

    const certificates = [
        {
            title: "AWS Educate Introduction to Cloud 101, issued by Amazon Web Services Training and Certification. Verify ",
            link: "https://www.credly.com/badges/fade8893-42d1-45ad-b473-2cc235f70c5f/public_url"
        },
        {
            title: "Introduction to Cybersecurity, issued by Cisco. Verify ",
            link: "https://www.credly.com/badges/510bb6d0-73f9-4587-938e-923c99dbd745/public_url"
        },
        {
            title: "Introduction to Programming with Java, issued by Pesu I/O under the guidance of instructor Surya Brother.",
        },
        {
            title: "LFD103: A Beginner's Guide to Linux Kernel Development, issued by The Linux Foundation. Verify ",
            link: "https://www.credly.com/badges/6576e25f-3851-448b-9b9d-dd03f564c0f9/public_url"
        },
        {
            title: "Responsive Web Design, issued by FreeCodeCamp Visit ",
            link: "https://www.linkedin.com/posts/rahul-roshan-g-27000b241_responsivewebdesign-webdevelopment-freecodecamp-activity-7091062915465678848-fFEv?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Search Engine Optimization (SEO) Certified issued by HubSpot. Verify ",
            link: "https://app.hubspot.com/academy/achievements/rl0r82pz/en/1/rahul-roshan-g/seo"
        },
        {
            title: "GREAT LEARNING COURSES",
            link: [
                { text: "Introduction to Ethical Hacking. Verify ", url: "https://olympus1.mygreatlearning.com/course_certificate/JBCUDHDA" },
                { text: "Data Structure in C. Verify ", url: "https://olympus1.mygreatlearning.com/course_certificate/SBJICHTW" },
                { text: "Ecommerce website with HTML & CSS. Verify ", url: "https://olympus1.mygreatlearning.com/course_certificate/BWSPUFBT" },
                { text: "OOPS in Java. verify ", url: "https://olympus1.mygreatlearning.com/course_certificate/BWSPUFBT" }
            ]
        }
    ];

    const handleShowMoreClick = () => {
        setShowAllCertificates(!showAllCertificates);
    };

    return (
        <div>
            <h2 className='h2-title'>ONLINE COURSE CERTIFICATES</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '6rem' }}>
                {certificates.slice(0, showAllCertificates ? certificates.length : certificateToShow).map((certificate, index) => (
                    <div className='achieve-header' key={index} style={{marginTop:'7rem'}}>
                        <img src={index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : index === 3 ? img4 : index === 4 ? img5 : index == 5 ? img6 : img7} alt="certificate" />
                        <h3 className='h3-achieve'>{certificate.title}
                            {certificate.link ? (
                                Array.isArray(certificate.link) ? (
                                    <ul>
                                        {certificate.link.map((link, idx) => (
                                            <li key={idx} className="li-extr-certifi">{link.text}<a href={link.url} target='_blank'> here.</a></li>
                                        ))}
                                    </ul>
                                ) : (
                                    <a href={certificate.link} target='_blank'>here.</a>
                                )
                            ) : null}
                        </h3>
                    </div>
                ))}

                {certificates.length > certificateToShow && (
                    <button onClick={handleShowMoreClick} className="project-button-more1">{showAllCertificates ? 'Show less' : 'Show More'}</button>
                )}
            </div>
        </div>
    );
}

export default CourseCertificates;




{/* <div className='achieve-header' style={{marginBottom:'4rem'}}>
                    <img src={img2} alt="image_iee" />
                    <h3 className='h3-achieve' style={{paddingBottom:'2rem'}}><a href="" style={{color:'green'}}>here</a>.</h3>
                </div>

                <div className='achieve-header' style={{marginTop:'5rem'}}>
                    <img src={img3} alt="image_iee" />
                    <h3 className='h3-achieve'></h3>
                </div>

                <div className='achieve-header'>
                    <img src={img4} alt="image_iee" style={{marginTop:'5rem'}}/>
                    <h3 className='h3-achieve'><a href="" style={{color:'green'}}>here.</a></h3>
                </div>

                <div className='achieve-header' style={{marginTop:'6rem'}}>
                    <img src={img5} alt="image_iee" />
                    <h3 className='h3-achieve'><a href="" style={{color:'green'}}>here</a></h3>
                </div>

                <div className='achieve-header' style={{marginTop:'6.5rem'}}>
                    <img src={img6} alt="image_iee" />
                    <h3 className='h3-achieve'  style={{paddingBottom:'1.3rem'}}><br /><br /> <br /> <a href="" style={{color:'green'}}>here.</a></h3>
                </div> */}

                

                {/* <div className='achieve-header' style={{marginTop:'6.5rem'}}>
                    <h3 className='h3-achieve' style={{borderRadius:'1rem', backgroundColor:'black',color:'white', paddingTop:'1rem'}}>GREAT LEARNING COURSES
                    <ul style={{backgroundColor:'white', color:'black', padding:'1rem', borderRadius:'1rem'}}>
                        <li className="li-extr-certifi">Introduction to Ethical Hacking. Verify <a href="https://olympus1.mygreatlearning.com/course_certificate/JBCUDHDA">here.</a></li>
                        <li className="li-extr-certifi">Data Structure in C. Verify <a href="https://olympus1.mygreatlearning.com/course_certificate/SBJICHTW">here.</a></li>
                        <li className="li-extr-certifi">Ecommerce website with HTML & CSS. Verify <a href="https://olympus1.mygreatlearning.com/course_certificate/BWSPUFBT">here.</a></li>
                        <li className="li-extr-certifi">OOPS in Java. verify <a href="https://olympus1.mygreatlearning.com/course_certificate/BWSPUFBT">here.</a></li>
                    </ul>
                    </h3>
                </div> */}