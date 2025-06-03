import { useReactiveVar } from "@apollo/client";
import { agentInfoErrorsVar, agentInfoVar } from "../reactiveVars";
import { useNavigate } from "react-router-dom";
import { QR_CODE } from "../../config";

const useFormActions = () => {
  const navigate = useNavigate();
  const agentInfo = useReactiveVar(agentInfoVar);

  const isValidInputs = async () => {
    const errors = {};

    if (+agentInfo["amount_to_pay"] <= 0) {
      errors.amount_to_pay = "Please enter the amount to pay.";
    }

    if (agentInfo["agent_mobile_number"].length !== 11) {
      errors.agent_mobile_number = "Please enter a valid 11 digit mobile number";
    }
    if (!agentInfo["agent_mobile_number"].match(/^09/)) {
      errors.agent_mobile_number = "Please use format: 091XXXXXXXX";
      //  "Sundan ang ganitong format: 091XXXXXXX ";
    }
    // if (agentInfo["invoice_number"].length < 5) {
    //   errors.invoice_number = "Invoice number should have at least 5 characters.";
    // }
    agentInfoErrorsVar(errors);
    return await errors;
  };

  const setAgentInfo = async (data = {}) => {
    try {
      agentInfoVar(data);
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  const resetAgentInfo = async () => {
    try {
      agentInfoVar({
        agent_mobile_number: "",
        invoice_number: "",
        amount_to_pay: "",
        agent_name: "Agent Oggy",
        qr_url: QR_CODE,
      });
      sessionStorage.clear();
      navigate("/", { replace: true });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  return { isValidInputs, setAgentInfo, resetAgentInfo };
};
export default useFormActions;
