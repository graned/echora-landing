import { Box } from "@mui/material";

export default function SectionDivider() {
  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",
        background:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 2,
        position: "relative",
        mt: "-50px",
        mb: "-50px",
      }}
    />
  );
}
