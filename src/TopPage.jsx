import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GetAppIcon from "@mui/icons-material/GetApp";
import MailIcon from "@mui/icons-material/Mail";
import CollectionsIcon from "@mui/icons-material/Collections";
import MughilarasuResume from "./Docs/Mughilarasu.pdf";
import logo from "./Images/logo.png";

export default function TopPage({ firstItemRef }) {
  const downloadMyResume = () => {
    const pdfUrl = MughilarasuResume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mughilarasu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
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
              sx={{ background: "#2596be", m:1 }}
              onClick={() =>
                (window.location = `mailto:mughilarasu15@gmail.com`)
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
              sx={{ background: "#2596be", m:1 }}
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
              sx={{ background: "#2596be", m:1 }}
              onClick={() =>
                window.open("https://twitter.com/mughilarasu15", "_blank")
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
              sx={{ background: "#2596be", m:1 }}
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
          <Tooltip title="View my artworks">
            <Avatar
              sx={{ background: "#2596be", m:1 }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1Ejc2WMNp-eSb0kF8enBnZbRGrSdUxoFm",
                  "_blank"
                )
              }
            >
              <IconButton aria-label="GitHubIcon" color="inherit">
                <CollectionsIcon />
              </IconButton>
            </Avatar>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Download My Resume">
            <Avatar sx={{ background: "#2596be", m:1 }}>
              <IconButton
                aria-label="GetAppIcon"
                color="inherit"
                onClick={downloadMyResume}
              >
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
  );
}
