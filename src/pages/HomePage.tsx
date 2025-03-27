import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import WhatIsEchoraSection from "../components/WhatIsEchoraSection";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import CallToActionSection from "../components/CallToActionSection";

export default function HomePage() {
  return (
    <Box
      sx={{
        background: `
        radial-gradient(circle at 20% 20%, rgba(167,208,205,0.1) 0%, transparent 70%),
        radial-gradient(circle at 80% 20%, rgba(167,208,205,0.1) 0%, transparent 70%),
        radial-gradient(circle at 50% 70%, rgba(167,208,205,0.1) 0%, transparent 70%),
        linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)
      `,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.9), url(/images/hero-background.webp)`,
          // backgroundImage: "url(/images/hero-background.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          filter: "brightness(0.6)",
        },
      }}
    >
      <HeroSection />
      <WhatIsEchoraSection />
      <AboutSection />
      <MissionSection />
      <CallToActionSection />
    </Box>
  );
}
