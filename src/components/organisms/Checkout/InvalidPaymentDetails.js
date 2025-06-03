import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { InvalidPaymentIcon } from "../../../assets/icons";

const InvalidPaymentDetails = ({ setModal }) => {
  return (
    <Stack alignItems="center" gap={0.75} py={1.5} sx={{ textAlign: "center" }}>
      <InvalidPaymentIcon />
      <Typography variant="header" pt={1}>
        Invalid Payment Details
      </Typography>
      <Typography variant="modal_description">
        Your agent mobile number doesn’t match the invoice to be paid. Please contact your supervisor to
        confirm and try again.
      </Typography>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setModal(false)}
        sx={{ borderRadius: "8px", p: 1, letterSpacing: 1, my: 0.75, mt: 2.5 }}>
        Ok
      </Button>
    </Stack>
  );
};

export default InvalidPaymentDetails;
