import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import award from "./Images/award apr.jpg";
import promo from "./Images/promo.jpg";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Achievements() {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState({
    title: "",
    content: "",
  });

  const handleClickOpen = (value) => {
    setOpen(true);
    setContent(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              border: "1px solid white",
              "&:hover": {
                border: "1px solid #2596be",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              handleClickOpen({
                title: "Shining star award (November 2023)",
                content: (
                  <>
                    <img
                      src={award}
                      alt="award"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </>
                ),
              });
            }}
          >
            <CardMedia component="img" height="200" image={award} alt="award" />
            <CardContent sx={{ paddingBottom: "0px !important" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
                sx={{ fontSize: "1.25rem" }}
              >
                Shining star award <br /> November 2023 <br /> (Saama
                technologies)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              border: "1px solid white",
              "&:hover": {
                border: "1px solid #2596be",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              handleClickOpen({
                title: "Shining star award (April 2023)",
                content: (
                  <>
                    <img
                      src={award}
                      alt="award"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </>
                ),
              });
            }}
          >
            <CardMedia component="img" height="200" image={award} alt="pc" />
            <CardContent sx={{ paddingBottom: "0px !important" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
                sx={{ fontSize: "1.25rem" }}
              >
                Shining star award <br /> April 2023 <br /> (Saama technologies)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              border: "1px solid white",
              "&:hover": {
                border: "1px solid #2596be",
                cursor: "pointer",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={promo}
              alt="peripherals"
            />
            <CardContent sx={{ paddingBottom: "0px !important" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
                sx={{ fontSize: "1.25rem" }}
              >
                Promoted from Associate Software Developer to Software Developer{" "}
                <br /> March 2021 <br /> (Megamic Electronics Pvt Ltd)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title">
          <span>{content.title}</span>{" "}
          <IconButton
            sx={{ float: "right", padding: 0.5 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={"paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {content.content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
