import { Container, Box, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import TeamMemberCard from './TeamMemberCard'

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            About Echora
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Crafting Stories, One Voice at a Time
          </Typography>
        </Box>

        <Paper 
          elevation={3}
          sx={{ 
            p: 4, 
            mb: 8,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Typography variant="body1" paragraph>
            Echora was born from a passion for storytelling and the power of voice. We believe every story
            deserves to be heard, and every voice deserves to be unique. Our mission is to empower creators
            to bring their stories to life with customizable audio experiences.
          </Typography>
        </Paper>

        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: 4,
            background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Meet the Team
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <TeamMemberCard
              name="Alex Doe"
              role="Founder"
              description="A storyteller at heart, Alex envisioned Echora as a way to merge technology and creativity."
              color="#7C4DFF"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamMemberCard
              name="Jamie Smith"
              role="Developer"
              description="Jamie brings the magic of code to life, ensuring Echora runs smoothly and efficiently."
              color="#00E5FF"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamMemberCard
              name="Taylor Brown"
              role="Designer"
              description="Taylor crafts the visual and interactive experience, making Echora as beautiful as it is functional."
              color="#FFAB00"
            />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  )
}
