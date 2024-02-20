import { createContext } from "react";
import { Language } from "../../utils/globals";

export interface ContextProps {
	language: Language;
	changeLanguage: (language: Language) => void;
}

export const AppContext = createContext({} as ContextProps)