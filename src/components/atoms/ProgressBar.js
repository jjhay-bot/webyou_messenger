import { CircularProgress, Box, Typography, Stack } from "@mui/material";
import { circularProgressClasses } from "@mui/material/CircularProgress";

const FacebookCircularProgress = (props) => {
  return (
    <Box>
      <CircularProgress
        variant="determinate"
        sx={{ color: "#fff" }}
        size={60}
        thickness={5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          animationDuration: "600ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={60}
        thickness={5}
        {...props}
      />
    </Box>
  );
};

export const ProgressBar = ({ loading = true }) => {
  const loadingMessage = ["Validating payment details... ", "Please do not exit the browser."];

  return (
    loading && (
      <Stack position="fixed" top="37.5vh" sx={{ left: "50vw" }} mx={-2.5} zIndex={1} direction="column">
        <FacebookCircularProgress />
        <Stack
          sx={{ width: "100vw", mx: 2.5, transform: "translateX(-50vw)", textAlign: "center", mt: 3 }}>
          {loadingMessage.map((m, i) => (
            <Typography variant="label" key={i}>
              {m}
            </Typography>
          ))}
        </Stack>
      </Stack>
    )
  );
};

export default ProgressBar;
