import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./components/pages";
import { Badge, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import SvhScreen from "./components/pages/SvhScreen";
import LvhScreen from "./components/pages/LvhScreen";
import DvhScreen from "./components/pages/DvhScreen";
import Nav from "./components/atoms/Nav";
import { FacebookInit } from "./utils/FacebookInit";
import { useReactiveVar } from "@apollo/client";
import { psidVar } from "./graphql/reactiveVars";

const App = () => {
  return (
    <>
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
  return (
    <Stack p={1}>
      <Typography variant="title">Webyou</Typography>
    </Stack>
  );
};

const DefaultFooter = () => <Stack p={1}>DefaultFooter</Stack>;

const ScreenContainer = ({ vh = "100vh", children, header, footer, content, ...props }) => {
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
