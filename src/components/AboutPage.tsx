import { Container, Box, Typography, Grid, Paper, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import TeamMemberCard from './TeamMemberCard'

const aboutImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

export default function AboutPage() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.9), url(${aboutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' }
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
                mx: 'auto',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Crafting Stories, One Voice at a Time
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Paper 
            elevation={3}
            sx={{ 
              p: 4, 
              mb: 8,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              Echora was born from a passion for storytelling and the power of voice. We believe every story
              deserves to be heard, and every voice deserves to be unique. Our mission is to empower creators
              to bring their stories to life with customizable audio experiences.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              With cutting-edge AI technology and a team of passionate creators, we're revolutionizing the way
              audiobooks are made. Our platform offers unparalleled customization and quality, making it easier
              than ever to create professional-grade audio content.
            </Typography>
          </Paper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginTop: '4rem' }}
        >
          <Typography 
            variant="h4" 
            component="h3" 
            gutterBottom 
            sx={{ 
              textAlign: 'center',
              mb: 4,
              background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Our Mission
          </Typography>
          <Paper 
            sx={{ 
              p: 4,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              We're committed to creating a platform that empowers storytellers of all levels to bring their
              visions to life. Through innovative technology and user-friendly design, we're making professional
              audiobook creation accessible to everyone.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}
