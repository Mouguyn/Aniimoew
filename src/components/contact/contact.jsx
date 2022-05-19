import "./contact.css";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/giaz.baor/"
          className="contact youtube"
          target={"blank"}
        >
          <FaFacebook className="icon" />
          <h2>
            Facebook <span>Don't tell me for precius</span>
          </h2>
        </a>

        <a
          href="https://zalo.me/0379323097"
          className="contact whatsapp"
          target={"blank"}
        >
          <SiZalo className="icon" />
          <h2>
           Phone <span>0379323097</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/tieubao_1602/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>Don't tell me for precius</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
