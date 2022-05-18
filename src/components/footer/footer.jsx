import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/tieubao_1602/">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/giaz.baor/">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://discord.com/channels/@me">
          {" "}
          <BsDiscord className="social" />
        </a>

        <a href="https://drive.google.com/drive/folders/1--vZ63VuLXmbGR98VL7yTeQYzFwtP9xe?fbclid=IwAR2OuFOVXja1AgKw9-djsTQSAP6TvWmGKYQP6Jdl0DF7JLNtaEM9m0sUkfY">
          <FaGoogleDrive className="social" />
        </a>

        <a href="https://github.com/Tieubao1">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
