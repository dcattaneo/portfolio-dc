import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { useDisableScroll } from "../hooks/useDisableScroll";

export const Navbar = ({ language, handleLanguage, isDark, handleDark }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  useDisableScroll({ nav });



  return (
    <div className={`fixed w-full h-20 flex justify-between items-center px-4 ${!isDark ? "bg-gray-50 text-gray-700" : "bg-[#404040] text-gray-100"} shadow`} >
      <div className="flex  gap-2 justify-center items-center">
        {/* Dark/Light Button */}
        <button onClick={() => handleDark()} className="cursor-pointer justify-center items-center p-1">
          {isDark ? <FiSun size={18} /> : <IoMoonOutline size={18} />}

        </button>
        {/* handleLanguage Button */}
        <button
          className="cursor-pointer justify-center items-center  font-medium p-1"
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
              {language ? "Work" : "Proyectos"}
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
        className="md:hidden z-30 cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <div
        className={`${nav ? "right-0" : "-right-full"} flex flex-col justify-center items-center w-full ${!isDark ? "bg-slate-100" : "bg-[#262626]"} fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300  px-4 lg:px-[35px]`}
      >
        <ul className="text-center">
          <li className="py-6 text-xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              {language ? "Home" : "Inicio"}
            </Link>
          </li>

          <li className="py-6 text-xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              {language ? "Skills" : "Tecnologías"}
            </Link>
          </li>

          <li className="py-6 text-xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              {language ? "Work" : "Proyectos"}
            </Link>
          </li>

          <li className="py-6 text-xl">
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
      <div className="hidden fixed lg:flex  flex-col top-[35%] left-0 ">
        <ul>
          <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300   rounded-xl hover:bg-gray-700 ${!isDark ? "bg-gray-600" : "bg-gray-500 "}`}>
            <a
              className={`flex justify-between items-center w-full ${!isDark ? "text-gray-300" : "text-[#fff]"}`}
              target="_blank"
              href="https://www.linkedin.com/in/cattaneo-diego"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-xl hover:bg-gray-800 ${!isDark ? " bg-gray-700" : "bg-gray-600"}`}>
            <a
              className={`flex justify-between items-center w-full ${!isDark ? "text-gray-300" : "text-[#fff]"}`}
              target="_blank"
              href="https://github.com/dcattaneo"
            >
              GitHub <FaGithubSquare size={30} />
            </a>
          </li>
          <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-xl hover:bg-gray-900 ${!isDark ? " bg-gray-800" : "bg-gray-700"}`}>
            <a
              className={`flex justify-between items-center w-full ${!isDark ? "text-gray-300" : "text-[#fff]"}`}
              target="_blank"
              href="mailto:diegocattaneo@hotmail.com.ar"
            >
              {language ? "E-mail" : "Correo"} <HiOutlineMail size={30} />
            </a>
          </li>
          <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-xl hover:bg-gray-950 ${!isDark ? " bg-gray-900" : "bg-gray-800"}`}>
            <a
              className={`flex justify-between items-center w-full ${!isDark ? "text-gray-300" : "text-[#fff]"}`}
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
    </div >
  );
};
