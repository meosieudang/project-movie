import React from "react";
import { TableCell, Tooltip, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { connect } from "react-redux";
import {
  deleteUserRequest,
  getUser
} from "../../../store/actions/Admin/user/user";
const UserItem = ({
  user,
  index,
  getUser,
  deleteUserRequest,
  handleClickOpen
}) => {
  const onDelete = user => {
    if (window.confirm("Do you want delete it ?")) {
      deleteUserRequest(user);
    }
  };

  const handleClickOpenEdit = user => {
    getUser(user);
    handleClickOpen();
  };
  return (
    <>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{user.TaiKhoan}</TableCell>
      <TableCell>{user.MatKhau}</TableCell>
      <TableCell>{user.HoTen}</TableCell>
      <TableCell>{user.Email}</TableCell>
      <TableCell>{user.SoDT}</TableCell>
      <TableCell>{user.MaLoaiNguoiDung}</TableCell>
      <TableCell>
        <Tooltip title="Edit">
          <IconButton onClick={() => handleClickOpenEdit(user)}>
            <CreateIcon className="text-success" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton onClick={() => onDelete(user)}>
            <DeleteIcon className="text-danger" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </>
  );
};

export default connect(
  null,
  { deleteUserRequest, getUser }
)(UserItem);
