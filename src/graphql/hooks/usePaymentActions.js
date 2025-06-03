import { useReactiveVar } from "@apollo/client";
import { loadingVar, paymentDetailsVar, validAccountVar } from "../reactiveVars";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { QR_CODE } from "../../config";
import numeral from "numeral";

const usePaymentActions = () => {
  const navigate = useNavigate();
  const { agent_mobile_number, invoice_number, amount_expected } = useReactiveVar(validAccountVar);
  const { transaction_id } = useReactiveVar(paymentDetailsVar);

  const checkPaymentDetails = async ({ data, onError }) => {
    try {
      const fetchRequest = async () => {
        if (agent_mobile_number === data.agent_mobile_number && invoice_number === data.invoice_number) {
          const params = {
            ...data,
            agent_name: "Agent Oggy",
            qr_url: QR_CODE,
          };
          // remove reason_variation incase use back on the payment form
          delete params.reason_variation;

          const partialPayment = numeral(data.amount_to_pay).value() < amount_expected;
          sessionStorage.setItem("agentInfoVar", JSON.stringify(params));
          await navigate(partialPayment ? "/invoice" : "/qr-code");
        } else {
          onError();
          console.log("Invalid Payment Details");
        }
        setTimeout(() => {
          loadingVar(false);
        }, 2000);
        return;
      };

      fetchRequest();
    } catch (e) {
      console.log(`Error: ${e}`);
    } finally {
    }
  };

  const verifyCustomerPayment = async () => {
    const transationCreated = Date.now();
    loadingVar(true);
    setTimeout(() => {
      const params = { created_at: transationCreated, transaction_id: "1789560030" };
      sessionStorage.setItem("paymentDetailsVar", JSON.stringify(params));
      paymentDetailsVar(params);
      loadingVar(false);
      navigate("/confirmation");
    }, 2000);
  };

  const downloadReceipt = (source) => {
    html2canvas(source).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `Transaction#${transaction_id}.png`;
      link.click();
    });
  };

  return { checkPaymentDetails, verifyCustomerPayment, downloadReceipt };
};
export default usePaymentActions;
