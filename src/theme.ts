import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#DE8872', // Warm coral tone
      light: '#E8A898',
      dark: '#C96E5A'
    },
    secondary: {
      main: '#A7D0CD', // Soft teal
      light: '#C1E0DE',
      dark: '#8DBAB7'
    },
    background: {
      default: '#000000', // Black
      paper: '#121212'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0'
    },
    accent: {
      main: '#AED9D6', // Light aqua
      light: '#C6E5E3',
      dark: '#96C4C1'
    },
    neutral: {
      main: '#AAD4D1', // Muted turquoise
      light: '#C2E0DE',
      dark: '#92BAB7'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '4rem',
      lineHeight: 1.1
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem'
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem'
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600
        }
      }
    }
  }
})

export default theme
