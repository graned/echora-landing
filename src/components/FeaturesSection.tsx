import { Grid, Typography, Box } from '@mui/material'
import { Mic, Equalizer, AudioFile, SettingsVoice } from '@mui/icons-material'

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

export default function FeaturesSection() {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Features
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
