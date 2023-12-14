import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Chip from "@mui/material/Chip";
import WorkExperience from "./WorkExperience";
import { Tooltip } from "@mui/material";

const Skills = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ fontSize: "24px", color: "#333" }}
              >
                Primary Skills
              </ListSubheader>
            }
          >
            <ListItem>
              <Grid container spacing={2}>
                {[
                  "React JS",
                  "React Native",
                  "Redux",
                  "Material UI",
                  "Highcharts",
                  "JavaScript",
                  "HTML",
                  "CSS",
                ].map((sk, i) => {
                  return (
                    <Grid item xs={6} sm={3} md={3}>
                      <Tooltip title={sk}>
                        <Chip
                          label={sk}
                          sx={{
                            background: "#2596be",
                            color: "white",
                            width: "150px",
                          }}
                          key={i}
                        />
                      </Tooltip>
                    </Grid>
                  );
                })}
              </Grid>
            </ListItem>
          </List>

          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ fontSize: "24px", color: "#333" }}
              >
                Secondary Skills{" "}
                <span style={{ fontSize: "18px" }}>(Basic hands on)</span>
              </ListSubheader>
            }
          >
            <ListItem>
              <Grid container spacing={2}>
                {[
                  "AWS",
                  "Django",
                  "Node JS",
                  "Express JS",
                  "Mongo DB",
                  "Dynamo DB",
                  "Postgres",
                  "Sqlite",
                ].map((sk, i) => {
                  return (
                    <Grid item xs={6} sm={3} md={3}>
                      <Tooltip title={sk}>
                        <Chip
                          label={sk}
                          sx={{
                            background: "#2596be",
                            color: "white",
                            width: "150px",
                          }}
                          key={i}
                        />
                      </Tooltip>
                    </Grid>
                  );
                })}
              </Grid>
            </ListItem>
          </List>

          <List
            sx={{ bgcolor: "background.paper" }}
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ fontSize: "24px", color: "#333" }}
              >
                Tools
              </ListSubheader>
            }
          >
            <ListItem>
              <Grid container spacing={2}>
                {[
                  "VS Code",
                  "Sublime Text",
                  "GitHub",
                  "Bitbucket",
                  "Figma",
                  "Inkscape",
                  "Pycharm",
                  "Postman",
                  "Xcode",
                  "Android Studio",
                  "pgAdmin",
                  "Notepad++",
                  "Redux Developer Tools",
                  "React Developer Tools",
                  "Google Chrome Developer Tools",
                  "Facebook Pixel",
                  "Google (Search Console, Adwords)",
                ].map((sk, i) => {
                  return (
                    <Grid item xs={6} sm={3} md={3}>
                      <Tooltip title={sk}>
                        <Chip
                          label={sk}
                          sx={{
                            background: "#2596be",
                            color: "white",
                            width: "150px",
                          }}
                          key={i}
                        />
                      </Tooltip>
                    </Grid>
                  );
                })}
              </Grid>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ fontSize: "24px", color: "#333" }}
              >
                Work Experience
              </ListSubheader>
            }
          >
            <ListItem>
              <WorkExperience />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Skills;
