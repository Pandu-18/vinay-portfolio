import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        <h3>Contact</h3>

        <div className="contact-flex">

          {/* Email + Education */}

          <div className="contact-box">
            <h4>Email</h4>

            <p>
              <a
                href="mailto:vinayacharyakandala@gmail.com"
                data-cursor="disable"
              >
                vinayacharyakandala@gmail.com
              </a>
            </p>

            <h4>Education</h4>

            <p>
              B.Tech  ECE <br />
              CMR College of Engineering & Technology
            </p>
          </div>

          {/* Social Links */}

          <div className="contact-box">

            <h4>Social</h4>

            <a
              href="https://github.com/Pandu-18"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="https://linkedin.com/in/kandalavinayacharya"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

          </div>

          {/* Footer credit */}

          <div className="contact-box">

            <h2>
              Designed and Developed <br /> by <span>Vinay Acharya</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;