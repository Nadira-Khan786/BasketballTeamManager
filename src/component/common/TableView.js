import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import "./TableView.scss";
const TableView = (props) => {
  const { tableheader, tablebody } = props;
  return (
    <TableContainer className="table-container">
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        className="table-ctn"
      >
        <TableHead className="table-head">
          <TableRow className="table-head-row">
            {tableheader.map((item, ind) => {
              return (
                <TableCell className="table-head-cell" key={ind}>
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {!tablebody?.length ? (
            <TableRow className="table-body-row">
              <TableCell
                colSpan={tableheader?.length}
                className="table-body-cell"
              >
                No records
              </TableCell>
            </TableRow>
          ) : (
            tablebody?.map((row, index) => {
              return (
                <TableRow key={index} className="table-body-row">
                  {tableheader.map((item) => {
                    return (
                      <TableCell key={item}>
                        {item && item === "position"
                          ? row[item].join(" , ")
                          : row[item]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableView.propTypes = {
  tableheader: PropTypes.array,
  tablebody: PropTypes.array,
};

export default TableView;
