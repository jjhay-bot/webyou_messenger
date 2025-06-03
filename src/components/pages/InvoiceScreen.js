import { Divider, Grid, Stack, Typography } from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import { agentInfoErrorsVar, loadingVar } from "../../graphql/reactiveVars";
import { ProgressBar, SearchInput } from "../atoms";
import { AppScreen } from "../templates";
import { ButtonFooter, Header } from "../molecules";
import numeral from "numeral";
import { agentInfoVar } from "../../graphql/reactiveVars";
import { validAccountVar, reasonListVar } from "../../graphql/reactiveVars";
import { NextIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const InvoiceScreen = () => {
  const navigate = useNavigate();
  const loading = useReactiveVar(loadingVar);
  const agentInfo = useReactiveVar(agentInfoVar);
  const validAccount = useReactiveVar(validAccountVar);
  const reasonList = useReactiveVar(reasonListVar);

  const onChange = (_, value) => {
    agentInfoVar({ ...agentInfo, reason_variation: value?.reason });
  };

  const onSubmit = () => {
    if (!agentInfo?.reason_variation) {
      return agentInfoErrorsVar({ reason: "Reason for Variation is required" });
    }
    loadingVar(true);
    sessionStorage.setItem("agentInfoVar", JSON.stringify(agentInfo));
    setTimeout(() => {
      loadingVar(false);
      navigate("/qr-code");
    }, 2000);
  };

  if (loading) return <ProgressBar />;

  return (
    <AppScreen sx={{ px: 3 }}>
      <Header sx={{ ml: -2 }} />

      <Typography variant="title" mt={1}>
        Accept Payment
      </Typography>

      <Typography variant="name" px={0.5} mt={2.5}>
        Invoice No. {agentInfo.invoice_number}
      </Typography>

      <Stack
        mt={1.5}
        gap={1}
        py={1.5}
        sx={{
          bgcolor: "#F7F7FC",
          borderRadius: "12px",
        }}>
        <InfoField
          label="Amount Expected"
          value={`₱${numeral(validAccount.amount_expected).format("0,0.00")}`}
        />
        <Divider sx={{ opacity: 0.25 }} />
        <InfoField
          label="Amount Inputted"
          value={`₱${numeral(agentInfo.amount_to_pay).format("0,0.00")}`}
          sx={{ fontWeight: 300 }}
        />
      </Stack>

      <Stack pt={1}>
        <Typography variant="name" px={0.5} mt={2.5}>
          Reason for Variation
        </Typography>
        <SearchInput
          options={reasonList}
          onChange={onChange}
          placeholder="Select a Reason"
          name="reason"
          value={{
            reason: agentInfo["reason_variation"],
          }}
        />
      </Stack>
      <ButtonFooter title="Continue" iconEnd={<NextIcon />} onClick={onSubmit} sx={{ mx: -3 }} />
    </AppScreen>
  );
};

const InfoField = ({ label, value, sx }) => {
  return (
    <Grid container justifyContent="space-between" sx={{ px: 2, maxWidth: "100%" }}>
      <Typography variant="body3">{label}</Typography>
      <Typography variant="body4" sx={{ ...sx }}>
        {value}
      </Typography>
    </Grid>
  );
};

export default InvoiceScreen;
