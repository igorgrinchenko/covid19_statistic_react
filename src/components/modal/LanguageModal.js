import { React } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

import { checkLanguage, shouldUse } from "../../constants/constants";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

const LanguageModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {checkLanguage}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {shouldUse}
        </Typography>
      </Box>
    </Modal>
  );
};

export default LanguageModal;
