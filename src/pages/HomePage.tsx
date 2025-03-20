import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import WhatIsEchoraSection from '../components/WhatIsEchoraSection'
import UpdatesSection from '../components/UpdatesSection'

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <WhatIsEchoraSection />
      <FeaturesSection />
      <UpdatesSection />
    </Box>
  )
}
