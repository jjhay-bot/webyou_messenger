import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./components/pages";
import { Badge, Box, Button, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import { useReactiveVar } from "@apollo/client";
// import { loadingLocalVar } from "./graphql/reactiveVars";
// import { useUiActions } from "./graphql/hooks";
import SvhScreen from "./components/pages/SvhScreen";
import LvhScreen from "./components/pages/LvhScreen";
import DvhScreen from "./components/pages/DvhScreen";
import Nav from "./components/atoms/Nav";
import { useEffect, useState } from "react";
import { FacebookInit } from "./utils/FacebookInit";
import { useReactiveVar } from "@apollo/client";
import { psidVar } from "./graphql/reactiveVars";

const App = () => {
  const [loadingStatus, setLoadingStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    window.extAsyncInit = function () {
      setLoadingStatus("success");
      console.log("Messenger Extensions SDK loaded");
    };

    // Optional: handle errors
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/messenger.Extensions.js";
    script.async = true;
    document.body.appendChild(script);

    script.onerror = () => {
      setLoadingStatus("failed");
      setErrorMessage("Failed to load Messenger Extensions SDK");
    };
  }, []);

  return (
    <>
      {loadingStatus === "loading" && <p>Loading...</p>}
      {loadingStatus === "success" && (
        <p>Messenger Extensions SDK loaded successfully!</p>
      )}
      {loadingStatus === "failed" && <p>Error: {errorMessage}</p>}

      <FacebookInit />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="svh" element={<SvhScreen />} />
          <Route path="lvh" element={<LvhScreen />} />
          <Route path="dvh" element={<DvhScreen />} />
          {/* <Route path="/invoice" element={<InvoiceScreen />} /> */}
          {/* <Route path="*" element={<CheckoutPage />} />  */}
        </Route>
      </Routes>
    </>
  );
};

const Layout = () => {
  return <Outlet />;
};

const DefaultHeader = ({ children }) => {
  const [color, setColor] = useState("primary");

  const colorArray = ["primary", "secondary", "info", "success"];
  const vh = ["100svh", "100dvh", "100lvh", "100vh"];

  const getColorIndex = (val) => {
    const index = vh.indexOf(val);
    return index !== -1 ? index : 0;
  };

  useEffect(() => {
    setColor(colorArray[getColorIndex(children)]);
  }, [children]);

  return (
    <Stack p={1}>
      <Typography variant="title">Webyou</Typography>
      {/* <Button variant="outlined" color={color} sx={{ fontWeight: "bold", letterSpacing: "0.25px" }}>
        {children || "DefaultHeader"}
      </Button> */}
    </Stack>
  );
};

const DefaultFooter = () => <Stack p={1}>DefaultFooter</Stack>;

const ScreenContainer = ({
  vh = "100vh",
  children,
  header,
  footer,
  content,
  ...props
}) => {
  const supportsDvh = window.CSS && CSS.supports("(height: 100dvh)");
  const maxHeightUnit = supportsDvh ? vh : "100vh";
  const psid = useReactiveVar(psidVar);

  return (
    <Stack className="layout" height={maxHeightUnit} {...props}>
      <Nav top={`calc(${maxHeightUnit} / 2)`} />
      <Stack className="silver" flex={0}>
        {/* HEADERS */}
        {header ?? <DefaultHeader>{maxHeightUnit}</DefaultHeader>}

        <Badge sx={{ px: 1, color: "grey" }}>{psid}</Badge>
      </Stack>

      <Stack
        flex={1}
        sx={{ height: "100%", overflowY: "auto", maxWidth: "100%" }}
        className="green">
        {/* CONTENTS */}
        {children ?? content}
      </Stack>

      <Stack className="silver" flex={0}>
        {/* FOOTERS */}
        {footer ?? <DefaultFooter />}
      </Stack>
    </Stack>
  );
};

export { ScreenContainer, App };
export default App;
