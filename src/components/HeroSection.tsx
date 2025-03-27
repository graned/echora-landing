import {
  Box,
  Typography,
  Container,
  useTheme,
  Grid,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";
import { Star, Share } from "@mui/icons-material";

const AnimatedBackground = () => (
  <>
    <motion.div
      style={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(222,136,114,0.8) 0%, transparent 70%)",
        filter: "blur(20px)",
      }}
      animate={{
        y: [0, -50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
    <motion.div
      style={{
        position: "absolute",
        top: "40%",
        right: "10%",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(167,208,205,0.8) 0%, transparent 70%)",
        filter: "blur(20px)",
      }}
      animate={{
        y: [0, 50, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
    <motion.div
      style={{
        position: "absolute",
        bottom: "10%",
        left: "15%",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(174,217,214,0.8) 0%, transparent 70%)",
        filter: "blur(20px)",
      }}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  </>
);

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        // backgroundImage: "url(/images/hero-background.webp)",

        //   background: `
        //   radial-gradient(circle at 20% 20%, rgba(222,136,114,0.2) 0%, transparent 30%),
        //   radial-gradient(circle at 80% 40%, rgba(167,208,205,0.2) 0%, transparent 30%),
        //   radial-gradient(circle at 50% 70%, rgba(174,217,214,0.2) 0%, transparent 30%),
        //   linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)
        // `,
        // "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        //   // backgroundImage: "url(/images/hero-background.webp)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   zIndex: 0,
        //   filter: "brightness(0.5)",
        // },
      }}
    >
      <AnimatedBackground />
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 900,
                background: theme.palette.primary.main,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
                fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
              }}
            >
              Create Captivating Audiobooks with Echora
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                maxWidth: "800px",
                mb: 4,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              Bring your stories to life with AI-powered voices, customizable
              actors, and immersive tones.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <WaitlistForm />
            <Grid container spacing={4} sx={{ mt: 8 }}>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 4,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Star
                      fontSize="large"
                      sx={{ mr: 2, color: theme.palette.primary.main }}
                    />
                    <Typography variant="h5">First 50 Users</Typography>
                  </Box>
                  <Typography variant="body1">
                    The first 50 users to sign up will receive a full year of
                    unlimited tokens!
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 4,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Share
                      fontSize="large"
                      sx={{ mr: 2, color: theme.palette.secondary.main }}
                    />
                    <Typography variant="h5">Referral Program</Typography>
                  </Box>
                  <Typography variant="body1">
                    Share your registration code with friends. For every user
                    who signs up using your code, you'll receive 50 free tokens!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>

      {/* <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          zIndex: 2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      /> */}
    </Box>
  );
}
