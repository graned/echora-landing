import { motion } from "framer-motion";
import { Box, Typography, Container, useTheme } from "@mui/material";
import WaitlistForm from "./WaitlistForm";

export default function CallToActionSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                background: theme.palette.primary.main,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Ready to Bring Your Stories to Life?
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                color: theme.palette.secondary.dark,
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              Join Echora today and start creating captivating audiobooks with
              our AI-powered platform.
            </Typography>
            <WaitlistForm />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
