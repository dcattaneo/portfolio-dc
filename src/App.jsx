import "./App.css";
import {
  Navbar,
  Home,
  Skills,
  Work,
  Contact,
  Preload,
} from "./components/index";
import { usePreload } from "./hooks/usePreload";
import { useTranslation } from "./hooks/useTranslation";

function App() {
  const { loading } = usePreload();
  const { language, handleLanguage } = useTranslation();

  return (
    <div className=" bg-black w-full h-full">
      {loading ? (
        <Preload />
      ) : (
        <div className="components bg-[#0a192f] ">
          <Navbar language={language} handleLanguage={handleLanguage} />
          <Home language={language} />
          <Skills language={language} />
          <Work language={language} />
          <Contact language={language} />
        </div>
      )}
    </div>
  );
}

export default App;
