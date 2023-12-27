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

  const [error, setError] = React.useState({
    name: false,
    phone_number: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    let valid = true;

    // Name validation
    if (quoteDetails.name.trim() === "") {
      setError((prevState) => ({ ...prevState, name: true }));
      valid = false;
    } else {
      setError((prevState) => ({ ...prevState, name: false }));
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(quoteDetails.email.trim())) {
      setError((prevState) => ({ ...prevState, email: true }));
      valid = false;
    } else {
      setError((prevState) => ({ ...prevState, email: false }));
    }

    // Phone number validation (checking for numbers and length)
    const phonePattern = /^\d+$/;
    if (
      !phonePattern.test(quoteDetails.phone_number.trim()) ||
      quoteDetails.phone_number.trim().length < 10
    ) {
      setError((prevState) => ({ ...prevState, phone_number: true }));
      valid = false;
    } else {
      setError((prevState) => ({ ...prevState, phone_number: false }));
    }

    // Message validation
    if (quoteDetails.message.trim() === "") {
      setError((prevState) => ({ ...prevState, message: true }));
      valid = false;
    } else {
      setError((prevState) => ({ ...prevState, message: false }));
    }

    if (valid) {
      // If all fields are valid, proceed with form submission
      let subject = `mail from ${quoteDetails.name}, phone number: ${quoteDetails.phone_number}, email: ${quoteDetails.email}`;
      let body = `${quoteDetails.message}`;

      window.location = `mailto:mughilarasu15@gmail.com?subject=${subject} &body=${body}`;
      // Reset form fields after successful submission
      // setQuoteDetails({
      //   name: "",
      //   phone_number: "",
      //   email: "",
      //   message: "",
      // });
    }
  };
  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: "50vw",
          textAlign: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{ width: "50ch !important" }}
        >
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
          {error.name && (
            <p style={{ color: "red", margin: "0" }}>
              Please enter a valid name.
            </p>
          )}
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
          {error.phone_number && (
            <p style={{ color: "red", margin: "0" }}>
              Please enter a valid phone number (at least 10 digits).
            </p>
          )}
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
          {error.email && (
            <p style={{ color: "red", margin: "0" }}>
              Please enter a valid email address.
            </p>
          )}
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
          {error.message && (
            <p style={{ color: "red", margin: "0" }}>Please enter a message.</p>
          )}
          <br />
          <Box
            sx={{
              marginBottom: "24px",
            }}
          >
            <Button
              type="submit" // Specify type as submit
              variant="contained"
              sx={{
                color: "white",
                background: "#2596be",
                "&:hover": {
                  background: "#2596be",
                  color: "white",
                },
              }}
              // onClick={() =>
              //   (window.location = `mailto:mughilarasu15@gmail.com?subject=${subject} &body=${body}`)
              // }
            >
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </Box>
  );
}
