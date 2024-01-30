import HTML from "./../assets/html.svg";
import CSS from "./../assets/css.svg";
import JS from "./../assets/js.svg";
import REACT from "./../assets/react.svg";
import TS from "./../assets/ts.svg";
import NODE from "./../assets/node.svg";
import FIREBASE from "./../assets/firebase.svg";
import GITHUB from "./../assets/github.svg";
import TAILWIND from "./../assets/tailwind.svg";
import MONGO from "./../assets/mongo.svg";
import EXPRESS from "./../assets/express.svg";
import MYSQL from "./../assets/mysql.svg";

export const Skills = ({ language }) => {
  return (
    <div
      name="skills"
      className="w-full h-full bg-[#0a192f] text-gray-300 pt-[100px]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            {language ? "Skills" : "Tecnologías"}
          </p>
          <p className="py-6">
            {language
              ? "These are the technologies i've worked with"
              : "Estas son las tecnologías con las que he trabajado"}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110  duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML image" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110  duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS image" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JS image" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="REACT image" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TS} alt="TS image" />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20  mx-auto"
              src={FIREBASE}
              alt="FIREBASE image"
            />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NODE} alt="NODE image" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MONGO} alt="MONGO image" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={EXPRESS} alt="EXPRESS image" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MYSQL} alt="NEXT image" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GITHUB} alt="GITHUB image" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-color-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TAILWIND} alt="TAILWIND image" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};
