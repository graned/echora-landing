import { Box, Typography, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, mt: 'auto', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Echora. All rights reserved.
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <MuiLink component={Link} to="/about" color="inherit">
            About Us
          </MuiLink>
          <MuiLink href="#" color="inherit">
            Terms of Service
          </MuiLink>
          <MuiLink href="#" color="inherit">
            Privacy Policy
          </MuiLink>
          <MuiLink href="#" color="inherit">
            Contact Us
          </MuiLink>
        </Box>
      </Container>
    </Box>
  )
}
