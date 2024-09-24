import registerPic from "../assets/registerPic.png";
import messagePic from "../assets/messagePic.png";
import { LuGithub } from "react-icons/lu";
import { RxVercelLogo } from "react-icons/rx";
import { useState } from "react";

export const Work = ({ language, isDark }) => {
  const [hiddenProjects, setHiddenProjects] = useState(true);

  const handleHiddenProjects = () => {
    setHiddenProjects((prevState) => !prevState);
  };

  const buttonText = hiddenProjects
    ? language === true
      ? "See more projects"
      : "Más projectos"
    : language === true
    ? "Hide projects"
    : "Ocultar proyectos";

  return (
    <div
      name="work"
      className={`w-full    border-none pt-[150px] pb-[120px] ${
        !isDark ? "text-gray-700 bg-gray-100" : "text-gray-100 bg-[#262626]"
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8  text-center">
          <p
            className={`text-4xl font-bold inline border-b-2 ${
              !isDark ? "border-gray-700" : ""
            }`}
          >
            {language ? "Work" : "Proyectos"}
          </p>

          <div className="flex justify-center items-center container mx-auto px-2   ">
            {language ? (
              <p className="py-6 text-center sm:text-left text-xs sm:text-sm md:text-base">
                I have developed a complete <strong>chat </strong> application
                using the MERN stack (MongoDB, Express, React, Node.js) with
                MongoDB Atlas integration for the database. This project allowed
                me not only to reinforce my knowledge of these technologies but
                also to apply best practices in development and deployment.
              </p>
            ) : (
              <p className="py-6  text-center sm:text-left text-xs sm:text-sm md:text-base">
                {" "}
                He desarrollado una aplicación de <strong> chat</strong>{" "}
                utilizando el stack MERN (MongoDB, Express, React, Node.js) con
                integración de MongoDB Atlas para la base de datos. Este
                proyecto me permitió no solo reforzar mis conocimientos en estas
                tecnologías, sino también aplicar buenas prácticas de desarrollo
                y despliegue.
              </p>
            )}
          </div>
        </div>

        {/* Container */}
        <div className="grid text-sm sm:text-base  md:grid-cols-2 gap-4 w-full">
          {/* Grid item 1 */}
          <div
            style={{ backgroundImage: `url(${registerPic})` }}
            className={`  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${
              !isDark
                ? "content-div text-gray-700 hover:text-gray-200"
                : "content-div-dark text-gray-200"
            }`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col opacity-0  group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                Chat-App - Backend
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://backend-chat-v2.vercel.app/"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/backend-chat-v2"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Backend Summary  */}
          <div
            className={`container mx-auto text-pretty md:text-left ${
              !isDark ? "bg-[#262626]" : "bg-[#404040]"
            } text-gray-100  flex md:flex-col justify-center items-center rounded-md`}
          >
            <section className="p-4">
              {language ? (
                <p className="text-xs sm:text-sm md:text-base">
                  {" "}
                  The <strong className="underline">Backend</strong> was built
                  using <strong>Node.js</strong> and <strong>Express</strong>,
                  where I implemented the server logic, including user
                  authentication, session management, and real-time
                  communication with web sockets.
                </p>
              ) : (
                <p className="text-xs sm:text-sm md:text-base">
                  {" "}
                  He construido el{" "}
                  <strong className="underline">Backend</strong> con{" "}
                  <strong>Node.js</strong> y <strong>Express</strong>, donde
                  implementé la lógica del servidor, incluyendo la autenticación
                  de usuario, manejo de sesiones, y comunicación en tiempo real
                  mediante websockets.
                </p>
              )}
            </section>

            <div className="flex ">
              <ul className="md:flex ">
                <li className="h-[40px]    flex items-center mr-2">
                  <a
                    className="text-gray-200 hover:text-white"
                    target="_blank"
                    href="https://github.com/dcattaneo/backend-chat-v2"
                    rel="noreferrer"
                  >
                    <LuGithub size={16} className="" />
                  </a>
                </li>
                <li className="h-[40px]   flex items-center">
                  <a
                    className="text-gray-200 hover:text-white"
                    target="_blank"
                    href="https://backend-chat-v2.vercel.app/"
                    rel="noreferrer"
                  >
                    <RxVercelLogo size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Grid item 2 */}
          <div
            style={{ backgroundImage: `url(${messagePic})` }}
            className={` shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${
              !isDark
                ? "content-div text-gray-700 hover:text-gray-200"
                : "content-div-dark text-gray-200"
            } `}
          >
            {/* Hover Effects */}
            <div className="flex flex-col opacity-0  group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                Chat-App Frontend
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://frontend-chat-v2.vercel.app/"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/frontend-chat-v2"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Frontend Summary */}
          <div
            className={`container mx-auto text-pretty md:text-left  ${
              !isDark ? "bg-[#262626]" : "bg-[#404040]"
            } text-gray-100   flex md:flex-col justify-center items-center rounded-md`}
          >
            <section className="p-4 ">
              {language ? (
                <p className="text-xs sm:text-sm md:text-base">
                  {" "}
                  The <strong className="underline">Frontend</strong> was
                  developed using <strong>React</strong> and{" "}
                  <strong>TypeScript</strong> for stronger typing and early
                  error detection. I used <strong>Vite</strong> as the build
                  tool, providing a faster and more efficient development
                  environment.{" "}
                </p>
              ) : (
                <p className="text-xs sm:text-sm md:text-base">
                  {" "}
                  El <strong className="underline">Frontend</strong> fue
                  desarrollado utilizando <strong>React</strong> y{" "}
                  <strong>TypeScript</strong> para un tipado más robusto y la
                  detección temprana de errores. Utilicé <strong>Vite</strong>{" "}
                  como herramienta de compilación para una experiencia de
                  desarrollo más rápida y ágil.{" "}
                </p>
              )}
            </section>
            <div className="flex">
              <ul className="md:flex">
                <li className="h-[40px]      flex items-center mr-2 ">
                  <a
                    className="text-gray-200 hover:text-white "
                    target="_blank"
                    href="https://github.com/dcattaneo/frontend-chat-v2"
                    rel="noreferrer"
                  >
                    <LuGithub size={16} className="" />
                  </a>
                </li>
                <li className="h-[40px]   flex items-center">
                  <a
                    className="text-gray-200 hover:text-white"
                    target="_blank"
                    href="https://frontend-chat-v2.vercel.app/"
                    rel="noreferrer"
                  >
                    <RxVercelLogo size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden  Projects */}
      <div
        className={`max-w-[1000px] ${
          hiddenProjects ? "hidden" : ""
        } mx-auto p-4 flex flex-col justify-center w-full h-full`}
      >
        <div className="pb-8 mt-8 text-center">
          <p
            className={`text-4xl font-bold inline border-b-2 ${
              !isDark ? "border-gray-700" : ""
            }`}
          >
            {language ? "Practices" : "Prácticas"}
          </p>

          <div className="flex justify-center items-center container mx-auto px-2   ">
            {language ? (
              <p className="py-6 text-center sm:text-left text-xs sm:text-sm md:text-base">
                Here you can see other projects I have worked on, all of which
                can be found in my GitHub repository. These projects cover
                various areas of web development, ranging from full-stack
                applications to responsive and dynamic websites. Each project
                was built using different technologies and tools, including
                Node.js, Express, React, MongoDB, MySQL, and Tailwind CSS, among
                others. My focus in each of these projects has been to implement
                best practices, optimization, and an intuitive user experience.
                Explore them to learn more about my work!
              </p>
            ) : (
              <p className="py-6  text-center sm:text-left text-xs sm:text-sm md:text-base">
                {" "}
                Aquí puedes ver otras prácticas que he realizado, las cuales se
                encuentran en mi repositorio de GitHub. Estas prácticas abarcan
                diversas áreas del desarrollo web, desde aplicaciones fullstack
                hasta sitios responsivos y dinámicos. Cada proyecto fue
                construido utilizando diferentes tecnologías y herramientas,
                incluyendo Node.js, Express, React, MongoDB, MySQL y Tailwind
                CSS, entre otras. Mi enfoque en cada uno de estos proyectos ha
                sido implementar buenas prácticas, optimización y una
                experiencia de usuario intuitiva. ¡Explóralos para conocer más
                sobre mi trabajo!
              </p>
            )}
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid text-sm sm:text-base  md:grid-cols-2 gap-4 w-full">
          {/* Grid item 1 */}
          <div
            className={`  container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col ">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                CRUD-Express-SQL
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-node-mysql"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid item 2 */}
          <div
            className={`  container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                CRUD-React-TypeScript
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-react-ts"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 3 */}
          <div
            className={`  container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                E-Commerce - React
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://e-commerce-dc.vercel.app"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/e-commerce-react-tailwind"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 4 */}
          <div
            className={` container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                Users Table - React TypeScript
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://users-list-dcattaneo.vercel.app"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/users-list"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 5 */}
          <div
            className={`  container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                Movie Cards - React TypeScript
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://movie-app-dc.vercel.app"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/movie-app"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 6 */}
          <div
            className={` container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                End-To-End Testing
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://testing-end-to-end.vercel.app"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/testing-end-to-end"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 7 */}
          <div
            className={` container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                CRUD-React-Tailwind
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-react"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 8 */}
          <div
            className={`   container  rounded-md flex justify-center items-center mx-auto ${
              isDark ? "bg-[#404040]" : "bg-[#262626]"
            }  text-gray-100 h-[240px]`}
          >
            {/* Hover Effects */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-center select-none">
                CRUD-Express-Mongo
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-express-mongo"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-4 ">
        <button
          onClick={handleHiddenProjects}
          className={` border-[1px] rounded-xl px-6 py-3 flex items-center   ${
            !isDark
              ? "text-gray-900 border-gray-800"
              : "text-[#fff] border-[#fafafa]"
          } `}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
