import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Achievements from "./Achievements";
import AboutUs from "./AboutMe";
//import Projects from "./Projects";
import ContactMe from "./ContactMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
import Divider from "@mui/material/Divider";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GetAppIcon from "@mui/icons-material/GetApp";
import MailIcon from "@mui/icons-material/Mail";

import logo from "./Images/logo.png";
import Skills from "./Skills";
import Pattern from "./Images/p2.svg";
import Patternw from "./Images/pattern.svg";
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
        {/* <div style={{ background: "white", borderBottom: "1px solid #e5e5e5" }}>
          <Container maxWidth="xl">
            <Header />
          </Container>
        </div> */}
        {/* <ImgSlider /> */}
        {/* <Container maxWidth="xl">
          <Box
            sx={{
              pt: 0,
              pb: 0,
              //  position: 'absolute',
              //  top: '85vh',
              //  zIndex: 100,
              //  right: 0,
              //  left:0,

              display: { xs: "block", md: "none" },
            }}
          >
            <Box sx={{ textAlign: "center", pt: 1, pb: 1 }}>
              <Fab
                variant="contained"
                // sx={{color:'black',background:'white'}}

                onClick={() =>
                  firstItemRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                <ExpandMoreIcon className="animated bounce" />
              </Fab>
            </Box>
          </Box>
          <Box
            sx={{
              pt: 2,
              pb: 2,
              position: "absolute",
              top: "85vh",
              zIndex: 100,
              right: 0,
              left: 0,

              display: { xs: "none", md: "block" },
            }}
          >
            <Box sx={{ textAlign: "center", pt: 2, pb: 2 }}>
              <Fab
                variant="contained"
                // sx={{color:'black',background:'white'}}

                onClick={() =>
                  firstItemRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                <ExpandMoreIcon className="animated bounce" />
              </Fab>
            </Box>
          </Box>
        </Container> */}
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
            <Box
              sx={
                {
                  //  position: 'absolute',
                  //  top: '85vh',
                  //  zIndex: 100,
                  //  right: 0,
                  //  left:0,
                  //  display: { xs: "block", md: "none" },
                }
              }
            >
              <Box sx={{ textAlign: "center" }}>
                {" "}
                <img
                  alt="Mughilarasu Muthuvel"
                  src={logo}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: 100,
                    padding: 8,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  component="div"
                  textAlign="center"
                  sx={{
                    fontSize: "3rem",
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    textAlign: "center",
                    color: "#111",
                    fontWeight: "800",
                  }}
                >
                  I'm Mughilarasu Muthuvel
                  <br />
                  <span
                    style={{
                      color: "#333",
                      fontSize: "2rem",
                      textAlign: "center",
                      width: "100%",
                      lineHeight: 1.6,
                    }}
                  >
                    Web & Mobile App Developer
                  </span>
                </Typography>
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Tooltip title="mughilarasu15@gmail.com">
                    <Avatar
                      sx={{ background: "#2596be", m: 2 }}
                      onClick={() =>
                      window.location = `mailto:mughilarasu15@gmail.com`
                      }
                    >
                      <IconButton aria-label="MailIcon" color="inherit">
                        <MailIcon />
                      </IconButton>
                    </Avatar>
                  </Tooltip>{" "}
                </Box>
                <Box>
                  <Tooltip title="LinkedIn">
                    <Avatar
                      sx={{ background: "#2596be", m: 2 }}
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/mughilarasu-m-828658154/",
                          "_blank"
                        )
                      }
                    >
                      <IconButton aria-label="LinkedInIcon" color="inherit">
                        <LinkedInIcon />
                      </IconButton>
                    </Avatar>
                  </Tooltip>{" "}
                </Box>
                <Box>
                  <Tooltip title="Twitter">
                    <Avatar
                      sx={{ background: "#2596be", m: 2 }}
                      onClick={() =>
                        window.open(
                          "https://twitter.com/mughilarasu15",
                          "_blank"
                        )
                      }
                    >
                      <IconButton aria-label="TwitterIcon" color="inherit">
                        <TwitterIcon />
                      </IconButton>
                    </Avatar>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip title="GitHub">
                    <Avatar
                      sx={{ background: "#2596be", m: 2 }}
                      onClick={() =>
                        window.open("https://github.com/mughilarasu", "_blank")
                      }
                    >
                      <IconButton aria-label="GitHubIcon" color="inherit">
                        <GitHubIcon />
                      </IconButton>
                    </Avatar>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip title="Download My Resume">
                    <Avatar sx={{ background: "#2596be", m: 2 }}>
                      <IconButton aria-label="GetAppIcon" color="inherit">
                        <GetAppIcon />
                      </IconButton>
                    </Avatar>
                  </Tooltip>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center", pt: "100px", pb: "100px" }}>
                <Fab
                  variant="extended"
                  sx={{
                    color: "white",
                    background: "#2596be",
                    "&:hover": {
                      background: "#2596be",
                      color: "white",
                    },
                  }}
                  onClick={() =>
                    firstItemRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                >
                  View More <ExpandMoreIcon className="animated bounce" />
                </Fab>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box ref={firstItemRef}>
          <Container maxWidth="xl">
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
          <Container maxWidth="xl">
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
          <Container maxWidth="xl">
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
          <Container maxWidth="xl">
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
