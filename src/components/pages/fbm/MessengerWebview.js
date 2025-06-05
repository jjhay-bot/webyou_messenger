import { useState } from "react";
import { useReactiveVar } from "@apollo/client"; // Import useReactiveVar
import { psidVar } from "../../../graphql/reactiveVars"; // Import psidVar
import { closeWebView } from "../../../utils/FacebookInit";

function MessengerWebview() {
  const [error, setError] = useState(null); // setError might still be needed for other errors
  const psid = useReactiveVar(psidVar); // Retrieve PSID using useReactiveVar

  // Removed local closeWebview function

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
      {/* Kept error display */}
      {psid && !error && ( // Display PSID if available and no error
        <p>
          <strong>PSID:</strong> {psid}
        </p>
      )}
      {!psid && !error && ( // Show loading or alternative message if PSID not yet available
        <p>PSID not available yet. It should appear if FacebookInit is successful.</p>
      )}
      <button onClick={closeWebView}>Close Webview</button>
    </div>
  );
}

export default MessengerWebview;
