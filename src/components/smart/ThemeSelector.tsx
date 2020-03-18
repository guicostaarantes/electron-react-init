import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Selector from "../dumb/Selector";
import { changeTheme } from "../../store/actions/preferences";
import EKey from "../../utils/translations/EKey";
import { Theme } from "../../utils/theming/ETheme";
import { AppState } from "../../store/reducers";
import { useTranslator } from "../../utils/translations";
import { useStyles } from "../styles/ThemeSelector";

export default function SmartThemeSelector() {
  const dispatch = useDispatch();

  const language = useSelector((state: AppState) => state.preferences.language);

  const translator = useTranslator(language);

  const options = [
    {
      label: EKey.orangeGreen,
      onSelect: () => dispatch(changeTheme(Theme.orangeGreen))
    },
    {
      label: EKey.bluePurple,
      onSelect: () => dispatch(changeTheme(Theme.bluePurple))
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
