import { Container, Box, Typography } from '@mui/material'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import IncentivesSection from '../components/IncentivesSection'
import UpdatesSection from '../components/UpdatesSection'

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <FeaturesSection />
      <IncentivesSection />
      <TestimonialsSection />
      <UpdatesSection />
    </Box>
  )
}
