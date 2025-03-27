import { AppBar, Toolbar, Container, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EchoraLogo from "./EchoraLogo";
import WaitlistForm from "./WaitlistForm";

export default function NavBar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(222, 136, 114, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box component={Link} onClick={handleHomeClick} sx={{ flexGrow: 1 }}>
            <EchoraLogo />
          </Box>
          <Box
            sx={{
              marginBottom: "0.5rem",
            }}
          >
            <WaitlistForm />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
