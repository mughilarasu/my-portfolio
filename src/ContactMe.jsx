import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


export default function ContactMe() {
  const [quoteDetails, setQuoteDetails] = React.useState({
    name: "",
    phone_number: "",
    email: "",
    message: "",
  });
  let subject = `mail from ${quoteDetails.name}, phone number: ${quoteDetails.phone_number}, email: ${quoteDetails.email}`;
  let body = `${quoteDetails.message}`;
  return (
    <Box sx={{
      marginBottom:'32px'}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             // width: "50vw",
              textAlign: "center",
            }}
          >
            <form noValidate autoComplete="off" sx={{width:'50ch !important'}}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                style={{
                  margin: 1,
                  width: "50vw",
                }}
                value={quoteDetails.name}
                onChange={(e) => {
                  setQuoteDetails((state) => ({
                    ...state,
                    name: e.target.value,
                  }));
                }}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
                style={{
                  margin: 1,
                  width: "50vw",
                }}
                value={quoteDetails.phone_number}
                onChange={(e) => {
                  setQuoteDetails((state) => ({
                    ...state,
                    phone_number: e.target.value,
                  }));
                }}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                style={{
                  margin: 1,
                  width: "50vw",
                }}
                value={quoteDetails.email}
                onChange={(e) => {
                  setQuoteDetails((state) => ({
                    ...state,
                    email: e.target.value,
                  }));
                }}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                style={{
                  margin: 1,
                  width: "50vw",
                }}
                value={quoteDetails.message}
                onChange={(e) => {
                  setQuoteDetails((state) => ({
                    ...state,
                    message: e.target.value,
                  }));
                }}
              />
              <br />
              <br />
              <Button
                variant="contained"
                sx={{color:'white',background:'#2596be', "&:hover": {
                  background: "#2596be",
                  color:'white',
                },}}
                onClick={() =>
                  (window.location = `mailto:mughilarasu15@gmail.com?subject=${subject} &body=${body}`)
                }
              >
                Submit
              </Button>
            </form>
          </div>
      
    </Box>
  );
}
