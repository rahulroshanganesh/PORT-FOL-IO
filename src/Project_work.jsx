import React, { useState } from 'react'

function Project_work()
{
    const [showAllProjects, setShowAllProjects] = useState(false);
    
    const projectsToShow = 2; // Number of projects to show initially

    const projects = [
        {
          title: "PyEdit Pro - Advanced Text editor for Visually-Impaired and Students",
          link: "https://github.com/smsraj2001/PYEDIT-PRO-THE-ULTIMATE-ADVANCED-TEXT-EDITOR.git"
        },
        {
          title: "Capstone Project - Feelspeak generating emotional speech with Deep learning.",
          description: "still Working on our project..."
        },
        {
          title: "MERN Stack Project",
          links: [
            { text: "Insta-Clone", url: "https://github.com/RAHUL-ROSHAN-G/-mern-instagram-clone.git" },
            { text: "To Do List", url: "https://github.com/RAHUL-ROSHAN-G/todoList-MERN.git" },
            { text: "Shoe-Shop", url: "https://github.com/RAHUL-ROSHAN-G/SHOE-SHOP-ECOMMERCE-WEB-APP.git" },
            { text: "Chat App with SocketIO and MERN", url: "https://github.com/RAHUL-ROSHAN-G/Mern-SocketIo-ChatApp.git" }
          ]
        },
        {
          title: "Online food delivery app using Java and Swing",
          link: "https://github.com/RAHUL-ROSHAN-G/ONLINE-FOOD-DELIVERY-SYSTEM-JAVA.git"
        },
        {
          title: "Machine Learning projects",
          links: [
            { text: "Customer churn", url: "https://github.com/RAHUL-ROSHAN-G/CUSTOMER_CHURN_PREDICTION.git" },
            { text: "Dog/Cat Classify", url: "https://github.com/RAHUL-ROSHAN-G/CAT-DOG-IMAGE-CLASSIFICATION.git" }
          ]
        },
        {
          title: "Mini search engine (recommendation system).",
          link: "https://github.com/RAHUL-ROSHAN-G/RECOMMENDER-SYSTEM.git"
        },
        {
          title: "Chat room using socket programming",
          links: [
            { text: "Bluetooth-chat-app", url: "https://github.com/RAHUL-ROSHAN-G/Bluetooth_single_chat_room.git" },
            { text: "Advanced-Chat-app", url: "https://github.com/RAHUL-ROSHAN-G/advance-chat-server.git" }
          ]
        },
        {
          title: "Python Snake game",
          link: "https://github.com/RAHUL-ROSHAN-G/python_snake_game.git"
        },
        {
          title: "Hill cipher cryptography python code",
          link: "https://github.com/RAHUL-ROSHAN-G/hill_cipher_python.git"
        },
        {
          title: "Clone - Kafka",
          link: "https://github.com/RAHUL-ROSHAN-G/Clone-kafka_BD1-320-340-342-345.git"
        }
      ];

    const projects1 = [
        {
            title:"Youtube video downloader using Flask",
            link:"https://github.com/RAHUL-ROSHAN-G/youtube-video-downloader-flask.git"
        },
        {
            title:"Quiz app using HTML, CSS and JS",
            link:"https://github.com/RAHUL-ROSHAN-G/QUIX.git"
        },
        {
            title:"Diary app using Express and MongoDB",
            link:"https://github.com/RAHUL-ROSHAN-G/express-diary.git"
        },
        {
            title:"Image Locator using python",
            link:"https://github.com/RAHUL-ROSHAN-G/Locate-the-place-using-image.git"
        }
    ];
    const handleShowMoreClick = () => {
        setShowAllProjects(!showAllProjects);
    };
    
    
    return(
        <div>
            <h1 className='h2-title'>PROJECT WORKS</h1>
            <h2 style={{color:'white',marginTop:'1rem'}}>COLLEGE PROJECTS</h2>
            <div className={`college-projects ${showAllProjects ? 'expanded' : ''}`}>
            
                {projects.slice(0, showAllProjects ? projects.length : projectsToShow).map((project, index) => (
                    <div className="project1" key={index}>
                        <h2>{project.title}</h2>
                            {project.links ? (
                                <ul>
                                {project.links.map((link, idx) => (
                                    <li key={idx}><a href={link.url} target='_blank'>{link.text}</a></li>
                                ))}
                                </ul>
                            ) : (
                                project.link ? <a href={project.link} target='_blank'>Link here</a> : <p>{project.description}</p>
                            )}
                    </div>
                ))}
                        
                {projects.length > projectsToShow && (
                        <button onClick={handleShowMoreClick} className='project-button-more'>{ showAllProjects ? 'Show less' : 'Show More'}</button>
                    )}

            </div>

            <h2 style={{color:'white', marginTop:'2rem'}}>EXTRACURRICULAR PROJECTS</h2>
            <div className="extracurricular-projects">
                {projects1.map((project1, index) => (
                    <div className="project1" key={index}>
                        <h2>{project1.title}</h2>
                        <a href={project1.link} target='_blank'>Link here</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project_work