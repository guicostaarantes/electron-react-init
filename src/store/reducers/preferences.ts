import { Language } from "../../utils/translations/ELanguage";
import { Theme } from "../../utils/theming/ETheme";
import { PreferencesAction, PreferencesActionType } from "../actions/preferences";

interface PreferencesState {
  language: Language;
  theme: Theme;
}

const initialState: PreferencesState = {
  language: Language.ptbr,
  theme: Theme.orangeGreen
};

export default function preferencesReducer(
  state: PreferencesState = initialState,
  action: PreferencesAction
): PreferencesState {
  switch (action.type) {
    case PreferencesActionType.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case PreferencesActionType.CHANGE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
