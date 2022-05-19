import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { FaGoogleDrive } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#contact">
      <BiMessageRoundedDots className="icon" />
      </a>
      <a href="https://drive.google.com/drive/folders/1--vZ63VuLXmbGR98VL7yTeQYzFwtP9xe?fbclid=IwAR2OuFOVXja1AgKw9-djsTQSAP6TvWmGKYQP6Jdl0DF7JLNtaEM9m0sUkfY">
      <FaGoogleDrive className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
