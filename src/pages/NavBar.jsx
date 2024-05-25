import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/language-selector";
import ThemeToggle from "../components/theme-toggle";

export default function NavBar() {
    const { t } = useTranslation();
    return (
        <div className="bg-slate-900 p-4 flex justify-between">
            <h1 className="text-white">{t("app.title")}</h1>
            <ThemeToggle />
            <LanguageSelector />
        </div>
    );
}