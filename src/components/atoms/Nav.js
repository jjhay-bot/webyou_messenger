import { Badge, Stack } from "@mui/material";
import { toLower } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav({ top }) {
  const navigate = useNavigate();

  const color = ["primary", "secondary", "info", "success"];

  return (
    <Stack
      sx={{ position: "absolute", top: top, right: 34, zIndex: 1, transform: "translateY(-50%)" }}
      spacing={4}>
      {["svh", "dvh", "lvh", "vh"].map((x, i) => (
        <Badge
          className="hover"
          color={color[i]}
          badgeContent={
            <Stack
              sx={{
                minWidth: "22px",
                alignItems: "center",
                fontSize: "13px",
                letterSpacing: "1px",
                p: 1,
              }}>
              {x}
            </Stack>
          }
          onClick={() => navigate(toLower(`/${x === "vh" ? "" : x}`))}
        />
      ))}
    </Stack>
  );
}
