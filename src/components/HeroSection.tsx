import { Typography, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: 8,
        background:
          "radial-gradient(circle, rgba(25,118,210,0.1) 0%, rgba(25,25,25,1) 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "4rem" },
          }}
        >
          Create Captivating Audiobooks with Echora
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: "text.secondary",
            maxWidth: "800px",
            mb: 4,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Bring your stories to life with AI-powered voices, customizable
          actors, and immersive tones.
        </Typography>
        <WaitlistForm />
      </motion.div>
    </Container>
  );
}
