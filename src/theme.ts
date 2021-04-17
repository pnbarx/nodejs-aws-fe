import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      paper: '#dddddd',
      default: '#2d2d2d',
    },
    primary: {
      main: '#FECE2F',
      contrastText: '#222222'
    },
    secondary: {
      main: '#DF0A1C'
    }
  }
});
