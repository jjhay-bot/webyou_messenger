import { Grid } from "@mui/material";

const Item = (props) => {
  const { content, children } = props;
  return (
    <Grid item {...props}>
      {content || children}
    </Grid>
  );
};

export default Item;
