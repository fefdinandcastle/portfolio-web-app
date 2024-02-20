import { Language } from "../../utils/globals";
import { AppState } from "./AppProvider";

type AppActionType = { type: "App - Change Language", payload: { language: Language } }

export const AppReducer = (state: AppState, action: AppActionType): AppState => {
	switch (action.type) {
		case "App - Change Language":
			return {
				...state,
				language: action.payload.language
			}
		default:
			return state;
	}
}