import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "../components/smart/LanguageSelector";
import { useTranslator } from "../utils/translations";
import EKey from "../utils/translations/EKey";
import { useSelector } from "react-redux";
import { AppState } from "../store/reducers";
import { Button, Grid, Typography } from "@material-ui/core";
import ThemeSelector from "../components/smart/ThemeSelector";
import { useStyles } from "./styles/Home";

export default function Home() {
  const language = useSelector((state: AppState) => state.preferences.language);

  const translator = useTranslator(language);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid container>
          <Typography className={classes.welcomeText}>{translator.get(EKey.welcome)}</Typography>
        </Grid>
        <Grid container>
          <Button className={classes.button} variant={"contained"} color={"primary"} component={Link} to="/about">
            {translator.get(EKey.aboutTheApp)}
          </Button>
        </Grid>
        <Grid container>
          <LanguageSelector />
        </Grid>
        <Grid container>
          <ThemeSelector />
        </Grid>
      </Grid>
    </div>
  );
}
