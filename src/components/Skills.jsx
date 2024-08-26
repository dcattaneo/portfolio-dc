// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";



export const Skills = ({ language, isDark }) => {
  return (
    <div
      name="skills"
      className={`w-full h-full   pt-[100px] ${!isDark ? "text-gray-700 bg-gray-100" : "text-gray-100 bg-[#262626]"}`}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className={`text-4xl font-bold inline border-b-2 ${!isDark ? "border-gray-700" : ""}`}>
            {language ? "Skills" : "Tecnologías"}
          </p>
          <p className="py-6">
            {language
              ? "These are the technologies i've worked with"
              : "Estas son las tecnologías con las que he trabajado"}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110  duration-500  ">
            <FaHtml5 size={80} className="mx-auto" />
            <p className="my-4 ">HTML</p>
          </div>
          <div className="shadow-md   hover:scale-110  duration-500">
            <FaCss3Alt size={80} className="mx-auto " />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <IoLogoJavascript size={80} className="mx-auto " />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <FaReact size={80} className="mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <BiLogoTypescript size={80} className="mx-auto" />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <IoLogoFirebase size={80} className="mx-auto" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <FaNodeJs size={80} className="mx-auto" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <BiLogoMongodb size={80} className="mx-auto" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <SiExpress size={80} className="mx-auto" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <DiMysql size={80} className="mx-auto" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <FaGithub size={80} className="mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <SiTailwindcss size={80} className="mx-auto" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};
