/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Pagination.scss";
import { TableRow } from "@material-ui/core";
import UserItem from "./UserItem";

export const PaginationRender = props => {
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.arr.length / props.todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number, index) => {
    return (
      <li
        className={
          props.currentPage === number ? "page-item active " : "page-item "
        }
        key={index}
        onClick={props.handleClick}
      >
        <a className="page-link" id={number}>
          {number}
        </a>
      </li>
    );
  });

  return (
    <ul className="pagination justify-content-center py-5">
      {renderPageNumbers}
    </ul>
  );
};

// item render
export const ItemRender = ({
  currentPage,
  todosPerPage,
  handleClickOpen,
  arr
}) => {
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = arr.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((user, index) => {
    return (
      <TableRow key={index} hover selected>
        <UserItem user={user} index={index} handleClickOpen={handleClickOpen} />
      </TableRow>
    );
  });
  return <>{renderTodos}</>;
};
