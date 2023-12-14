import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" textAlign="center">
      {" © Copyright"} {" "}
      {new Date().getFullYear()}
      {"."}
      {" Made by Mughilarasu Muthuvel"}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container>
        <Box>
          <div style={{ margin: "0px auto" }}>
            <Copyright />
          </div>
        </Box>
      </Container>
    </Box>
  );
}
