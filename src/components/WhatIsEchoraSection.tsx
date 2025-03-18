import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Mic, Headset, LibraryBooks, SettingsVoice } from '@mui/icons-material'

const features = [
  {
    icon: <Mic fontSize="large" />,
    title: 'AI-Powered Narration',
    description: 'Transform text into natural-sounding audio with our advanced AI technology.'
  },
  {
    icon: <Headset fontSize="large" />,
    title: 'Immersive Listening',
    description: 'Experience stories come to life with customizable voices and tones.'
  },
  {
    icon: <LibraryBooks fontSize="large" />,
    title: 'Extensive Library',
    description: 'Access a wide range of voice actors and styles for your stories.'
  },
  {
    icon: <SettingsVoice fontSize="large" />,
    title: 'Customization',
    description: 'Fine-tune every aspect of your audiobook for the perfect listening experience.'
  }
]

export default function WhatIsEchoraSection() {
  const theme = useTheme()

  return (
    <Box sx={{ py: 8, background: 'radial-gradient(circle, rgba(25,118,210,0.1) 0%, rgba(18,18,18,1) 100%)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center',
              mb: 4,
              background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            What is Echora?
          </Typography>

          <Paper 
            sx={{ 
              p: 4,
              mb: 6,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
              Echora is an innovative AI-powered platform that transforms the way you create and experience audiobooks.
              With cutting-edge technology and a user-friendly interface, Echora makes it easy to bring your stories
              to life with professional-quality narration.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
              Whether you're an author, publisher, or content creator, Echora provides the tools you need to create
              immersive audio experiences that captivate your audience.
            </Typography>
          </Paper>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)'
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ 
                        color: 'primary.main', 
                        mb: 2,
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: '50%',
                        background: 'rgba(25, 118, 210, 0.1)'
                      }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
