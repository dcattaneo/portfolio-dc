import usersList from "./../assets/users-list.png";
import crudReact from "./../assets/crud-react.png";
import crudMongo from "./../assets/crud-mongo.png";
import endToEnd from "./../assets/end-to-end.png";
import moviesApp from "./../assets/movies.png";
import eCommerce from "./../assets/e-commerce.png";

export const Work = ({ language }) => {
  return (
    <div
      name="work"
      className="w-full   text-gray-300 bg-[#0a192f] border-none pt-[150px] pb-[120px] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-gray-500">
            {language ? "Work" : "Proyectos"}
          </p>
          <p className="py-6">
            {language
              ? "Check out some of my recent work"
              : "Explore mis proyectos recientes en GitHub"}
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item 1 */}
          <div
            style={{ backgroundImage: `url(${eCommerce})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col opacity-0 group-hover:opacity-100  ">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                E-Commerce - React
              </span>

              <div className="pt-8 text-center">
                <a target="_blank" href="https://e-commerce-dc.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/e-commerce-react-tailwind"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}

          <div
            style={{ backgroundImage: `url(${crudReact})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center ">
                CRUD-React
              </span>

              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-react"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}

          <div
            style={{ backgroundImage: `url(${crudMongo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" flex flex-col opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                CRUD-Express-Mongo
              </span>

              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/crud-express-mongo"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}

          <div
            style={{ backgroundImage: `url(${endToEnd})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                End-To-End Testing
              </span>

              <div className="pt-8 text-center">
                <a target="_blank" href="https://testing-end-to-end.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/testing-end-to-end"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 5 */}

          <div
            style={{ backgroundImage: `url(${usersList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Users Table - React TypeScript
              </span>

              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://users-list-dcattaneo.vercel.app"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/users-list"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 6 */}

          <div
            style={{ backgroundImage: `url(${moviesApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Movie App - React TypeScript
              </span>

              <div className="pt-8 text-center">
                <a target="_blank" href="https://movie-app-dc.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-slate-900">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/dcattaneo/movie-app"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:text-slate-900">
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
