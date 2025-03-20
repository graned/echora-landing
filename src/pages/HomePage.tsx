import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import WhatIsEchoraSection from '../components/WhatIsEchoraSection'
import UpdatesSection from '../components/UpdatesSection'

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <WhatIsEchoraSection />
      <UpdatesSection />
    </Box>
  )
}
