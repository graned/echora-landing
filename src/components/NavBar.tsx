import { AppBar, Toolbar, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import EchoraLogo from './EchoraLogo'

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
          <Box sx={{ flexGrow: 1 }}>
            <EchoraLogo />
          </Box>
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
