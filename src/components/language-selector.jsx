import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PiTranslateFill } from "react-icons/pi";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "Arabic" }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const toggleLanguage = () => {
    const nextIndex = (currentLanguageIndex + 1) % languages.length;
    const nextLanguageCode = languages[nextIndex].code;
    i18n.changeLanguage(nextLanguageCode);
    setCurrentLanguageIndex(nextIndex);
  };

  return (
    <div className="flex items-center">
      <PiTranslateFill
        className="text-white cursor-pointer"
        size={24}
        onClick={toggleLanguage}
      />
    </div>
  );
}