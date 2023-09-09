import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { addData } from "../../redux/dataSlice";
import Modal from "@mui/material/Modal";
import { AiFillFileAdd } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    id: "",
    name: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalChanges = (prop, event) => {
    setModalData({
      ...modalData,
      ...{ [prop]: event.target.value },
    });
  };
  const handleAddData = () => {
    const newModalData = { ...modalData, id: Number(modalData.id) };
    setModalData({
      name: "",
      id: "",
    });
    dispatch(addData(newModalData));

    localStorage.setItem("Data", JSON.stringify(newModalData));

    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        startIcon={<AiFillFileAdd />}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            type="number"
            value={modalData.id}
            onChange={(e) => handleModalChanges("id", e)}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            type="text"
            variant="outlined"
            value={modalData.name}
            onChange={(e) => handleModalChanges("name", e)}
          />

          <Button variant="outlined" onClick={handleAddData}>
            ADD
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
