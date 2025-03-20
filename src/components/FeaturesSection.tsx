import { Grid, Typography, Box, Paper, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { Mic, Equalizer, AudioFile, SettingsVoice } from '@mui/icons-material'

const features = [
  {
    icon: <Mic fontSize="large" />,
    title: 'Customizable AI Voices',
    description: 'Choose from a variety of voices or create your own.',
    color: '#2E3A59'
  },
  {
    icon: <Equalizer fontSize="large" />,
    title: 'Dynamic Pacing & Tone',
    description: 'Adaptive narration that matches your story\'s rhythm.',
    color: '#D4A418'
  },
  {
    icon: <AudioFile fontSize="large" />,
    title: 'Multilingual Support',
    description: 'Create audiobooks in multiple languages with ease.',
    color: '#CC5500'
  },
  {
    icon: <SettingsVoice fontSize="large" />,
    title: 'Personalized Recommendations',
    description: 'AI-powered suggestions for your next listen.',
    color: '#6B8E23'
  }
]

export default function FeaturesSection() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              color: 'primary.main'
            }}
          >
            Features
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: '16px',
                    bgcolor: 'background.paper',
                    border: `2px solid ${feature.color}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 8px 32px ${feature.color}40`
                    }
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      color: feature.color,
                      mb: 2,
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      background: `${feature.color}10`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: `0 4px 20px ${feature.color}20`
                      }
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
