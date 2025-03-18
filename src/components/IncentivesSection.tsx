import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Star, Share } from "@mui/icons-material";

export default function IncentivesSection() {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Why Join Echora?
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Star fontSize="large" sx={{ mr: 1 }} />
                <Typography variant="h5">First 50 Users</Typography>
              </Box>
              <Typography>
                The first 50 users to sign up will receive a full year of
                unlimited tokens!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Share fontSize="large" sx={{ mr: 1 }} />
                <Typography variant="h5">Referral Program</Typography>
              </Box>
              <Typography>
                Share your registration code with friends. For every user who
                signs up using your code, you'll receive 50 free tokens!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
