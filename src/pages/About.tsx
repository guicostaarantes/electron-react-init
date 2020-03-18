import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../store/reducers";
import { useTranslator } from "../utils/translations";
import EKey from "../utils/translations/EKey";
import { Button, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles/About";

export default function About() {
  const language = useSelector((state: AppState) => state.preferences.language);

  const translator = useTranslator(language);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid container>
          <Typography className={classes.aboutText}>{translator.get(EKey.about)}</Typography>
        </Grid>
        <Grid container>
          <Button className={classes.button} variant={"contained"} color={"primary"} component={Link} to="/">
            {translator.get(EKey.backToHome)}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
