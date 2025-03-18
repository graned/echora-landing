import { Grid, Typography, Box, Paper } from '@mui/material'
import { Mic, Equalizer, AudioFile, SettingsVoice } from '@mui/icons-material'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Mic fontSize="large" />,
    title: 'Customizable Actors',
    description: 'Choose from a variety of voices or create your own.'
  },
  {
    icon: <Equalizer fontSize="large" />,
    title: 'Immersive Tones',
    description: 'Adjust tone and emotion for every line of dialogue.'
  },
  {
    icon: <AudioFile fontSize="large" />,
    title: 'High-Quality Audio',
    description: 'Export professional-grade audio files.'
  },
  {
    icon: <SettingsVoice fontSize="large" />,
    title: 'Easy to Use',
    description: 'Intuitive interface for seamless storytelling.'
  }
]

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
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
          {icon}
        </Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
)

export default function FeaturesSection() {
  return (
    <Box sx={{ my: 8 }} className="animated-section">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
