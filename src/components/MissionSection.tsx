import { Box, Typography, Container, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 4,
              background: theme.palette.primary.main,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Our Mission
          </Typography>
          <Paper
            sx={{
              p: 4,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              We're committed to creating a platform that empowers storytellers
              of all levels to bring their visions to life. Through innovative
              technology and user-friendly design, we're making professional
              audiobook creation accessible to everyone.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
