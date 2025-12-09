import "./styles.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets";
// import Test from "./Test";
import CloseWebviewTest from './components/pages/CloseWebviewTest';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* <App /> */}
      <CloseWebviewTest />
    </ThemeProvider>
  </BrowserRouter>
);
