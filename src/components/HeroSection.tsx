import { Box, Typography, Container, Button } from '@mui/material'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          linear-gradient(rgba(245, 245, 220, 0.9), 
          url('/vintage-microphone.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle, transparent 20%, #2E3A59 70%),
            linear-gradient(to bottom, rgba(212, 164, 24, 0.1), rgba(204, 85, 0, 0.1))`,
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              color: 'primary.main',
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Where Classic Storytelling Meets Modern AI
          </Typography>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mb: 4,
              mx: 'auto'
            }}
          >
            Experience the magic of storytelling with our AI-powered audiobook platform
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #D4A418 30%, #CC5500 90%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              px: 4,
              py: 2,
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(212, 164, 24, 0.4)'
              }
            }}
          >
            Start Your Listening Journey Today
          </Button>
        </motion.div>
      </Container>
    </Box>
  )
}
