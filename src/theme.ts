import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C4DFF', // Vibrant purple
      light: '#B388FF',
      dark: '#651FFF'
    },
    secondary: {
      main: '#00E5FF', // Bright cyan
      light: '#6FFFFF',
      dark: '#00B2CC'
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3'
    },
    success: {
      main: '#00C853', // Green
      light: '#5EFC82',
      dark: '#009624'
    },
    warning: {
      main: '#FFAB00', // Amber
      light: '#FFD740',
      dark: '#C67C00'
    },
    error: {
      main: '#FF5252', // Red
      light: '#FF867F',
      dark: '#C50E29'
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
  }
})

export default theme
