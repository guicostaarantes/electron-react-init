import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Selector from "../dumb/Selector";
import { changeLanguage } from "../../store/actions/preferences";
import EKey from "../../utils/translations/EKey";
import { Language } from "../../utils/translations/ELanguage";
import { AppState } from "../../store/reducers";
import { useTranslator } from "../../utils/translations";
import { useStyles } from "../styles/LanguageSelector";

export default function SmartLanguageSelector() {
  const dispatch = useDispatch();

  const language = useSelector((state: AppState) => state.preferences.language);

  const translator = useTranslator(language);

  const options = [
    {
      label: EKey.english,
      onSelect: () => dispatch(changeLanguage(Language.enus))
    },
    {
      label: EKey.portuguese,
      onSelect: () => dispatch(changeLanguage(Language.ptbr))
    }
  ];

  const classes = useStyles();

  const buttonProps = {
    className: classes.button,
    variant: "contained",
    color: "primary"
  };

  return <Selector translator={translator} options={options} buttonProps={buttonProps} />;
}
