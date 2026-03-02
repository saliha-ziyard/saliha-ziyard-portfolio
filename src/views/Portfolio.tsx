import { useState, useEffect } from 'react';
import { 
  FaLayerGroup, 
  FaCode,  
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaExternalLinkAlt, 
  FaChevronRight, 
  FaMoon, 
  FaSun 
} from 'react-icons/fa';
import profileImg from '../assets/profileImg.jpeg'; 
import mitomatchHomePg from '../assets/mitomatchHomePg.png';
import gearupHomePg from '../assets/gearupHomePg.png';
import swasthaHomePg from '../assets/swasthaHomePg.png';
import vpaHomePg from '../assets/vpaHomePg.png'
import metaluckHomePg from '../assets/metaluckHomePg.png'
import militHomePg from '../assets/militHomePg.jpg';
import smarteduHomePg from '../assets/smarteduHomePg.png'
import resumeFile from '../assets/resume/Saliha_Ziyard_Resume.pdf'
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

 // Inside the projects array:
const projects = [
    {
      title: "Metaluck",
      description: "Developed a dynamic, user-friendly website promoting sustainability in the metallurgical industry using React, SCSS, and EmailJS.",
      tags: ["React", "TypeScript", "SCSS", "EmailJS"],
      link: "https://metalucks.com/",
      img: metaluckHomePg,
    },
    {
      title: "Swastha",
      description: "Built responsive interfaces with React and Material-UI to manage healthcare operations for 1000+ hospitals under the Sri Lankan Health Ministry.",
      tags: ["React", "Material-UI", "Microservices", "PostgreSQL", "RESTful API"],
      link: "https://swastha.health.gov.lk/session/signin",
      img: swasthaHomePg,
    },
    {
      title: "VPA EMS",
      description: "Enhanced system usability by developing frontend components for the VPA university EMS system using React and Material-UI.",
      tags: ["React", "Material-UI", "Microservices", "PostgreSQL"],
      link: "https://ems.vpa.ac.lk/session/signin",
      img: vpaHomePg,
    },
    {
      title: "SmartEdu LMS",
      description: "Developed SmartEdu LMS with React, featuring dashboards, course management, enrollment, and student progress tracking.",
      tags: ["React", "TypeScript", "Express", "MongoDB", "Docker", "EmailJS"],
      link: "#", // Add link if you have it!
      img: smarteduHomePg,
    },
    {
      title: "Gearup",
      description: "Built a MERN-stack based e-commerce site for futsal court bookings with Stripe payment integration.",
      tags: ["React", "Tailwind", "Redux", "MongoDB", "Stripe", "JWT"],
      link: "https://gearup.lk/",
      img: gearupHomePg,
    },
    {
      title: "mitoMatch",
      description: "Developed a web-based tool for Mitochondrial DNA analysis to determine genetic relatedness among populations.",
      tags: ["React", "Flask", "Machine learning models"],
      link: "#", // Add link if needed!
      img: mitomatchHomePg,
    },
    {
      title: "militTransfer",
      description: "Created a mobile app for secure data transfer between military bases using image steganography.",
      tags: ["Kotlin", "Firebase", "SQLite"],
      link: "#", // Add link if needed!
      img: militHomePg,
    },
  ];
  

  const skills = [
    { name: "Frontend", items: ["React", "JavaScript", "TypeScript", "SCSS", "Tailwind", "Material-UI", "Bootstrap", "Figma"] },
    { name: "Backend", items: ["Flask",  "Firebase", "RESTful APIs", "Microservices"] },
    { name: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
    { name: "Languages & Tools", items: ["Java", "Python", "Dart","Git", "Docker", "Postman", "Redux", "ML Libraries (Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn)"] },
  ];

  const experiences = [
    {
      role: "Trainee Software Engineer",
      company: "Loonslab (Pvt) Ltd",
      period: "Aug 2023 - Aug 2024",
      description: "Built and optimized responsive web applications with React and Material-UI, enhancing usability across healthcare and university management systems used nationwide.",
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <FaLayerGroup className="navbar-logo-icon" />
            <span>SALIHA.DEV</span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {['home', 'projects', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`navbar-menu-item ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="navbar-controls">
            {/* Theme Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="navbar-toggle-theme">
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button className="navbar-toggle-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-mobile">
            {['home', 'projects', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`navbar-mobile-item ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="order-2 md:order-1">
            <h1 className="hero-title">
              Hello, I'm <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Saliha Ziyard</span>
            </h1>
            <h2 className="hero-subtitle">
              Software Engineer
            </h2>
            <p className="hero-text">
              Passionat about crafting intuitive, scalable applications. Specialized in full-stack development with a strong foundation in frontend technologies and backend services.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                View My Work <FaChevronRight size={14} className="btn-icon" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
                Contact Me <FaEnvelope size={14} className="btn-icon" />
              </button>

              <a 
    href={resumeFile} 
    download="Saliha_Ziyard_Resume.pdf" 
    className="btn btn-outline" 
    target="_blank" 
    rel="noreferrer"
  >
    Download Resume
  </a>
            </div>
          </div>
          <div className="order-1 md:order-2 hero-image">
            <div className={`hero-image-frame ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
              <img src={profileImg} alt="Profile" />
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className={`projects-section ${darkMode ? 'dark-mode' : ''}`}>
  <div className="section-inner">
    <h2 className="section-title">Featured Projects</h2>
    <div className={`section-divider ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="project-card"
        >
          <div className="project-image">
          <img 
  src={project.img} 
  alt={project.title}
/>

          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="project-tag"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a 
  href={project.link} 
  target="_blank" 
  rel="noreferrer" 
  className={`project-link ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
>
  View Project <FaExternalLinkAlt size={14} />
</a>

          </div>
        </div>
      ))}
    </div>
  </div>
    </section>


      {/* Skills Section */}
      <section id="skills" className={`skills-section ${darkMode ? 'dark-mode' : ''}`}>
  <div className="section-inner">
    <h2 className="section-title">Skills & Expertise</h2>
    <div className={`section-divider ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>

    <div className="skills-grid">
      {skills.map((category, index) => (
        <div 
          key={index}
          className="skill-category"
        >
          <h3 className="skill-header">
            <FaCode size={18} /> {category.name}
          </h3>
          <div className="skill-items">
            {category.items.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="skill-item"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Experience Section */}
      <section id="experience" className={`experience-section ${darkMode ? 'dark-mode' : ''}`}>
  <div className="section-inner">
    <h2 className="section-title">Work Experience</h2>
    <div className={`section-divider ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>

    <div className="experience-timeline">
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className="experience-card"
        >
          <div className="experience-header">
            <h3 className="experience-role">{exp.role}</h3>
            <span className="experience-period">{exp.period}</span>
          </div>
          <h4 className="experience-company">{exp.company}</h4>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className={`contact-section ${darkMode ? 'dark-mode' : ''}`}>
  <div className="section-inner">
    <h2 className="section-title">Get In Touch</h2>
    <div className={`section-divider ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>

    <div className="contact-container">
            <div className="contact-info">
              <p className="contact-text">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <div className="contact-links">
                <a href="mailto:salihaziyard@gmail.com" className="contact-link">
                  <FaEnvelope /> salihaziyard@gmail.com
                </a>
                <a href="https://github.com/saliha-ziyard" target="_blank" rel="noreferrer" className="contact-link">
                  <FaGithub /> github.com/saliha-ziyard
                </a>
                <a href="https://www.linkedin.com/in/saliha-ziyard-64a366223" target="_blank" rel="noreferrer" className="contact-link">
                  <FaLinkedin /> linkedin.com/in/saliha-ziyard-64a366223
                </a>
              </div>
            </div>
            </div>
  </div>
</section>

      
      {/* Footer */}
      <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
        <div className="section-inner">
          <div className="footer-social">
            <a href="https://github.com/saliha-ziyard" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saliha-ziyard-64a366223" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:salihaziyard@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Saliha Ziyard. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;