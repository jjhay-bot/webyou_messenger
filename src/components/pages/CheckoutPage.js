import { Button, InputAdornment, Stack, Typography } from "@mui/material";
import { TextInput } from "../organisms/Checkout";
import { isEmpty, some } from "lodash";
import { useReactiveVar } from "@apollo/client";
import { agentInfoErrorsVar, agentInfoVar } from "../../graphql/reactiveVars";
import { invoiceListVar, loadingVar } from "../../graphql/reactiveVars";
import { ProgressBar, ModalBox, SearchInput } from "../atoms";
import { useFormActions, usePaymentActions } from "../../graphql/hooks";
import { useModal } from "../atoms/helpers/useModal";
import InvalidPaymentDetails from "../organisms/Checkout/InvalidPaymentDetails";
import { AppScreen } from "../templates";
import { NextIcon } from "../../assets/icons";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const loading = useReactiveVar(loadingVar);
  const agentInfo = useReactiveVar(agentInfoVar);
  const invoiceList = useReactiveVar(invoiceListVar);

  const { modal, setModal } = useModal(false);
  const { isValidInputs } = useFormActions();
  const { checkPaymentDetails } = usePaymentActions();

  const [keypadOpen, setKeypadOpen] = useState(false);

  const disabledButton = some(agentInfo, isEmpty);

  const onChange = (_, value) => {
    agentInfoVar({ ...agentInfo, invoice_number: value?.invoice_number });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    loadingVar(true);
    const errors = await isValidInputs();
    const onError = async () => setModal(true);

    if (!isEmpty(errors)) {
      agentInfoErrorsVar(errors);
      loadingVar(false);
    } else {
      checkPaymentDetails({ data: agentInfo, onError });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < window.screen.height * 0.8) {
        setKeypadOpen(true);
      } else {
        setKeypadOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) return <ProgressBar />;

  return (
    <AppScreen sx={{ px: 3 }} onSubmit={onSubmit}>
      <Stack sx={{ height: "calc(95vh - 44px)" }} justifyContent="space-between">
        <Stack pt={3} spacing={2}>
          <Typography variant="title">Accept Payment</Typography>

          <TextInput name="Agent Mobile Number" autoFocus />

          <SearchInput
            options={invoiceList}
            label="Invoice Number"
            onChange={onChange}
            type="number"
            value={{
              invoice_number: agentInfo["invoice_number"],
            }}
          />

          <TextInput
            type="text"
            name="Amount to Pay"
            placeholder="00.00"
            InputProps={{
              inputProps: {
                style: { fontWeight: 700 },
                inputMode: "numeric",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Typography variant="icon" sx={{ color: "#ED5A29", fontWeight: 600 }}>
                    ₱
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
          <Stack
            sx={{
              borderBottom: "1px solid #EFF0F6",
              my: 2.5,
              mb: 1.5,
            }}
          />

          <Button
            type="submit"
            size="large"
            variant="contained"
            disabled={disabledButton}
            sx={{ p: 1.75, letterSpacing: 1, fontWeight: 700 }}
            endIcon={<NextIcon />}>
            Continue
          </Button>
        </Stack>

        {!keypadOpen && (
          <Stack alignItems="center">
            <Button
              size="large"
              sx={{ width: "100%", maxWidth: 220, my: 0.5, borderRadius: "6px", fontSize: "small" }}
              href="http://dashboard.saripay.com/"
              type="a"
              target="_blank">
              View Today’s Collections
            </Button>
          </Stack>
        )}
      </Stack>

      <ModalBox modal={modal} setModal={setModal}>
        <InvalidPaymentDetails setModal={setModal} />
      </ModalBox>
    </AppScreen>
  );
};

export default CheckoutPage;
