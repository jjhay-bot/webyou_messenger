import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { CloseIcon, DividerIcon, DownloadIcon, ReceiptBgImg, SuccessBgImg } from "../../assets/icons";
import { AppScreen } from "../templates";
import { ButtonFooter } from "../molecules";
import useFormActions from "../../graphql/hooks/useFormActions";
import { format } from "date-fns";
import { useReactiveVar } from "@apollo/client";
import { agentInfoVar, paymentDetailsVar } from "../../graphql/reactiveVars";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import usePaymentActions from "../../graphql/hooks/usePaymentActions";

const ConfirmationScreen = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const { resetAgentInfo } = useFormActions();
  const { downloadReceipt } = usePaymentActions();

  const paymentDetails = useReactiveVar(paymentDetailsVar);
  const agentInfo = useReactiveVar(agentInfoVar);

  useEffect(() => {
    if (!paymentDetails?.created_at) navigate("/qr-code");
  }, []);

  const time = paymentDetails?.created_at
    ? format(new Date(paymentDetails?.created_at), "HH:mm:ss")
    : "";

  const date = paymentDetails?.created_at
    ? format(new Date(paymentDetails.created_at), "MMM dd, yyyy")
    : "";

  return (
    <AppScreen bgcolor="#EFF0F6" sx={{ px: 0, maxWidth: 425 }}>
      <Stack alignItems="center">
        <Grid container sx={{ maxWidth: 350 }}>
          <IconButton size="large" onClick={resetAgentInfo}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Stack>

      <Stack alignItems="center" ref={ref}>
        <ReceiptBgImg />
        <Stack
          mt={3}
          gap={2.25}
          sx={{
            position: "absolute",
            maxWidth: 425,
            width: "100%",
            textAlign: "center",
            alignItems: "center",
          }}>
          <SuccessBgImg />
          <Typography variant="header">Payment received from store</Typography>
          <Typography variant="subtitle2">Transaction #{paymentDetails.transaction_id}</Typography>

          <Grid container justifyContent="flex-start" sx={{ mt: 1.25, px: 2, maxWidth: 325 }}>
            <Typography variant="subtitle1">Payment details</Typography>
          </Grid>

          <InfoField label="Date paid" value={date} />
          <InfoField label="Transaction time" value={time} />
          <InfoField label="Invoice ID" value={agentInfo["invoice_number"]} />
          <DividerIcon />

          <InfoField label="Agent ID" value={agentInfo["agent_mobile_number"]} />
          <InfoField label="Amount" value={agentInfo["amount_to_pay"]} />
        </Stack>
      </Stack>
      <ButtonFooter
        title="Download receipt"
        iconStart={<DownloadIcon />}
        onClick={() => downloadReceipt(ref.current)}
      />
    </AppScreen>
  );
};

const InfoField = ({ label, value }) => {
  return (
    <Grid container justifyContent="space-between" sx={{ px: 2, maxWidth: 325 }}>
      <Typography variant="body1" color="#6E7191">
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Grid>
  );
};

export default ConfirmationScreen;
