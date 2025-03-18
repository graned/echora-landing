import { Box, Typography, Button, Container, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'

export default function HeroSection() {
  const theme = useTheme()

  return (
    <Container maxWidth="lg" sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      py: 8
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          Create Captivating Audiobooks with Echora
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ 
            color: 'text.secondary',
            maxWidth: '800px',
            mb: 4
          }}
        >
          Bring your stories to life with AI-powered voices, customizable actors, and immersive tones.
        </Typography>
        <WaitlistForm />
      </motion.div>
    </Container>
  )
}
