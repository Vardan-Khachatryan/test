import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { BasicModal } from "../modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../../redux/dataSlice";
import { EditModal } from "../editModal/EditModal";

export const MyTable = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="left">
                {" "}
                <BasicModal />
              </TableCell>
              <TableCell align="left" size="small">
                <EditModal />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((obj) => {
              return (
                <TableRow
                  key={obj.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {obj.id}
                  </TableCell>
                  <TableCell>{obj.name}</TableCell>
                  <TableCell align="right" size="small">
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(obj.id)}
                    />
                  </TableCell>

                  <TableCell align="right" size="small">
                    <BasicModal />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
