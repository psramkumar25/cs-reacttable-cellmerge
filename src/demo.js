import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

const sample = [
  { name: "apple", detail: ["a", "b", "c", "d"] },
  { name: "banana", detail: ["a", "b"] }
];

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2}>Approve</TableCell>
              <TableCell rowSpan={2} align="center">
                Date
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Emp id
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Emp Name
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Shift
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Cost Center
              </TableCell>

              <TableCell colSpan={2} align="center">
                In
              </TableCell>
              <TableCell colSpan={2} align="center">
                Out
              </TableCell>

              <TableCell rowSpan={2} align="center">
                Action
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>

      <br />
      <hr />
      <br />

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Fruit</TableCell>
              <TableCell align="right">Buyers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sample.map((item) => (
              <Fragment>
                <TableRow>
                  <TableCell rowSpan={item.detail.length + 1}>
                    {item.name}
                  </TableCell>
                </TableRow>
                {item.detail.map((detail) => (
                  <TableRow>
                    <TableCell>{detail}</TableCell>
                  </TableRow>
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
