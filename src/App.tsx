import { useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import './portfolio.css';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');

      if (href && href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });

          const mobileMenu = document.querySelector('.mobile-menu');
          const menuToggle = document.querySelector('.menu-toggle');
          if (mobileMenu && menuToggle) {
            mobileMenu.classList.remove('active');
          }
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    const handleMenuToggle = () => {
      mobileMenu?.classList.toggle('active');
    };

    menuToggle?.addEventListener('click', handleMenuToggle);

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      menuToggle?.removeEventListener('click', handleMenuToggle);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">CB</div>
            <button className="menu-toggle">
              <Menu size={24} />
            </button>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mobile-menu">
        <button className="close-menu">
          <X size={24} />
        </button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="greeting">Hello, I'm</p>
              <h1 className="name">Chathumina Bandara</h1>
              <p className="title">Full Stack Developer</p>
              <p className="description">
                Passionate about creating elegant solutions to complex problems.
                Specializing in web development and modern technologies.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Get in Touch</a>
                <a href="#projects" className="btn btn-secondary">View Projects</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="initials">CB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated Full Stack Developer with a passion for building
                innovative web applications. My journey in software development has
                equipped me with a diverse skill set and a problem-solving mindset.
              </p>
              <p>
                I thrive on challenges and am constantly learning new technologies
                to stay at the forefront of the industry. My goal is to create
                impactful digital experiences that make a difference.
              </p>
              <div className="contact-info">
                <div className="info-item">
                  <Mail size={20} />
                  <span>chathuminauni2003@gmail.com</span>
                </div>
                <div className="info-item">
                  <Phone size={20} />
                  <span>0701688606</span>
                </div>
                <div className="info-item">
                  <MapPin size={20} />
                  <span>Elivitiya, Kumarakattuwa, Sri Lanka</span>
                </div>
                <div className="info-item">
                  <Github size={20} />
                  <a href="https://github.com/TMCB-2025" target="_blank" rel="noopener noreferrer">
                    github.com/TMCB-2025
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-content">
            <div className="education-item">
              <div className="edu-year">2021 - Present</div>
              <div className="edu-details">
                <h3>Bachelor's Degree in Computer Science</h3>
                <p className="edu-institution">University of Sri Lanka</p>
                <p className="edu-description">
                  Pursuing comprehensive education in software engineering,
                  algorithms, data structures, and modern web technologies.
                </p>
              </div>
            </div>
            <div className="education-item">
              <div className="edu-year">2018 - 2020</div>
              <div className="edu-details">
                <h3>Advanced Level Education</h3>
                <p className="edu-institution">Secondary Education</p>
                <p className="edu-description">
                  Focused on Mathematics, Science, and Technology streams with
                  excellent academic performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>

          <div className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">HTML & CSS</span>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">React</span>
                  <span className="skill-percentage">88%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Node.js</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Python</span>
                  <span className="skill-percentage">82%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Database Management</span>
                  <span className="skill-percentage">87%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Sinhala</span>
                  <span className="skill-percentage">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">English</span>
                  <span className="skill-percentage">92%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 1</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>
                  A full-featured online shopping platform with payment integration,
                  user authentication, and product management.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 2</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>
                  A collaborative task management application with real-time updates,
                  team collaboration features, and progress tracking.
                </p>
                <div className="project-tags">
                  <span>TypeScript</span>
                  <span>Express</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 3</div>
              </div>
              <div className="project-content">
                <h3>Weather Dashboard</h3>
                <p>
                  A responsive weather application that provides real-time weather
                  information and forecasts for any location worldwide.
                </p>
                <div className="project-tags">
                  <span>JavaScript</span>
                  <span>API</span>
                  <span>CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Chathumina Bandara. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/TMCB-2025" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
