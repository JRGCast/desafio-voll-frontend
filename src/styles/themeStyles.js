import { orange } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fffffe'
    },
    secondary: {
      main: '#72757e'
    },
    error: {
      main: orange[500]
    },
    text: {
      primary: 'red',
      secondary: '#94a1b2',  
    background: {
      default: '#16161a',
      paper: '#2cb67d'
    },
  },
}
});

export default theme;