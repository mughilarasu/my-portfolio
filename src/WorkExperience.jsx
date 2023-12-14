import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

export default function WorkExperience() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ display: "block" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box sx={{ display: "block" }}>
            <Typography
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
              component={Button}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/megamic-electronics-pvt-ltd/",
                  "_blank"
                )
              }
            >
              <ArrowRight sx={{ m: "-6px" }} /> Megamic Electronics Pvt Ltd
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "500" }}>
              Software Developer (Dec 2018 - Oct 2021)
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li style={{ padding: 4 }}>
                I joined as a Associate Software Developer mainly i was focusing
                on Frontend development with React JS, Redux, Material UI &
                Highcharts.
              </li>
              <li style={{ padding: 4 }}>
                Later i got my hands into little bit of backend development with
                Django and Postgres SQL and i have developed few API's.
              </li>
              <li style={{ padding: 4 }}>
                I had chance to explore AWS services like dynamo db, conginito
                (using amplify).
              </li>
              <li style={{ padding: 4 }}>
                Then i promoted to Software Developer i started developing
                mobile applications using React Native (CLI & Expo).
              </li>
              <li style={{ padding: 4 }}>
                I have good experience in highcharts which we use for data
                visualization.
              </li>
              <li style={{ padding: 4 }}>
                I got opportunity to work with raspberry pi which will act as
                Remote monitoring unit (RMU) which is attached to solar plant
                which we install. we will monitor RMU using mobile app which i
                developed. i have experience in React Native for both IOS and
                Android
              </li>
              <li style={{ padding: 4 }}>
                <a
                  href="http://solarnxt.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: "0px 4px" }}
                >
                  solarnxt.com
                </a>
                This is our product we build so many sub products around this
                which is available in both web and mobile. I handled frontend
                part of all our products and lead a team of 2 people
              </li>
              <li style={{ padding: 4 }}>
                I was giving new ideas to enhance our product, planning vision
                and mission developing for new features, doing code reviews, bug
                fixes, optimizing and mentoring our team
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box sx={{ display: "block" }}>
            <Typography
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
              component={Button}
              onClick={() => window.open("https://feniceenergy.com/", "_blank")}
            >
              <ArrowRight sx={{ m: "-6px" }} /> SunEdison (Fenice Energy)
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "500" }}>
              Software Developer (Nov 2021 - Mar 2023)
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <>
              <ul>
                <li style={{ padding: 4 }}>
                  Megamic electronics was acquired by SILRES Energy Solutions
                  Private Limited and SILRES have a brand named SunEdison (now
                  rebranded to Fenice energy) and merged into one entity.
                </li>
                <li style={{ padding: 4 }}>
                  I was retained by Fenice energy and continued my role with a
                  team of 4 people as lead.
                </li>
                <li style={{ padding: 4 }}>
                  I looked after the project what we have developed in Megamic
                  electronics as well as new project in Fenice energy also which
                  is our own product.
                </li>
                <li style={{ padding: 4 }}>
                  In Fenice energy i was working as a lead frontend engineer in
                  SunEdison one (now changed to Fenice energy one)
                </li>
                <li style={{ padding: 4 }}>
                  Fenice energy one is a Solar asset management platform where
                  we can track end to end from solar plant installation enquiry
                  to solar plant installation that includes no of solar sites,
                  about the team, documents & materials, progress, payment
                  details, issue tracking and solar plant monitoring.
                </li>
                <li style={{ padding: 4 }}>
                  I was giving new ideas to enhance our product, planning vision
                  and mission developing for new features, doing code reviews,
                  bug fixes, optimizing and mentoring our team
                </li>
              </ul>
            </>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Box sx={{ display: "block" }}>
            <Typography
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
              component={Button}
              onClick={() => window.open("https://www.saama.com/", "_blank")}
            >
              <ArrowRight sx={{ m: "-6px" }} /> Saama Technologies
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "500" }}>
              Senior Software Engineer (Mar 2023 - Present)
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <>
              <ul>
                <li style={{ padding: 4 }}>
                  Saama Technologies operates as a clinical data and analytics
                  company. I joined here as a Senior Software Engineer in R&D
                  engineering.
                </li>
                <li style={{ padding: 4 }}>
                  Saama Technologies and Pfizer is jointly developing a product
                  called SIGMA.
                </li>
                <li style={{ padding: 4 }}>
                  SIGMA will transform and accelerate how SPA SMEs generate
                  study specifications, analysis data and statistical results,
                  convert and analyze trial data, collaborate with stakeholders,
                  and exchange data and results within Pfizer as well as with
                  regulatory agencies and external collaborators.
                </li>
                <li style={{ padding: 4 }}>
                  I will be doing POC for the complex tasks, code reviews,
                  picking up user stories, bug fixing, interacting with
                  stakeholders explaining my R&D work. My work is mostly
                  involving in R&D
                </li>
              </ul>
            </>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
