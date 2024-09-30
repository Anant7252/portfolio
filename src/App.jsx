import React, { useState, useEffect } from 'react';
import './App.css';
import image1 from './assets/image1.jpg';
import emailjs from 'emailjs-com';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaCode } from 'react-icons/fa';  
import { SiTensorflow, SiNumpy, SiPandas } from 'react-icons/si'; 

function App() {
  const [color, setColor] = useState('rgb(255, 145, 77)');
  const [currentTab, setCurrentTab] = useState('home');
  const [fadeKey, setFadeKey] = useState(0);
  const [professionText, setProfessionText] = useState('');
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [display,setdisplay]=useState("500px")
  
  useEffect(() => {
    setFadeKey(fadeKey + 1);
  }, [currentTab]);

  useEffect(() => {
    const professions = ['Frontend Developer', 'Machine Learning Engineer', 'Web Developer'];
    
    const typingSpeed = isDeleting ? 100 : 150;
    const delayAfterComplete = 1500;

    const handleTyping = () => {
      const currentProfession = professions[professionIndex];

      if (!isDeleting && charIndex < currentProfession.length) {
        setProfessionText(currentProfession.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setProfessionText(currentProfession.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentProfession.length) {
        setTimeout(() => setIsDeleting(true), delayAfterComplete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setProfessionIndex((prev) => (prev + 1) % professions.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, professionIndex]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a35k4do', 'template_ruxmzf9', e.target, 'Pm0TSDs3ZThjhJ51e')
      .then((result) => {
        console.log(result.text);
        swal("Success!", "Message sent successfully!", "success");
      }, (error) => {
        console.log(error.text);
        swal("Error!", "Failed to send message, please try again.", "error");
      });

    e.target.reset();
  };
  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <div className="home fade-in" key={fadeKey}>
            <div className="info">
              <h1 className='heading1' style={{textShadow:color}}>Hello, I'm Anant Tripathi</h1>
              <h3>Computer Science Student (CSE-AIML)</h3>
              <p>
                A Fourth-Year undergraduate Computer Science (CSE-AIML) Student at Oriental Institute Of Science and Technology,
                Bhopal, Madhya Pradesh.
              </p>
              <h2 className="profession" id="profession">{professionText}</h2>
              <a href="https://drive.google.com/file/d/1iCqS8tNe9FeIYx7SyRQgnX-0mUFLosJ6/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <div className="image">
              <img src={image1} alt="Anant Tripathi" />
              
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="skills fade-in" key={fadeKey}>
            <h1 className='heading'>Skills</h1>
            <div className="skills1">
              <div className="skill python" >
                <FaPython size={40} color="white" />
                <span>Python</span>
              </div>
              <div className="skill cpp">
                <FaCode size={40} color="white" />
                <span>C++</span>
              </div>
              <div className="skill react">
                <FaReact size={40} color="white" />
                <span>React</span>
              </div>
              <div className="skill html">
                <FaHtml5 size={40} color="white" />
                <span>HTML</span>
              </div>
              <div className="skill css">
                <FaCss3Alt size={40} color="white" />
                <span>CSS</span>
              </div>
              <div className="skill js">
                <FaJsSquare size={40} color="white" />
                <span>JavaScript</span>
              </div>
              <div className="skill tensorflow">
                <SiTensorflow size={40} color="white" />
                <span>TensorFlow</span>
              </div>
              <div className="skill numpy">
                <SiNumpy size={40} color="white" />
                <span>NumPy</span>
              </div>
              <div className="skill pandas">
                <SiPandas size={40} color="white" />
                <span>Pandas</span>
              </div>
              <div className="skill machine">
                <FaCode size={40} color="white" />
                <span>Machine Learning</span>
              </div>
            </div>
            {/* <div className="skills1">
              <div className="skills2 skill">
                <h2>Programming Languages:</h2>
                <label htmlFor="C++">C++</label>
                <progress id="C++" value="75" max="100">100%</progress>
                <label htmlFor="Python">Python</label>
                <progress id="Python" value="85" max="100">100%</progress>
              </div>
              <div className="skills2 skill">
                  <h2>Technologies:</h2>
                  <label htmlFor="Frontend">Frontend Developement</label>
                  <progress id="Frontend" value="75" max="100">100%</progress>
                  <label htmlFor="Machine Learning">Machine Learning</label>
                  <progress id="Machine Learning" value="75" max="100">100%</progress>
                  <label htmlFor="Computer Vision">Computer Vision</label>
                  <progress id="Computer Vision" value="55" max="100">100%</progress>
              </div>
              <div className="skills3 skill">
                <h2>Tools</h2>
                <label htmlFor="Pandas">Pandas</label>
                <progress id="Pandas" value="80" max="100">100%</progress>

                <label htmlFor="NumPy">NumPy</label>
                <progress id="NumPy" value="85" max="100">100%</progress>

                <label htmlFor="Scikit-learn">Scikit-learn</label>
                <progress id="Scikit-learn" value="75" max="100">100%</progress>

                <label htmlFor="OpenCV">OpenCV</label>
                <progress id="OpenCV" value="70" max="100">100%</progress>

                <label htmlFor="TensorFlow">TensorFlow</label>
                <progress id="TensorFlow" value="65" max="100">100%</progress>
              </div>
            </div> */}
          </div>
        );
      case 'education':
        return (
          <div className="education fade-in" key={fadeKey}>
            <h1 className='heading'>Education</h1>
            <div className="education1">
              <div className="education2 edu">
                <h2>Intermediate (10th Class)</h2>
                <h3>School Name: Vidya Dham Hr. Sec. School, Chitrakoot, Madhya Pradesh </h3>
                <h3>Date: May 2018 - May 2019</h3>
                <h3>Percentage :95.4</h3>
              </div>
              <div className="education2 edu1">
                <h2>Higher Secondary (12th Class)</h2>
                <h3>School Name: Vidya Dham Hr. Sec. School, Chitrakoot, Madhya Pradesh </h3>
                <h3>Date: May 2020 - May 2021</h3>
                <h3>Percentage :95.8</h3>
              </div>
              <div className="education3 edu">
                <h2>Graduation</h2>
                <h3>Graduation:Bachelor of Technology (B.Tech), CSE - AI & MLL</h3>
                <h3>Date: Sept 2021 - Ongoing</h3>
                <h3>CGPA: 7.6 / 10</h3>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="projects fade-in" key={fadeKey}>
            <h1 className='heading'>Projects</h1>
            <div className="projects1">
              <a href="" className="projects2">
                <img  className="a1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JX8oEXC-CL7zcUz6coxIqq-0FRiQXVDNow&s" alt="" />
                <div class="b1">
                  <h1 class="title">Medical Plant Identification</h1>
                  <p>Developed a machine learning model to identify medicinal plants based on leaf images using CNNs, achieving 77% accuracy on the test dataset for accurate classification and herbal research support.</p>
                  <p>For Source Code, click on the image to visit my GitHub repository.</p>
                </div>
              </a>
              <a href="" className="projects2">
                <img  className="a1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JX8oEXC-CL7zcUz6coxIqq-0FRiQXVDNow&s" alt="" />
                <div class="b1">
                  <h1 class="title">Medical Plant Identification</h1>
                  <p>Developed a machine learning model to identify medicinal plants based on leaf images using CNNs, achieving 77% accuracy on the test dataset for accurate classification and herbal research support.</p>
                  <p>For Source Code, click on the image to visit my GitHub repository.</p>
                </div>
              </a>
              <a href="" className="projects2">
                <img  className="a1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JX8oEXC-CL7zcUz6coxIqq-0FRiQXVDNow&s" alt="" />
                <div class="b1">
                  <h1 class="title">Medical Plant Identification</h1>
                  <p>Developed a machine learning model to identify medicinal plants based on leaf images using CNNs, achieving 77% accuracy on the test dataset for accurate classification and herbal research support.</p>
                  <p>For Source Code, click on the image to visit my GitHub repository.</p>
                </div>
              </a>
              <a href="" className="projects2">
                <img  className="a1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JX8oEXC-CL7zcUz6coxIqq-0FRiQXVDNow&s" alt="" />
                <div class="b1">
                  <h1 class="title">Medical Plant Identification</h1>
                  <p>Developed a machine learning model to identify medicinal plants based on leaf images using CNNs, achieving 77% accuracy on the test dataset for accurate classification and herbal research support.</p>
                  <p>For Source Code, click on the image to visit my GitHub repository.</p>
                </div>
              </a>
              <a href="" className="projects2">
                <img  className="a1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JX8oEXC-CL7zcUz6coxIqq-0FRiQXVDNow&s" alt="" />
                <div class="b1">
                  <h1 class="title">Medical Plant Identification</h1>
                  <p>Developed a machine learning model to identify medicinal plants based on leaf images using CNNs, achieving 77% accuracy on the test dataset for accurate classification and herbal research support.</p>
                  <p>For Source Code, click on the image to visit my GitHub repository.</p>
                </div>
              </a>
              
          
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="contact fade-in" key={fadeKey}>
          <h1 className='heading'>Contact</h1>
          <div className="contact1">
            <div className="contact2">
              <form onSubmit={sendEmail}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit" className='send'>Send</button>
              </form>
            </div>
            <div className="contact3">
              <a href="mailto:ananttripathi7252@gmail.com" target="_blank" className="social-icon mail" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://www.linkedin.com/in/anant-tripathi-52628b223/" target="_blank linkdin" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://wa.me/+918349774705" target="_blank" className="social-icon whatsapp" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="tel:+8349774705" className="social-icon phone" aria-label="Mobile">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>
        </div>

        );
      default:
        return null;
    }
  };
  useEffect(()=>{
    const navbar=document.getElementById("navbar");
    const b1=document.getElementById("menu");
    b1.addEventListener('click',function(){
      if (navbar.style.left==="100%"){
        navbar.style.left="65%";
      }
      else{
        navbar.style.left="100%";
      }
    })
    if(window.innerWidth<768){
      document.addEventListener('click',function(e){
        if(!navbar.contains(e.target) && !b1.contains(e.target)){
          navbar.style.left="100%";
        } 
      })
    }
  })
  return (
    <div className="main">
      
      <div className="main1" style={{ color: color }}>
        {renderContent()}
      </div>
      <div className="setting">
        <div className="color" id="red" onClick={() => setColor('red')}></div>
        <div className="color" id="yellow" onClick={() => setColor('yellow')}></div>
        <div className="color" id="blue" onClick={() => setColor('violet')}></div>
        <div className="color" id="pink" onClick={() => setColor('pink')}></div>
        <div className="color" id="white" onClick={() => setColor('white')}></div>
        <div className="color" id="orange" onClick={() => setColor('rgb(255, 145, 77)')}></div>
      </div>
      <div className="navbar " id="navbar" key={fadeKey} >
        <button className="nav1" onClick={() => setCurrentTab('home')}>Home</button>
        <button className="nav1" onClick={() => setCurrentTab('skills')}>Skills</button>
        <button className="nav1" onClick={() => setCurrentTab('education')}>Education</button>
        <button className="nav1" onClick={() => setCurrentTab('projects')}>Projects</button>
        <button className="nav1" onClick={() => setCurrentTab('contact')}>Contact</button>
      </div>
      <button className="menu"  id="menu" >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </button>
    </div>
  );
}

export default App;
