import { Box, Typography, Container, Grid, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: '#2E3A59',
        color: '#F5F5DC'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Echora
            </Typography>
            <Typography variant="body2">
              Where classic storytelling meets modern AI technology.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Features</Link>
            <Link href="#" color="inherit" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2">
              Subscribe to our newsletter for updates and special offers.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid #D4A418', mt: 4, pt: 2 }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Echora. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
