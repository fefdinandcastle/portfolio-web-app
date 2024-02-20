import { FC, PropsWithChildren, useReducer } from "react";
import { Language } from "../../utils/globals";
import { AppReducer } from "./AppReducer";
import { AppContext } from "./AppContext";

export interface AppState {
	language: Language;
}

const AppInitialState: AppState = {
	language: "english"
}

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, AppInitialState);

	const changeLanguage = (language: Language): void => {
		dispatch({ type: "App - Change Language", payload: { language: language } });
	}

	return (
		<AppContext.Provider value={{
			...state,
			changeLanguage
		}}>
			{children}
		</AppContext.Provider>
	)
}