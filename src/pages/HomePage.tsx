import { Container, Box, Typography } from "@mui/material";
import WaitlistForm from "../components/WaitlistForm";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import IncentivesSection from "../components/IncentivesSection";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Create Captivating Audiobooks with Echora
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Bring your stories to life with AI-powered voices, customizable
          actors, and immersive tones.
        </Typography>
        <WaitlistForm />
      </Box>

      <IncentivesSection />
      <FeaturesSection />
      <TestimonialsSection />
    </Container>
  );
}
