import "./Contact.css";

import githubIcon from "../assets/socailmedia(github).jpg";
import linkedinIcon from "../assets/socailmedia(linkedin).jpg";
import facebookIcon from "../assets/socailmedia(facebook).jpg";
import instagramIcon from "../assets/socailmedia(instagram).jpg";
import mailIcon from "../assets/socailmedia(mail).jpg";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-text">
          <span className="contact-small-title">GET IN TOUCH</span>

          <h2>Let's Connect.</h2>

          <p>
            Have a project, idea, or opportunity? Feel free to reach out.
            I'm always interested in connecting with new people and learning
            something new.
          </p>
        </div>

        <div className="contact-links">

          <a
            href="mailto:sujalbhanyt@gmail.com"
            className="contact-item email-item"
          >
            <img src={mailIcon} alt="Email" />

            <div>
              <span>Email</span>
              <strong>sujalbhanyt@gmail.com</strong>
            </div>
          </a>

          <div className="social-grid">

            <a
              href="https://github.com/sujal-bhandari5"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img src={githubIcon} alt="GitHub" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sujalbhandari/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.facebook.com/Sujal1010/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img src={facebookIcon} alt="Facebook" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/_sujal.99/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img src={instagramIcon} alt="Instagram" />
              <span>Instagram</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;