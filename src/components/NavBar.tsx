import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <AppBar 
      position="sticky"
      sx={{ 
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(222, 136, 114, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #DE8872 30%, #AED9D6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Echora
          </Typography>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{
              mr: 2,
              '&:hover': {
                color: 'primary.main'
              }
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              '&:hover': {
                color: 'primary.main'
              }
            }}
          >
            About
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
