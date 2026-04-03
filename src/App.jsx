import React from 'react';
import './index.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="6" height="6" fill="white"/>
              <rect x="10" y="2" width="6" height="6" fill="white"/>
              <rect x="2" y="10" width="6" height="6" fill="white"/>
              <rect x="18" y="2" width="4" height="4" fill="white"/>
              <rect x="2" y="18" width="4" height="4" fill="white"/>
           </svg>
           La Mica
        </div>
        <nav className="header-nav">
          <a href="#about">About Us</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#atelier">Atelier</a>
          <a href="#contacts">Contacts</a>
        </nav>
        <a href="#login" className="header-login">Login</a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-image-wrapper">
            <img src="/hero.png" alt="Interior Design Landing" className="hero-image" />
            <div className="glass-panel-wrapper">
              <div className="hero-indicator">
                <span>01/03</span>
                <div className="indicator-line"></div>
              </div>
              <div className="glass-panel">
                <div className="hero-feature">
                  <p className="text-secondary">We will develop a design project, coordinate the redevelopment, perform turnkey finishing works, complete with materials and furniture.</p>
                </div>
                <div className="hero-feature">
                  <h4>Quality</h4>
                  <p className="text-secondary">Feel the comfort of our furniture for yourself.</p>
                </div>
                <div className="hero-feature">
                  <h4>Beauty</h4>
                  <p className="text-secondary">Unique design and interesting interior solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container hero-inner">
            <div className="hero-top-section">
              <div className="hero-subtitle">Interior</div>
              <h1 className="font-serif hero-title" data-text="DESIGN">DESIGN</h1>
            </div>
            
            <div className="hero-content">
              <div className="hero-desc">
                <p className="text-secondary">
                  We will be able to make your life comfortable and your interior really beautiful.
                </p>
                <a href="#learn-more" className="btn-outline">Learn more</a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section id="about" className="section bg-darker about-section">
          {/* Background SVG Chandelier */}
          <svg className="chandelier-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 V20 M20 20 C20 40, 80 40, 80 20 M20 20 V40 M50 20 V50 M80 20 V40 M10 40 Q20 50 30 40 Z M40 50 Q50 60 60 50 Z M70 40 Q80 50 90 40 Z" />
          </svg>
          
          <div className="watermark-02">02</div>

          <div className="about-layout-grid">
            <div className="about-image-wrapper">
               <img src="/about.png" alt="About Us accent chair" className="about-image" />
            </div>

            <div className="about-text-content">
               <h2 className="font-serif about-title" data-text="ABOUT US">ABOUT US</h2>
               
               <div className="about-columns">
                 <div className="about-col">
                   <p className="text-secondary">
                      Hi! We are a promising company with a lot of experience. We have been engaged in interior design for more than 10 years – we always work for the result so that customers are as satisfied as possible.
                    </p>
                 </div>
                 
                 <div className="about-col">
                    <p className="text-secondary">
                      We lead a small professional team that will be with you from the idea to the final implementation of the space. Just share your dreams with us – LaMica studio will do the rest. Tell us how you see your dream space – we will offer several options for concepts and make an audit of the layout. The designer has knowledge of materials and a professional view of space and color simply by virtue of work experience.
                    </p>
                    <a href="#learn-more" className="about-link">Learn more...</a>
                    
                    <div className="about-inset-image">
                       <img src="/port1.png" alt="Interior Details" />
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section portfolio-section">
          <div className="portfolio-layout">
            
            <div className="portfolio-track">
              <div className="portfolio-item">
                <div className="portfolio-item-image-wrapper">
                  <img src="/hero.png" alt="Maximum bedroom details" />
                </div>
                <div className="portfolio-item-info">
                  <span className="portfolio-item-title">Maximum</span>
                  <span className="portfolio-item-subtitle text-secondary">Petersburg, 285 m2</span>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-item-image-wrapper">
                  <img src="/port1.png" alt="House in Repino interior" />
                </div>
                <div className="portfolio-item-info">
                  <span className="portfolio-item-title">House in Repino</span>
                  <span className="portfolio-item-subtitle text-secondary">Repino, 300 m2</span>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-item-image-wrapper">
                  <img src="/port2.png" alt="House in Zelenogorsk interior" />
                </div>
                <div className="portfolio-item-info">
                  <span className="portfolio-item-title">House in Zelenogorsk</span>
                  <span className="portfolio-item-subtitle text-secondary">Saint Petersburg, Zelenogorsk, 430 m2</span>
                </div>
              </div>
            </div>

            <div className="portfolio-header">
              <h2 className="font-serif portfolio-title">
                PORT<br/>FOLIO
              </h2>
              <p>
                Look at our work. We try to maintain a balance of aesthetics and convenience in our layouts. Lightness and softness accompany each of our projects.
              </p>
              <button className="btn-solid">Learn more</button>
            </div>
            
          </div>
        </section>

        {/* ATELIER */}
        <section id="atelier" className="section bg-darker atelier-section">
          <div className="atelier-layout-grid">
            <div className="atelier-text-content">
               <h2 className="font-serif atelier-title" data-text="ATELIER">ATELIER</h2>
               <div className="atelier-columns">
                 <div className="atelier-col">
                   <p className="text-secondary">
                      Our craftsmanship is defined by attention to detail and an uncompromising pursuit of perfection. We source the finest materials from around the world to ensure durability and aesthetic brilliance in every project.
                    </p>
                 </div>
                 <div className="atelier-col">
                    <p className="text-secondary">
                      Every piece of furniture and decor is carefully selected or custom-made to fit the exact essence of your space. The atelier is where ideas become tangible, where raw sketches transform into timeless architectural beauty.
                    </p>
                 </div>
               </div>
            </div>
            
            <div className="atelier-image-wrapper">
               <img src="/atelier.png" alt="Atelier workspace" className="atelier-image" />
            </div>
            <div className="watermark-03">03</div>
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="section contacts-section">
          <div className="contacts-bg-wrapper">
            <img src="/contact.png" alt="Contact background" className="contacts-bg" />
            <div className="contacts-overlay"></div>
          </div>
          
          <div className="container contacts-content">
            <h2 className="font-serif contacts-title" data-text="LET'S TALK">LET'S TALK</h2>
            
            <div className="contacts-grid">
              <div className="contacts-info">
                <h3 className="font-serif">Get in touch</h3>
                <p className="text-secondary">We would love to discuss your next big project and turn your dreams into reality. Drop us a message.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href="mailto:hello@lamica.com" className="contact-value">hello@lamica.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+1234567890" className="contact-value">+1 (234) 567-890</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">123 Design Avenue,<br/>New York, NY 10001</span>
                  </div>
                </div>
              </div>

              <div className="contacts-form-wrapper glass-panel">
                <form className="contacts-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <textarea rows="4" placeholder="Tell us about your project" required className="form-input"></textarea>
                  </div>
                  <button type="submit" className="btn-solid form-submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer bg-darker">
        <div className="container footer-content">
          <div className="footer-logo">
            <span className="font-serif">La Mica</span>
          </div>
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#atelier">Atelier</a>
          </div>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Twitter</a>
          </div>
          <p className="footer-copyright text-secondary">
            &copy; {new Date().getFullYear()} La Mica Design. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
