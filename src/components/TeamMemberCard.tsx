import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  Modal,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  GitHub,
  LinkedIn,
  Instagram,
  Facebook,
  Email,
} from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "600px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
  outline: "none",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

export default function TeamMemberCard({
  name,
  role,
  description,
  color,
  pictureUrl,
  socialMedia,
}: {
  name: string;
  role: string;
  description: string[];
  color: string;
  pictureUrl: string;
  socialMedia: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    email?: string;
  };
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Card
          onClick={handleOpen}
          sx={{
            height: "100%",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              boxShadow: `0 8px 32px ${color}40`,
              transform: "translateY(-10px)",
            },
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              src={pictureUrl}
              sx={{
                width: 100,
                height: 100,
                mx: "auto",
                mb: 2,
                fontSize: "2rem",
              }}
            >
              {!pictureUrl && name[0]}
            </Avatar>
            <Typography variant="h6">{name}</Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {role}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
              {socialMedia?.github && (
                <IconButton
                  href={socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <GitHub />
                </IconButton>
              )}
              {socialMedia?.linkedin && (
                <IconButton
                  href={socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              )}
              {socialMedia?.instagram && (
                <IconButton
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Instagram />
                </IconButton>
              )}
              {socialMedia?.facebook && (
                <IconButton
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Facebook />
                </IconButton>
              )}
              {socialMedia?.email && (
                <IconButton
                  href={socialMedia.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Email />
                </IconButton>
              )}
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Avatar
                src={pictureUrl}
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 2,
                  bgcolor: color,
                  color: "#fff",
                  fontSize: "2.5rem",
                }}
              >
                {!pictureUrl && name[0]}
              </Avatar>
              <Typography variant="h4">{name}</Typography>
              <Typography variant="h6" color="text.secondary">
                {role}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 4 }}>
              About Me
            </Typography>
            {description.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", textAlign: "left" }}
              >
                {paragraph}
              </Typography>
            ))}
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              {socialMedia?.github && (
                <IconButton
                  href={socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <GitHub />
                </IconButton>
              )}
              {socialMedia?.linkedin && (
                <IconButton
                  href={socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              )}
              {socialMedia?.instagram && (
                <IconButton
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Instagram />
                </IconButton>
              )}
              {socialMedia?.facebook && (
                <IconButton
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Facebook />
                </IconButton>
              )}
              {socialMedia?.email && (
                <IconButton
                  href={socialMedia.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Email />
                </IconButton>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
