
import { useEffect, useState } from "react";

function MessengerWebview() {
  const [psid, setPsid] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (window.MessengerExtensions) {
      window.MessengerExtensions.getContext(
        "YOUR_PAGE_ID", // replace with your FB Page ID
        (context) => {
          setPsid(context.psid);
          setIsReady(true);
          console.log("Messenger context:", context);
        },
        (err) => {
          console.error("MessengerExtensions getContext failed", err);
        }
      );
    } else {
      console.warn("MessengerExtensions not available");
    }
  }, []);

  const closeWebview = () => {
    if (window.MessengerExtensions) {
      window.MessengerExtensions.requestCloseBrowser(
        () => {
          console.log("Webview closed");
        },
        (err) => {
          console.error("Failed to close webview", err);
        }
      );
    }
  };

  return (
    <div>
      {isReady ? (
        <>
          <p>PSID: {psid}</p>
          <button onClick={closeWebview}>Close Webview</button>
        </>
      ) : (
        <p>Loading Messenger context...</p>
      )}
    </div>
  );
}

export default MessengerWebview;
