import { makeVar } from "@apollo/client";
import theme from "../assets/theme";
import { QR_CODE } from "../config";

// UI
export const themeVar = makeVar(theme);
export const notificationVar = makeVar(false);
export const isDarkModeVar = makeVar(
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
);
export const loadingVar = makeVar(false);
export const loadingLocalVar = makeVar(true);

// Form / Client data
export const agentInfoVar = makeVar(
  JSON.parse(sessionStorage.getItem("agentInfoVar")) ?? {
    agent_mobile_number: "",
    invoice_number: "",
    amount_to_pay: "",
    agent_name: "Agent Oggy",
    qr_url: QR_CODE,
  }
);

export const agentInfoErrorsVar = makeVar({});

// valid account
export const validAccountVar = makeVar({
  agent_mobile_number: "09267105938",
  invoice_number: "12345",
  amount_expected: 1250,
});

// payment data
export const paymentDetailsVar = makeVar(
  JSON.parse(sessionStorage.getItem("paymentDetailsVar")) ?? {
    created_at: null,
    transaction_id: null,
  }
);

export const invoiceListVar = makeVar([]);
export const reasonListVar = makeVar([]);


export const psidVar = makeVar('test');

export const linkFbmSuccessVar = makeVar(false);
export const linkFbmLoadingVar = makeVar(true);