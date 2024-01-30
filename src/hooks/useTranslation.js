import { useState } from "react";

export function useTranslation() {
  const [language, setLanguage] = useState(true);

  const handleLanguage = () => setLanguage((prevState) => !prevState);

  return { language, handleLanguage };
}
