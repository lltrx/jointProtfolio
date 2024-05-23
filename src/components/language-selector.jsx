import React , {useEffect} from "react";
import { useTranslation } from "react-i18next";

const lamgauges = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic"}
    ];


export default function LanguageSelector() {
    const {i18n} =useTranslation();

    useEffect(() => {
        document.body.dir = i18n.dir();
    } , [i18n ,i18n.language]);
    
    return (
        <div>
            {lamgauges.map(({ code, name }) => (
                <button
                    key={code}
                    onClick={() => i18n.changeLanguage(code)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {name}
                </button>
            ))}
        </div>
    );
}

