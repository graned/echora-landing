import { Grid, Typography, Box, Paper, Container } from '@mui/material'
import { motion } from 'framer-motion'
import MicIcon from '@mui/icons-material/Mic'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import AudioFileIcon from '@mui/icons-material/AudioFile'
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice'

const features = [
  {
    icon: <MicIcon fontSize="large" />,
    title: 'Customizable Actors',
    description: 'Choose from a variety of voices or create your own.',
    color: '#7C4DFF'
  },
  {
    icon: <EqualizerIcon fontSize="large" />,
    title: 'Immersive Tones',
    description: 'Adjust tone and emotion for every line of dialogue.',
    color: '#00E5FF'
  },
  {
    icon: <AudioFileIcon fontSize="large" />,
    title: 'High-Quality Audio',
    description: 'Export professional-grade audio files.',
    color: '#FFAB00'
  },
  {
    icon: <SettingsVoiceIcon fontSize="large" />,
    title: 'Easy to Use',
    description: 'Intuitive interface for seamless storytelling.',
    color: '#00C853'
  }
]

const FeatureCard = ({ icon, title, description, color, index }) => (
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
        border: `1px solid ${color}30`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: `0 8px 32px ${color}40`,
          borderColor: `${color}80`
        }
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ 
          color: color,
          mb: 2,
          display: 'inline-flex',
          p: 2,
          borderRadius: '50%',
          background: `${color}10`,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: `0 4px 20px ${color}20`
          }
        }}>
          {icon}
        </Box>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
)

export default function FeaturesSection() {
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
              mb: 6,
              background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Features
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard {...feature} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
