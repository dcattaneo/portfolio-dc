import { useState } from "react";
import Logo from "./../assets/react.svg";
import { FaBars, FaTimes, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { useDisableScroll } from "../hooks/useDisableScroll";

export const Navbar = ({ language, handleLanguage }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  useDisableScroll({ nav });

  return (
    <div className="fixed w-full  flex justify-between items-center px-4  bg-[#0a192f] text-gray-300">
      {/* Logo */}
      <div className="flex gap-2">
        <img src={Logo} alt="Logo" className="w-[25px] md:w-[35px]" />

        {/* handleLanguage Button */}
        <button
          className="cursor-pointer hover:text-slate-100"
          onClick={() => {
            handleLanguage();
          }}
        >
          {language ? "ES" : "EN"}
        </button>
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex  ">
          <li className="text-lg lg:text-xl">
            {" "}
            <Link to="home" smooth={true} duration={500}>
              {language ? "Home" : "Inicio"}
            </Link>
          </li>

          <li className="text-lg lg:text-xl">
            <Link to="skills" smooth={true} duration={500}>
              {language ? "Skills" : "Tecnologías"}
            </Link>
          </li>
          <li className="text-lg lg:text-xl">
            <Link to="work" smooth={true} duration={500}>
              {language ? "Practices" : "Prácticas"}
            </Link>
          </li>
          <li className="text-lg lg:text-xl">
            <Link to="contact" smooth={true} duration={500}>
              {language ? "Contact" : "Contacto"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-30 cursor-pointer hover:text-slate-100"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <div
        className={`${nav ? "right-0" : "-right-full"}
      flex flex-col justify-center items-center w-full bg-[#0a192f] fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] 
        transition-all duration-300  px-4 lg:px-[35px]`}
      >
        <ul className="text-center">
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              {language ? "Home" : "Inicio"}
            </Link>
          </li>

          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              {language ? "Skills" : "Tecnologías"}
            </Link>
          </li>

          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              {language ? "Practices" : "Prácticas"}
            </Link>
          </li>

          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              {language ? "Contact" : "Contacto"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden fixed lg:flex  flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-slate-900 rounded-xl hover:bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/cattaneo-diego"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-xl hover:bg-gray-950">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://github.com/dcattaneo"
            >
              GitHub <FaGithubSquare size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500 rounded-xl hover:bg-teal-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="mailto:diegocattaneo@hotmail.com.ar"
            >
              {language ? "E-mail" : "Correo"} <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-xl hover:bg-rose-950">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="CV_Cattaneo_Diego.pdf"
              download="CV_Cattaneo_Diego.pdf"
            >
              {language ? "Resume" : "Curriculum"}{" "}
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
