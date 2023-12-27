import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Achievements from "./Achievements";
import AboutUs from "./AboutMe";
//import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Divider from "@mui/material/Divider";
import Skills from "./Skills";
import Pattern from "./Images/p2.svg";
import Patternw from "./Images/pattern.svg";
import TopPage from "./TopPage";
const Home = () => {
  const firstItemRef = React.useRef(null);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          // background: "rgb(2,0,36)",
          backgroundImage: `url(${Patternw})`,
          background:
            " background-image: linear-gradient(to right top, #e7e7e7, #ebeaeb, #f0edef, #f6eff1, #fcf2f2);",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: 500,
          backgroundAttachment: "Fixed",
        }}
      >
 
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${Pattern})`,
          }}
        >
          <Container maxWidth="xl">
            <TopPage firstItemRef={firstItemRef} />
          </Container>
        </Box>
        <Box ref={firstItemRef}>
          <Container maxWidth="xl" sx={{background:"#fbfbfb"}}>
            <Box sx={{ pt: 10, pb: 10 }}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                textAlign="center"
              >
                About Me
              </Typography>
              <Divider
                sx={{
                  width: 100,
                  margin: "0px auto",
                  borderWidth: 2,
                }}
              />
            </Box>
            <AboutUs />
          </Container>
        </Box>
        <Box>
          <Container maxWidth="xl" sx={{background:"#ffffff"}}>
            <Box sx={{ pt: 10, pb: 10 }}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                textAlign="center"
              >
                Skills & Work Experience
              </Typography>
              <Divider
                sx={{
                  width: 100,
                  margin: "0px auto",
                  borderWidth: 2,
                }}
              />
            </Box>
            <Skills />
          </Container>
        </Box>
        {/* <Box>
          <Container maxWidth="xl">
            <Box sx={{ pt: 10, pb: 10 }}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                textAlign="center"
              >
                Projects
              </Typography>
              <Divider
                sx={{
                  width: 100,
                  margin: "0px auto",
                  borderWidth: 2,
                }}
              />
            </Box>
            <Projects/>
          </Container>
        </Box> */}
        <Box>
          <Container maxWidth="xl" sx={{background:"#fbfbfb"}}>
            <Box sx={{ pt: 10, pb: 10 }}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                textAlign="center"
              >
                Achievements
              </Typography>
              <Divider
                sx={{
                  width: 100,
                  margin: "0px auto",
                  borderWidth: 2,
                }}
              />
            </Box>
            <Achievements />
          </Container>
        </Box>
        <Box>
          <Container maxWidth="xl" sx={{background:"#ffffff"}}>
            <Box sx={{ pt: 10, pb: 10 }}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                textAlign="center"
              >
                Contact Me
              </Typography>
              <Divider
                sx={{
                  width: 100,
                  margin: "0px auto",
                  borderWidth: 2,
                }}
              />
            </Box>
            <ContactMe />
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default Home;
