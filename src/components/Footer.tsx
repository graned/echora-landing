import { Box, Typography, Link as MuiLink, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box
        component="footer"
        sx={{
          py: 4,
          mt: "auto",
          bgcolor: "background.paper",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Echora. All rights reserved.
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <MuiLink
              component="button"
              onClick={scrollToAbout}
              color="inherit"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              About Us
            </MuiLink>
            <MuiLink
              href="mailto:anayamaster@gmal.com"
              color="inherit"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Contact Us
            </MuiLink>
          </Box>
        </Container>
      </Box>
    </motion.footer>
  );
}
