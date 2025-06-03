import { Button, Grid } from "@mui/material";

const ButtonFooter = ({ title = "", onClick, iconStart, iconEnd, sx }) => {
  return (
    <Grid
      container
      sx={{
        position: "fixed",
        bottom: 0,
        background: "#fff",
        px: 2,
        py: 1.5,
        pb: 3.5,
        maxWidth: 422.5,
        borderTop: "1px solid #EFF0F6",
        ...sx
      }}>
      <Button
        onClick={onClick}
        fullWidth
        size="large"
        color="primary"
        variant="contained"
        startIcon={iconStart}
        endIcon={iconEnd}
        sx={{ borderRadius: "12px", p: 1.75, letterSpacing: "1px", fontWeight: 700 }}>
        {title}
      </Button>
    </Grid>
  );
};

export default ButtonFooter;
