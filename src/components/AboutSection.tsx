import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";

export default function AboutSection() {
  const theme = useTheme();

  return (
    <Box
      id="about-section"
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
            Meet the Team
          </Typography>

          <Grid container spacing={12}>
            <Grid item xs={12} md={12}>
              <TeamMemberCard
                name="Eduardo Anaya"
                role="Software Enthusiast"
                description={[
                  "I'm the founder and sole developer behind Echora, a platform dedicated to bringing stories to life through the power of AI. With over 12 years of experience in software development, I thrive on building solutions that make a meaningful impact. I believe software should empower and inspire people, and Echora is my way of turning that belief into reality.",
                  "The idea for Echora was born during a conversation with my partner, where I saw the potential to revolutionize storytelling by combining cutting-edge AI with the timeless art of narration. My mission is to create an immersive experience where every story feels personal, engaging, and alive.",
                  "When I'm not coding, you'll find me exploring new technologies, brainstorming ways to solve real-world problems, and, of course, enjoying a good story.",
                ]}
                color="#A7D0CD"
                pictureUrl="/images/team/eduardo.jpeg"
                socialMedia={{
                  linkedin: "https://www.linkedin.com/in/edanaya/",
                  instagram: "https://instagram.com/ed.anaya",
                  facebook: "https://www.facebook.com/edAnayaV",
                  email: "mailto:anayamaster@gmal.com",
                }}
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
