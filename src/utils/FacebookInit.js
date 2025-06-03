// FacebookInit.tsx
import { useEffect } from "react";
import { psidVar } from "../graphql/reactiveVars";

export const FacebookInit = () => {
  useEffect(() => {
    const appId = process.env.REACT_APP_APP_ID;
    if (!appId) {
      throw new Error("Missing Facebook App ID");
    }
    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId,
        cookie: true,
        xfbml: true,
        version: "v19.0",
      });
    };

    // Dynamically load FB SDK script
    const fbScript = document.createElement("script");
    fbScript.src = "https://connect.facebook.net/en_US/sdk.js";
    fbScript.async = true;
    fbScript.defer = true;
    document.body.appendChild(fbScript);

    // Load Messenger Extensions SDK script
    const msScript = document.createElement("script");
    msScript.src = "https://connect.facebook.net/en_US/messenger.Extensions.js";
    msScript.async = true;
    msScript.defer = true;
    document.body.appendChild(msScript);

    // Check Messenger Extensions after SDK loads
    msScript.onload = () => {
      if (window.MessengerExtensions && window.MessengerExtensions.getContext) {
        psidVar("HELLO");
        window.MessengerExtensions.getContext(
          appId,
          (threadContext) => {
            console.log("PSID:", threadContext.psid);
            // You can save PSID here or call your backend
            psidVar("getContext");
          },
          (err) => {
            console.error("getContext error:", err);
          }
        );
      } else {
        console.warn("MessengerExtensions not available. Are you inside Messenger WebView?");
      }
    };
  }, []);

  return null;
};
