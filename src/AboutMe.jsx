import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import photo from "./Images/image11.jpg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SchoolIcon from "@mui/icons-material/School";
const paperStyle = { padding: "16px", textAlign: "center" };
const AboutMe = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <img
            src={photo}
            alt="about us"
            style={{
              display: "flex",
              margin: "0px auto",
              width: "100%",
              maxWidth: 600,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ textAlign: "left", p: 2 }}>
            <Typography variant="subtitle1" gutterBottom component="div">
              Skilled Frontend Developer with over 5 years of experience in the
              IT industry, specializing in building mobile and web applications.
              Enthusiastic, motivated, hardworking, and dedicated to my work.
            </Typography>

            <div style={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <Paper sx={paperStyle}>
                    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ background: "#2596be" }}>
                            <SchoolIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Jaigopal Garodia Matriculation Higher Secondary School, Chennnai"
                          secondary={
                            <>
                              <span>2012</span>
                              <br />
                              <span
                                style={{ fontWeight: "bold", color: "black" }}
                              >
                                SSLC (84.6 %)
                              </span>
                            </>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ background: "#2596be" }}>
                            <SchoolIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Jaigopal Garodia Matriculation Higher Secondary School, Chennnai"
                          secondary={
                            <>
                              <span>2014</span>
                              <br />
                              <span
                                style={{ fontWeight: "bold", color: "black" }}
                              >
                                HSC (82.3 %)
                              </span>
                            </>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ background: "#2596be" }}>
                            <SchoolIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Jaya Engineering College, Chennnai"
                          secondary={
                            <>
                              <span>2014-2018</span>
                              <br />
                              <span
                                style={{ fontWeight: "bold", color: "black" }}
                              >
                                B.E COMPUTER SCIENCE (7.71 GPA)
                              </span>
                            </>
                          }
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutMe;
