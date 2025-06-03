import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons";
import { Grid, IconButton, Typography } from "@mui/material";

const Header = ({ title = "", sx }) => {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <Grid container alignItems="center" gap={2} sx={{ background: "#fff", ...sx }}>
      <IconButton size="large" onClick={goBack}>
        <BackIcon />
      </IconButton>
      <Typography variant="header">{title}</Typography>
    </Grid>
  );
};

export default Header;
