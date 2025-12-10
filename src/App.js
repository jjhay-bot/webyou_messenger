import { Routes, Route, Link } from "react-router-dom";
import { Badge, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import Nav from "./components/atoms/Nav";
import { psidVar } from "./graphql/reactiveVars";
import CloseWebviewTest from "./components/pages/CloseWebviewTest";
import SuccessFbmLinking from "./components/pages/SuccessFbmLinking";

const Home = () => (
  <Stack p={3} gap={2}>
    <Typography variant="h6">Messenger webview helpers</Typography>
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      Quick links to test closing behaviors.
    </Typography>
    <Stack direction="row" gap={2} flexWrap="wrap">
      <a href={`${window.location.origin}/success-fbm-linking`} target="_top">
        link
      </a>
      <Button onClick={() => window.open(`${window.location.origin}/success-fbm-linking`, "_blank")}>
        Open Link
      </Button>
      <Button component={Link} to="/close-webview-test" variant="contained">
        Close Webview Test
      </Button>
      <Button component={Link} to="/success-fbm-linking" variant="outlined">
        Success FBM Linking
      </Button>
    </Stack>
  </Stack>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/close-webview-test" element={<CloseWebviewTest />} />
      <Route path="/success-fbm-linking" element={<SuccessFbmLinking open />} />
    </Routes>
  );
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
