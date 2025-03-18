import { Container, Box, Typography, Grid } from "@mui/material";
import TeamMemberCard from "../components/TeamMemberCard";

export default function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Echora
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Crafting Stories, One Voice at a Time
        </Typography>
        <Typography variant="body1" paragraph>
          Echora was born from a passion for storytelling and the power of
          voice. We believe every story deserves to be heard, and every voice
          deserves to be unique. Our mission is to empower creators to bring
          their stories to life with customizable audio experiences.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
          Meet the Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <TeamMemberCard
              name="Alex Doe"
              role="Founder"
              description="A storyteller at heart, Alex envisioned Echora as a way to merge technology and creativity."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamMemberCard
              name="Jamie Smith"
              role="Developer"
              description="Jamie brings the magic of code to life, ensuring Echora runs smoothly and efficiently."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamMemberCard
              name="Taylor Brown"
              role="Designer"
              description="Taylor crafts the visual and interactive experience, making Echora as beautiful as it is functional."
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
