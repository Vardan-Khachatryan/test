import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { editData } from "../../redux/dataSlice";

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

export const EditModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editsData, setEditData] = useState({
    id: "",
    name: "",
    parent_id: !null ? "" : undefined,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEdit = (prop, event) => {
    setEditData({
      ...editsData,
      ...{ [prop]: event.target.value },
    });
  };
  const handleAddData = () => {
    const newEditData = {
      ...editsData,
      id: Number(editsData.id),
      parent_id: Number(editsData.parent_id),
    };
    setEditData({
      id: "",
      name: "",
      parent_id: !null ? "" : undefined,
    });
    dispatch(editData(newEditData));

    localStorage.setItem("Data", JSON.stringify(newEditData));

    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<BsPencil />}
        onClick={handleOpen}
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
            value={editsData.id}
            onChange={(e) => handleEdit("id", e)}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            type="text"
            variant="outlined"
            value={editsData.name}
            onChange={(e) => handleEdit("name", e)}
          />

          <TextField
            id="outlined-basic"
            label="Parent_id"
            type="text"
            variant="outlined"
            value={editsData.parent_id}
            onChange={(e) => handleEdit("parent_id", e)}
          />

          <Button variant="outlined" onClick={handleAddData}>
            EDIT
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
