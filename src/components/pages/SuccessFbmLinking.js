import { useReactiveVar } from "@apollo/client";
import { Button, Dialog, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { linkFbmSuccessVar } from "../../graphql/reactiveVars";

// Helper function to load the Messenger Extensions SDK
const loadMessengerSDK = () => {
  return new Promise((resolve, reject) => {
    if (window.MessengerExtensions) {
      resolve("Messenger Extensions SDK already loaded");
    } else {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/messenger.Extensions.js";
      script.onload = () => resolve("Messenger Extensions SDK loaded successfully");
      script.onerror = err => reject("Error loading Messenger Extensions SDK");
      document.body.appendChild(script);
    }
  });
};

const SuccessFbmLinking = ({ open }) => {
  const [isMessengerReady, setIsMessengerReady] = useState(false);
  const fallbackCloseTimer = useRef(null);
  const success = useReactiveVar(linkFbmSuccessVar);
  const [status, setStatus] = useState("Loading Messenger SDK...");

  const gobackToMessenger = () => {
    const fallbackClose = () => {
      if (fallbackCloseTimer.current) return;

      fallbackCloseTimer.current = setTimeout(() => {
        setStatus("Fallback: attempting in-tab close");
        try {
          // Try to close the same tab without redirecting elsewhere
          window.open("", "_self");
          window.close();
        } catch (error) {
          console.error("Fallback close failed", error);
          setStatus(`Fallback close failed: ${error?.message || error}`);
        } finally {
          fallbackCloseTimer.current = null;
        }
      }, 250);
    };

    if (window.MessengerExtensions && isMessengerReady) {
      setStatus("Calling requestCloseBrowser");
      window.MessengerExtensions.requestCloseBrowser(
        () => {
          console.log("Webview closed successfully");
          setStatus("Closed via MessengerExtensions");
        },
        err => {
          console.error("Error closing webview", err);
          setStatus(`requestCloseBrowser error: ${err?.code || err?.message || err}`);
          fallbackClose();
        },
      );
    } else {
      setStatus("MessengerExtensions not ready; attempting fallback close");
      fallbackClose();
    }
  };

  useEffect(() => {
    window.extAsyncInit = () => {
      setIsMessengerReady(true);
      setStatus("extAsyncInit fired; MessengerExtensions ready");
    };

    loadMessengerSDK()
      .then(message => {
        console.log(message);
        setStatus(message);
        if (window.MessengerExtensions) {
          setIsMessengerReady(true);
        }
      })
      .catch(error => {
        console.error(error);
        setStatus(error?.message || "Error loading Messenger SDK");
      });

    return () => {
      if (fallbackCloseTimer.current) {
        clearTimeout(fallbackCloseTimer.current);
        fallbackCloseTimer.current = null;
      }
      window.extAsyncInit = undefined;
    };
  }, []);

  // Wait for MessengerExtensions to be ready before showing the UI, so the button can use requestCloseBrowser
  if (!isMessengerReady) return <Typography>{status}</Typography>;

  return success ? (
    <Dialog
      open={open}
      maxWidth="sm"
      sx={{ "& .MuiDialog-paper": { borderRadius: "12px", maxWidth: { xs: "360px" } } }}
    >
      <Stack p={4} alignItems="center" gap={2}>
        <svg width="158" height="100" viewBox="0 0 158 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M79 58.4163L132.412 16.9122H99.6364L79 58.4163ZM79 58.4163L98.3358 99.9203H129.695L79 58.4163ZM157.817 41.4505L78.9711 58.4163L157.817 77.4631V41.4505ZM79 58.4163L25.5881 99.9203H58.3636L79 58.4163ZM28.2761 16.9122L79 58.4163L59.6642 16.9122H28.2761ZM79 58.4163L0.15387 39.3695V75.3532L79 58.4163Z"
            fill="#4CB896"
          />
          <path
            d="M79 58.4163L99.6364 16.9122H59.6642L79 58.4163ZM118.336 49.9479L157.846 41.4505V29.8894C157.846 22.7216 152.037 16.9122 144.869 16.9122H132.412L79 58.4163L117.903 50.0634C116.949 55.9018 114.463 61.4222 110.851 66.1333L79 58.4452L100.07 75.6711C96.5727 77.7521 92.9021 79.255 89.1448 80.1799L79 58.4163L68.3061 79.9487C64.4331 78.9082 60.7336 77.3185 57.352 75.2664L79 58.4452L46.5424 65.4107C43.1319 60.7574 40.7908 55.237 39.9526 48.9941L79 58.4163L28.276 16.9122H13.16C5.99216 16.9122 0.182739 22.7216 0.182739 29.8894V39.3695L39.6636 48.9073V49.7744C39.6347 55.5838 41.0799 61.1042 43.6522 66.0176L0.182739 75.3532V86.9142C0.182739 94.082 5.99216 99.8915 13.16 99.8915H25.617L53.7103 78.0701C57.3231 80.9314 61.4561 83.1568 65.9649 84.6598L58.3925 99.8915H98.3647L91.3703 84.891C95.7924 83.5037 99.9832 81.3938 103.683 78.5902L129.724 99.8915H144.84C152.008 99.8915 157.817 94.082 157.817 86.9142V77.4341L113.914 66.8269C115.648 63.6765 116.949 60.295 117.643 56.74C118.134 54.6879 118.307 52.3179 118.336 49.9479Z"
            fill="#007358"
          />
          <path
            d="M79.0001 7.69226C100.735 7.69226 118.365 24.2534 118.365 44.6586C118.365 65.0638 100.735 81.6539 79.0001 81.6539C57.2653 81.6539 39.6348 65.0927 39.6348 44.6586C39.6348 24.2245 57.2653 7.69226 79.0001 7.69226Z"
            fill="white"
          />
          <path
            d="M74.9536 68.0697C69.4044 64.8326 63.277 61.0175 55.9069 56.3352C53.6814 54.919 51.6293 52.8092 52.1495 49.8033C52.6698 46.7974 55.3288 45.8147 57.9878 47.4044C64.0285 51.075 69.3176 54.3121 74.0576 57.1735C80.9364 48.0981 87.8153 40.3233 97.671 34.6295C100.099 33.2132 104.116 33.7335 106.111 35.4676C108.105 37.2018 107.267 39.5429 104.781 40.9302C92.2952 47.9247 84.5493 56.5665 74.9536 68.0697Z"
            fill="#007358"
          />
          <path
            d="M74.3178 64.2546C68.7685 61.0176 62.6411 57.2024 55.271 52.5202C53.0455 51.1039 50.9934 48.9941 51.5137 45.9882C52.0339 42.9824 54.693 41.9997 57.352 43.5893C63.3926 47.2599 68.6818 50.497 73.4218 53.3584C80.3006 44.283 87.1794 36.5082 97.0352 30.8144C99.463 29.3982 103.48 29.9184 105.475 31.6525C107.469 33.3867 106.631 35.7278 104.145 37.1151C91.6304 44.1095 83.8845 52.7514 74.3178 64.2546Z"
            fill="#4CB896"
          />
        </svg>

        <Stack alignItems="center" textAlign="center">
          <Typography variant="_h6">Account Linking successful!</Typography>
        </Stack>

        <Button
          variant="contained"
          fullWidth
          disableRipple
          disableElevation
          disableTouchRipple
          sx={{ mt: 1, p: 1 }}
          onClick={gobackToMessenger}
        >
          Go back to Messenger
        </Button>
      </Stack>
    </Dialog>
  ) : (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Stack alignItems="center" textAlign="center" sx={{ maxWidth: { xs: "360px" }, flex: 1, py: 10, px: 2 }}>
        <Stack flex={1} height="100%" py={8} alignItems="center" gap={2}>
          <svg width="158" height="100" viewBox="0 0 158 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M157.846 86.9286V29.8934C157.846 22.7243 152.035 16.9139 144.866 16.9139H13.1624C10.763 16.9139 8.5082 17.5787 6.60028 18.7061L151.284 98.2315C155.215 96.0056 157.875 91.7851 157.846 86.9286Z"
              fill="#E81C3A"
            />
            <path
              d="M6.5714 18.7061C2.72666 20.961 0.15387 25.1237 0.15387 29.9224V86.9575C0.15387 94.1266 5.96434 99.9371 13.1335 99.9371H144.866C147.179 99.9371 149.376 99.33 151.255 98.2604L6.5714 18.7061Z"
              fill="#FF5E65"
            />
            <path
              d="M118.358 45.417C118.127 55.8238 112.894 65.8259 104.829 72.3301C79.7371 92.739 39.9888 76.6663 39.6708 44.4052V49.782C39.613 70.6535 58.2586 87.5357 80.3441 86.7552C89.2766 86.495 98.0935 83.2862 104.974 77.5913C111.362 72.3301 116.045 64.9297 117.664 56.7777C118.531 53.0197 118.358 48.25 118.358 44.4052C118.358 44.7232 118.358 45.0701 118.358 45.417Z"
              fill="#E81C3A"
            />
            <path
              d="M79.0143 7.69231C100.753 7.69231 118.387 24.2565 118.387 44.6654C118.387 65.0743 100.753 81.6674 79.0143 81.6674C57.2757 81.6674 39.6419 65.1032 39.6419 44.6654C39.6419 24.2275 57.2757 7.69231 79.0143 7.69231Z"
              fill="white"
            />
            <path
              d="M80.1706 20.2961C76.4126 20.2961 73.6375 22.2907 73.9266 24.7479C74.9383 34.2297 75.9501 43.7114 76.9619 53.2221C77.2799 55.6793 78.6963 57.6739 80.1706 57.6739C81.6449 57.6739 83.0614 55.6793 83.3794 53.2221C84.3912 43.7403 85.403 34.2586 86.4147 24.7479C86.7038 22.2907 83.9287 20.2961 80.1706 20.2961ZM80.1706 62.3859C77.5689 62.3859 75.4298 64.4961 75.4298 67.1267C75.4298 69.7573 77.54 71.8676 80.1706 71.8676C82.8013 71.8676 84.9115 69.7573 84.9115 67.1267C84.9115 64.4961 82.7723 62.3859 80.1706 62.3859Z"
              fill="#E81C3A"
            />
            <path
              d="M78.6963 18.3303C74.9383 18.3303 72.1632 20.325 72.4523 22.7822C73.464 32.2639 74.4758 41.7457 75.4876 51.2564C75.8056 53.7135 77.222 55.7081 78.6963 55.7081C80.1706 55.7081 81.5871 53.7135 81.9051 51.2564C82.9169 41.7746 83.9287 32.2928 84.9404 22.7822C85.2295 20.325 82.4544 18.3303 78.6963 18.3303ZM78.6963 60.4201C76.0946 60.4201 73.9555 62.5304 73.9555 65.161C73.9555 67.7916 76.0657 69.9019 78.6963 69.9019C81.327 69.9019 83.4372 67.7916 83.4372 65.161C83.4372 62.5304 81.327 60.4201 78.6963 60.4201Z"
              fill="#FF5E65"
            />
          </svg>

          <Typography variant="_h6">Something went wrong!</Typography>

          <Typography variant="_subtitle1" sx={{ color: "#4E4B66", fontWeight: 400 }}>
            Hindi na-link ang account mo sa Messenger. Maaaring subukan ulit mamaya.
          </Typography>
        </Stack>

        <Button
          variant="contained"
          fullWidth
          disableRipple
          disableElevation
          disableTouchRipple
          sx={{ mt: 1, p: 1 }}
          onClick={gobackToMessenger}
        >
          Go back to Messenger
        </Button>
      </Stack>
    </Stack>
  );
};

export default SuccessFbmLinking;
