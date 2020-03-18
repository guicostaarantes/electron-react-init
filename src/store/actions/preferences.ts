import { Language } from "../../utils/translations/ELanguage";
import { Theme } from "../../utils/theming/ETheme";

export enum PreferencesActionType {
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
  CHANGE_THEME = "CHANGE_THEME"
}

export interface PreferencesBaseAction {
  type: PreferencesActionType;
}

export interface ChangeLanguageAction extends PreferencesBaseAction {
  type: PreferencesActionType.CHANGE_LANGUAGE;
  payload: Language;
}

export interface ChangeThemeAction extends PreferencesBaseAction {
  type: PreferencesActionType.CHANGE_THEME;
  payload: Theme;
}

export type PreferencesAction = ChangeLanguageAction | ChangeThemeAction;

export function changeLanguage(lang: Language): ChangeLanguageAction {
  return {
    type: PreferencesActionType.CHANGE_LANGUAGE,
    payload: lang
  };
}

export function changeTheme(theme: Theme): ChangeThemeAction {
  return {
    type: PreferencesActionType.CHANGE_THEME,
    payload: theme
  };
}
