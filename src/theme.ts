import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: '#000',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#9E9E9E',
    },
    text: {
      primary: '#FFF',
      secondary: '#9E9E9E',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#000',
          border: '1px solid #333',
        },
      },
    },
  },
});

export default theme;