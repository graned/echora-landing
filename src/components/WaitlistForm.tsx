import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  Fade,
  Backdrop,
  useTheme,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
  outline: "none",
};

export default function WaitlistForm() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralCode: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 2,
          background: theme.palette.secondary.light,
          color: "#000",
          fontWeight: "bold",
          fontSize: "1.1rem",
          px: 4,
          py: 1.5,
          "&:hover": {
            transform: "scale(1.05)",
            transition: "transform 0.3s ease",
            boxShadow: "0 4px 20px rgba(222, 136, 114, 0.4)",
            background: theme.palette.secondary.dark,
          },
        }}
        onClick={handleOpen}
      >
        Join the Waitlist
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Join the Waitlist
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                margin="normal"
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                margin="normal"
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Referral Code (optional)"
                value={formData.referralCode}
                onChange={(e) =>
                  setFormData({ ...formData, referralCode: e.target.value })
                }
                margin="normal"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontSize: "1rem",
                  background: theme.palette.primary.main,
                  color: "#000",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
