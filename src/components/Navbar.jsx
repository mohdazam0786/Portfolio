import logo from "../assets/Azam.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-6 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-3xl">
      <a href="https://www.linkedin.com/in/mohd-azam-siddique-953712222/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/mohdazam0786" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/azam___siddique" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter />
      </a>
      <a href="https://www.instagram.com/azam___siddique/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
    </nav>
  );
};

export default Navbar;
