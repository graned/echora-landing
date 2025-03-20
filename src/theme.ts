import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3A59', // Deep Navy Blue
      light: '#4A5A7A',
      dark: '#1C2538'
    },
    secondary: {
      main: '#D4A418', // Warm Amber/Gold
      light: '#FFD54F',
      dark: '#B28704'
    },
    background: {
      default: '#F5F5DC', // Cream/Off-White
      paper: '#FFFFFF'
    },
    text: {
      primary: '#2E3A59',
      secondary: '#6B8E23' // Muted Green
    },
    accent: {
      main: '#CC5500', // Burnt Orange
      neon: '#00BFFF' // Soft Neon Blue
    }
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.1
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '3rem'
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '2rem'
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6
    }
  },
  shape: {
    borderRadius: 12
  }
})

export default theme
