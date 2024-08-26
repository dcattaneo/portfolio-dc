

export const Work = ({ language, isDark }) => {
  return (
    <div
      name="work"
      className={`w-full    border-none pt-[150px] pb-[120px] ${!isDark ? "text-gray-700 bg-gray-100" : "text-gray-100 bg-[#262626]"}`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">

          <p className={`text-4xl font-bold inline border-b-2 ${!isDark ? "border-gray-700" : ""}`}>
            {language ? "Practices" : "Prácticas"}
          </p>
          <p className="py-6">
            {language
              ? "Check out some of my recent work"
              : "Explore mis proyectos recientes en GitHub"}
          </p>
        </div>

        {/* Container */}
        <div className="grid  md:grid-cols-2 gap-4 ">


          {/* Grid item 1 */}

          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                CRUD-Express-SQL
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-node-mysql"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 2 */}

          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                CRUD-React-Typescript
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-react-ts"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}

          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                CRUD-Express-Mongo
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-express-mongo"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>



          {/* Grid Item 4 */}

          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                CRUD-React-Tailwind
              </span>

              <div className="pt-8 text-center ">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-react"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>



          {/* Grid item 5 */}
          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                E-Commerce - React
              </span>

              <div className="pt-8 text-center ">
                <a target="_blank" href="https://e-commerce-dc.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/e-commerce-react-tailwind"
                >

                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>

              </div>
            </div>
          </div>

          {/* Grid Item 6 */}

          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                End-To-End Testing
              </span>

              <div className="pt-8 text-center ">
                <a target="_blank" href="https://testing-end-to-end.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/testing-end-to-end"
                >

                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>

              </div>
            </div>
          </div>

          {/* Grid Item 7 */}

          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                Users Table - React TypeScript
              </span>

              <div className="pt-8 text-center ">
                <a target="_blank" href="https://users-list-dcattaneo.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/users-list"
                >

                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Code
                  </button>
                </a>

              </div>
            </div>
          </div>

          {/* Grid Item 8 */}

          <div className={`shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  ${!isDark ? "content-div text-gray-700 hover:text-gray-200" : "content-div-dark text-gray-200"}`}>
            {/* Hover Effects */}
            <div className="flex flex-col opacity-1  group-hover:opacity-100  ">
              <span className="text-2xl font-bold tracking-wider text-center">
                Movie cards - React TypeScript
              </span>

              <div className="pt-8 text-center ">
                <a target="_blank" href="https://movie-app-dc.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2  border   ring-0  font-bold text-lg border-gray-400 ">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/movie-app"
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
    </div>
  );
};
