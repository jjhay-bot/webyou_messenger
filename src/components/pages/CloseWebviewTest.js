import { useEffect, useRef, useState } from "react";

const loadMessengerSDK = () =>
  new Promise((resolve, reject) => {
    if (window.MessengerExtensions) {
      resolve("Messenger Extensions SDK already loaded");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/messenger.Extensions.js";
    script.onload = () => resolve("Messenger Extensions SDK loaded successfully");
    script.onerror = err => reject(err);
    document.body.appendChild(script);
  });

const CloseWebviewTest = () => {
  const [status, setStatus] = useState("Loading Messenger SDK...");
  const [isMessengerReady, setIsMessengerReady] = useState(false);
  const fallbackCloseTimer = useRef(null);

  const closeWebview = () => {
    const fallbackClose = () => {
      if (fallbackCloseTimer.current) {
        setStatus("Fallback close debounced; waiting to finish...");
        return;
      }

      fallbackCloseTimer.current = setTimeout(() => {
        setStatus("Fallback: calling window.close()");
        try {
          window.close();
        } catch (error) {
          setStatus(`Fallback failed: ${error?.message || error}`);
        } finally {
          fallbackCloseTimer.current = null;
        }
      }, 250);
    };

    if (window.MessengerExtensions && isMessengerReady) {
      setStatus("Calling requestCloseBrowser...");
      window.MessengerExtensions.requestCloseBrowser(
        () => setStatus("Closed via MessengerExtensions"),
        err => {
          setStatus(`requestCloseBrowser error: ${err?.code || err?.message || err}`);
          fallbackClose();
        },
      );
    } else {
      setStatus("MessengerExtensions not ready; using fallback close");
      fallbackClose();
    }
  };

  useEffect(() => {
    window.extAsyncInit = () => {
      setStatus("extAsyncInit fired; MessengerExtensions ready");
      setIsMessengerReady(true);
    };

    loadMessengerSDK()
      .then(message => {
        setStatus(message);
        if (window.MessengerExtensions) {
          setIsMessengerReady(true);
        }
      })
      .catch(error => setStatus(`Error loading Messenger SDK: ${error?.message || error}`));

    return () => {
      if (fallbackCloseTimer.current) {
        clearTimeout(fallbackCloseTimer.current);
        fallbackCloseTimer.current = null;
      }
    };
  }, []);

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h2>Messenger Close Webview Test</h2>
      <p>Status: {status}</p>
      <button
        type="button"
        onClick={closeWebview}
        style={{
          marginTop: "12px",
          padding: "10px 16px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Close Webview
      </button>
    </div>
  );
};

export default CloseWebviewTest;
