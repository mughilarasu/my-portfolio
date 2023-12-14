import React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Footer from "./Footer";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Fab from "@mui/material/Fab";
const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
//  const navigate = useNavigate();
  return (
    <div>
      {/* <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/my-portfolio`} element={<Home />} />
       
       
        <Route
          path={`*`}
          element={
            <>
              <div
                style={{
                  background: "white",
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
              </div>
              <Container maxWidth="xl">
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "calc(93vh - 106px)",
                  }}
                >
                  <Box sx={{ pt: 0, pb: 0, textAlign: "center" }}>
                    <Box sx={{ pt: 2, pb: 6 }}>
                      <h1>Error 404</h1>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Go Home
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </>
          }
        />
      </Routes> */}
      <Home />
      <Footer />
      {showButton && (
        <Fab
          onClick={scrollToTop}
          variant="contained"
          sx={{
            position: "fixed",
            right: 16,
            bottom: 16,
            background: "#2596be",
            color: "white",

            "&:hover": {
              background: "#2596be",
              color: "white",
            },
          }}
        >
          <ExpandLessIcon />
        </Fab>
      )}
    </div>
  );
};

export default App;
