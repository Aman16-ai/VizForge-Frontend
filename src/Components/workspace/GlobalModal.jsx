import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import {
  closeGlobalModal,
  selectGlobalModal,
} from "../../store/workspace/GlobalModalSlice";
import { useDispatch } from "react-redux";
import ItemList from "./Report/ItemList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "0.6rem",
  p: 3,
};

export default function GlobalModal() {
  const globalModal = useSelector(selectGlobalModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeGlobalModal());
  };

  return (
    <>
      <Modal
        open={globalModal.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full h-full flex flex-col">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create New Reports
            </Typography>
            <ItemList/>
          </div>
        </Box>
      </Modal>
    </>
  );
}
