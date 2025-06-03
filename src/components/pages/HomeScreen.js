import React, { useEffect } from "react";
import { ScreenContainer } from "../../App";
import { Stack } from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import { psidVar } from "../../graphql/reactiveVars";

const HomeScreen = () => {
  useEffect(() => {
    window.MessengerExtensions.getContext(
      process.env.REACT_APP_APP_ID,
      (result) => {
        console.log("Page-scoped ID:", result.psid);
      },
      (err) => {
        console.error("Failed to get context:", err);
      }
    );
  }, []);

  return (
    <ScreenContainer
      sx={{ bgcolor: "#f0f0" }}
      className="red"
      // header={false}
      // footer={false}
      // content={"content"}
    >
      <Stack sx={{ minHeight: "1000px" }} px={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia temporibus voluptatibus
        illo accusantium ea ad iste! Dolorum asperiores odit eius, illo sequi culpa, perferendis
        omnis, voluptate fugiat sapiente totam quos.
        <Stack pt={8} sx={{ color: "#666" }}>
          {window?.navigator?.userAgent}
        </Stack>
      </Stack>

      <Stack sx={{ bgcolor: "yellow" }}>end</Stack>
    </ScreenContainer>
  );
};

export default HomeScreen;
