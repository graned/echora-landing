import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import IncentivesSection from '../components/IncentivesSection'
import UpdatesSection from '../components/UpdatesSection'
import WhatIsEchoraSection from '../components/WhatIsEchoraSection'

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <WhatIsEchoraSection />
      <FeaturesSection />
      <IncentivesSection />
      <TestimonialsSection />
      <UpdatesSection />
    </Box>
  )
}
