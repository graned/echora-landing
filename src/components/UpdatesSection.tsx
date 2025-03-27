import {
  Box,
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { Announcement, Update, NewReleases } from "@mui/icons-material";

const updates = [
  {
    id: 1,
    title: "Custom Voice Creation",
    description:
      "Create your own unique voice profiles with our new voice creation tool.",
    date: "2023-10-15",
    icon: <NewReleases color="primary" />,
  },
  {
    id: 2,
    title: "Improved Audio Quality",
    description:
      "Enhanced audio processing for clearer and more natural sounding voices.",
    date: "2023-10-10",
    icon: <Update color="secondary" />,
  },
  {
    id: 3,
    title: "New Voice Actors",
    description:
      "Added 10 new voice actors to our growing library of professional voices.",
    date: "2023-10-05",
    icon: <Announcement color="warning" />,
  },
];

export default function UpdatesSection() {
  return (
    <Box
      sx={{
        py: 8,
        background:
          "radial-gradient(circle, rgba(222,136,114,0.1) 0%, rgba(18,18,18,1) 100%)",
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
              background: "linear-gradient(45deg, #DE8872 30%, #AED9D6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Latest Updates
          </Typography>

          <Paper
            sx={{
              p: 2,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
            }}
          >
            <List sx={{ width: "100%" }}>
              {updates.map((update) => (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ListItem
                    sx={{
                      mb: 2,
                      background: "rgba(255, 255, 255, 0.03)",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(10px)",
                        boxShadow: "0 4px 20px rgba(222, 136, 114, 0.2)",
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor: "transparent",
                          color: "primary.main",
                          width: 48,
                          height: 48,
                        }}
                      >
                        {update.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={update.title}
                      secondary={update.description}
                      primaryTypographyProps={{
                        variant: "h6",
                        color: "text.primary",
                      }}
                      secondaryTypographyProps={{
                        variant: "body1",
                        color: "text.secondary",
                      }}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 2 }}
                    >
                      {new Date(update.date).toLocaleDateString()}
                    </Typography>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
