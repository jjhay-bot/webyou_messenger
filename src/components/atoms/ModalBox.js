import { Stack, Dialog, Slide } from "@mui/material";
import { forwardRef } from "react";

export const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalBox = ({ modal, setModal, children, sx }) => {
  return (
    <Dialog
      open={modal}
      onClose={() => setModal(false)}
      TransitionComponent={Transition}
      transitionDuration={400}
      sx={{
        width: "100vw !important",
        "& .MuiDialog-paper": { borderRadius: "12px", m: 3, maxWidth: "320px" },
      }}>
      <Stack
        sx={{
          minHeight: 175,
          ...sx,
        }}
        gap={1.25}
        px={3}
        py={1}>
        {children}
      </Stack>
    </Dialog>
  );
};

export default ModalBox;
