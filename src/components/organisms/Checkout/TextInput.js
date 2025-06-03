import { Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import { themeInput } from "../../../assets/theme";
import { useFormActions } from "../../../graphql/hooks";
import { useReactiveVar } from "@apollo/client";
import { agentInfoErrorsVar, agentInfoVar } from "../../../graphql/reactiveVars";
import { snakeCase } from "lodash";
import numeral from "numeral";

const TextInput = (props) => {
  const agentInfo = useReactiveVar(agentInfoVar);
  const agentInfoErrors = useReactiveVar(agentInfoErrorsVar);

  const { setAgentInfo } = useFormActions();

  const { name = "", placeholder = "", InputProps = {}, type, autoFocus } = props;
  const onChange = ({ target }) => {
    if (snakeCase(name) === "amount_to_pay") {
      if (+target.value > 0) {
        agentInfoErrorsVar({ ...agentInfoErrors, amount_to_pay: null });
      }
      const isValidAmountInput = target.value.match(/^\d*\.?\d{0,2}$/);
      const newValue = isValidAmountInput ? { [snakeCase(target.name)]: target.value } : {};
      setAgentInfo({ ...agentInfo, ...newValue });
    } else {
      if (snakeCase(target.name) === "agent_mobile_number" && target.value.length === 11) {
        agentInfoErrorsVar({ ...agentInfoErrors, agent_mobile_number: null });
      }
      if (snakeCase(target.name) === "invoice_number" && target.value.length >= 5) {
        agentInfoErrorsVar({ ...agentInfoErrors, invoice_number: null });
      }
      setAgentInfo({ ...agentInfo, [snakeCase(target.name)]: target.value });
    }
  };

  const amountFormat = () => {
    if (snakeCase(name) === "amount_to_pay") {
      setAgentInfo({
        ...agentInfo,
        amount_to_pay: numeral(agentInfo["amount_to_pay"])?.format("0,0.00"),
      });
    } else return;
  };

  const numberFormat = () => {
    if (snakeCase(name) === "amount_to_pay") {
      setAgentInfo({
        ...agentInfo,
        amount_to_pay: +numeral(agentInfo["amount_to_pay"]).value(),
      });
    }
  };

  return (
    <Stack spacing={0.75}>
      <Typography variant="label">{name}</Typography>
      <ThemeProvider theme={themeInput}>
        <TextField
          type={type || "number"}
          name={name}
          placeholder={placeholder}
          InputProps={InputProps}
          autoFocus={autoFocus}
          value={agentInfo[snakeCase(name)] || ""}
          onChange={onChange}
          onBlur={amountFormat}
          onFocus={numberFormat}
          helperText={agentInfoErrors[snakeCase(name)]}
          error={!!agentInfoErrors[snakeCase(name)]}
        />
      </ThemeProvider>
    </Stack>
  );
};

export default TextInput;
