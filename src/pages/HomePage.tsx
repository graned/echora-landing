import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import WhatIsEchoraSection from '../components/WhatIsEchoraSection'
import UpdatesSection from '../components/UpdatesSection'
import SectionDivider from '../components/SectionDivider'

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <SectionDivider />
      <WhatIsEchoraSection />
      <SectionDivider />
      <UpdatesSection />
    </Box>
  )
}
