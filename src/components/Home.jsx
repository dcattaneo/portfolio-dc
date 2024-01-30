import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-scroll";

export const Home = ({ language }) => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] text-slate-300">
      {/* Container */}
      <div className="w-full h-full mx-auto px-8 flex flex-col justify-center   ">
        <h1 className=" text-4xl sm:text-6xl md:text-7xl font-bold text-[#ccd6f6] text-center  ">
          Diego Cattaneo
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8892b0] text-center">
          {language ? "Frontend Developer" : "Desarrollador Web"}{" "}
        </h2>
        <div className="flex justify-center">
          <p className=" text-center sm:text-left text-[#8892b0] py-4 max-w-[700px] text-xs  sm:text-sm md:text-base tracking-wider ">
            {language
              ? "Having a degree in International Trade and knowledge in Sociology and History, I have decided to enter the field of Computer Science. Currently, i'm a Frontend Developer with more than 2 years experience working with React, Typescript and Node.js."
              : "Soy Licenciado en Comercio Internacional con conocimientos en Sociología e Historia y actualmente estudio Ciencias de la Computación. Trabajo como Desarrollador Web, y cuento con  más de 2 años de experiencia utilizando React, Typecript y Node.js."}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Link to="work" smooth={true} offset={-20} duration={700}>
            <button className="text-white group border-2 rounded-xl px-6 py-3 flex items-center hover:bg-slate-600 hover:border-slate-300 hover:ring-1 hover:ring-slate-700">
              {language ? "View Work" : "Proyectos"}
              <span className="group-hover:rotate-90 duration-300">
                <GoArrowRight className="ml-3" /> 
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
