import { useEffect, useState } from "react";

function MessengerWebview() {
  const [psid, setPsid] = useState();
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pageId = process.env.REACT_APP_PAGE_ID;

    if (!pageId) {
      setError("REACT_APP_PAGE_ID is not defined.");
      return;
    }

    const interval = setInterval(() => {
      if (window.MessengerExtensions) {
        clearInterval(interval);

        window.MessengerExtensions.getContext(
          pageId,
          (context) => {
            setPsid(context.psid);
            setIsReady(true);
            console.log("Messenger context:", context);
          },
          (err) => {
            console.error("MessengerExtensions.getContext failed", err);
            const errMsg =
              typeof err === "string" ? err : err?.message || JSON.stringify(err, null, 2);
            setError(`getContext failed: ${errMsg}`);
          }
        );
      }
    }, 100);

    setTimeout(() => {
      if (!window.MessengerExtensions) {
        clearInterval(interval);
        setError("MessengerExtensions SDK not available. Are you inside Messenger Webview?");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const closeWebview = () => {
    if (window.MessengerExtensions) {
      window.MessengerExtensions.requestCloseBrowser(
        () => console.log("Webview closed"),
        (err) => {
          console.error("Failed to close webview", err);
          const errMsg =
            typeof err === "string" ? err : err?.message || JSON.stringify(err, null, 2);
          setError(`requestCloseBrowser failed: ${errMsg}`);
        }
      );
    } else {
      setError("MessengerExtensions not available. Cannot close webview.");
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Messenger Webview Debug</h2>
      <p>
        <strong>User Agent:</strong> {navigator.userAgent}
      </p>
      
      pageId:{process.env.REACT_APP_PAGE_ID}
      {error && (
        <div style={{ color: "red", marginBottom: "1rem", whiteSpace: "pre-wrap" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      {isReady ? (
        <>
          <p>
            <strong>PSID:</strong> {psid}
          </p>
        </>
      ) : !error ? (
        <p>Loading Messenger context...</p>
      ) : null}
      <button onClick={closeWebview}>Close Webview</button>
    </div>
  );
}

export default MessengerWebview;
