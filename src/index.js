import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import history from "./history";
import ScrollToTop from "./ScrollToTop";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter history={history}>
      <ScrollToTop>
      <App />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
