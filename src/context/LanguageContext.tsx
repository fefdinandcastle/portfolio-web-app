import { createContext, useContext } from "react";
 
export type Language = "en" | "es";
 
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
 
export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});
 
export const useLang = () => useContext(LanguageContext);
 