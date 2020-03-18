import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    minHeight: "300px",
    background: theme.palette.background.default
  },
  welcomeText: {
    color: theme.palette.getContrastText(theme.palette.background.default),
    fontSize: "40px",
    padding: "10px"
  },
  button: {
    margin: "5px"
  }
}));
