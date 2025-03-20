import { Box, Typography, Container, useTheme, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'
import { Star, Share } from '@mui/icons-material'

// New background image URL
const heroImage = 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'

export default function HeroSection() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          filter: 'brightness(0.5)'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, transparent 20%, #000 70%)',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 900,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.accent.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
                lineHeight: 1.1,
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              Create Captivating Audiobooks with Echora
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              sx={{ 
                color: theme.palette.neutral.light,
                maxWidth: '800px',
                mb: 4,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Bring your stories to life with AI-powered voices, customizable actors, and immersive tones.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <WaitlistForm />
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: 'auto', paddingBottom: '4rem' }}
        >
          <Grid container spacing={4} sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Star fontSize="large" sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography variant="h5">First 50 Users</Typography>
                </Box>
                <Typography variant="body1">
                  The first 50 users to sign up will receive a full year of unlimited tokens!
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Share fontSize="large" sx={{ mr: 2, color: theme.palette.secondary.main }} />
                  <Typography variant="h5">Referral Program</Typography>
                </Box>
                <Typography variant="body1">
                  Share your registration code with friends. For every user who signs up using your code,
                  you'll receive 50 free tokens!
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 2
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </Box>
  )
}
