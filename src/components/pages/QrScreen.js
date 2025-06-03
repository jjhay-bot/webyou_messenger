import { useReactiveVar } from "@apollo/client";
import { ButtonFooter, Header } from "../molecules";
import { Card, CardHeader, CardMedia, Stack, Typography } from "@mui/material";
import { agentInfoVar, loadingVar } from "../../graphql/reactiveVars";
import { ProgressBar } from "../atoms";
import { NextIcon } from "../../assets/icons";
import numeral from "numeral";
import { usePaymentActions } from "../../graphql/hooks";
import { AppScreen } from "../templates";

const QrScreen = () => {
  const loading = useReactiveVar(loadingVar);
  const agentInfo = useReactiveVar(agentInfoVar);

  const { verifyCustomerPayment } = usePaymentActions();

  if (loading) return <ProgressBar />;

  return (
    <AppScreen bgcolor="#EFF0F6" sx={{ px: 0, maxWidth: 425 }}>
      <Header title="Accept Payment" />

      <Stack sx={{ maxWidth: 425 }}>
        <Typography variant="header" p={4} textAlign="center">
          Ask store to pay by scanning the QR code below
        </Typography>

        <Stack alignItems="center">
          <Card sx={{ borderRadius: "16px", maxWidth: "320px" }}>
            <CardHeader
              title={
                <Typography variant="name" textAlign="center">
                  {agentInfo.agent_name}
                </Typography>
              }
              sx={{ bgcolor: "#FFD122", textAlign: "center", p: 1.5 }}
            />
            <Stack px={2} py={1} alignItems="center">
              <CardMedia sx={{ width: 260, aspectRatio: 1 }} image={agentInfo.qr_url} title="QRPh" />
              <Typography variant="amount" textAlign="center" sx={{ fontWeight: 300, pb: 1 }}>
                ₱{numeral(agentInfo["amount_to_pay"])?.format("0,0.00")}
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Stack>

      <ButtonFooter
        title="Verify customer payment"
        iconEnd={<NextIcon />}
        onClick={verifyCustomerPayment}
      />
    </AppScreen>
  );
};

export default QrScreen;
