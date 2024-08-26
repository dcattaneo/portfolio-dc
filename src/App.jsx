import "./App.css";
import {
  Navbar,
  Home,
  Skills,
  Work,
  Contact,
  Preload,
} from "./components/index";
// import { usePreload } from "./hooks/usePreload";
import { useTranslation } from "./hooks/useTranslation";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  // const { loading } = usePreload();
  const { language, handleLanguage } = useTranslation();
  const { isDark, handleDark } = useDarkMode()


  return (
    <div className=" bg-black w-full h-full">
      <Navbar language={language} handleLanguage={handleLanguage} isDark={isDark} handleDark={handleDark} />
      <Home language={language} isDark={isDark} />
      <Skills language={language} isDark={isDark} />
      <Work language={language} isDark={isDark} />
      <Contact language={language} isDark={isDark} />
    </div>
  );
}

export default App;
