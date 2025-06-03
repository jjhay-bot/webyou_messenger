import { agentInfoVar, invoiceListVar, loadingLocalVar, reasonListVar } from "../reactiveVars";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { isEmpty, some } from "lodash";
import { invoicesList, reasonList } from "../../assets/data";

const useUiActions = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const agentInfo = useReactiveVar(agentInfoVar);

  const isLogin = async () => {
    try {
      if (pathname !== "/" && some(agentInfo, isEmpty)) {
        await navigate("/", { replace: true });
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    } finally {
      getInitialData();
      setTimeout(() => loadingLocalVar(false), 30);
    }
  };

  const getInitialData = () => {
    invoiceListVar(invoicesList);
    reasonListVar(reasonList);
  };

  return { isLogin, getInitialData };
};
export default useUiActions;
