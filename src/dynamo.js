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
  },
  th: {
    margin: "1px",
    border: "1px solid black"
  },
  td: {
    margin: "1px",
    border: "1px solid grey"
  }
}));

const rowHeaders = [
  { group: "Notes", params: ["Planning Notes", "Runtime Notes"] },
  { group: "4 Roll", params: ["System", "Rol Type", "Plate Roll"] },
  { group: "Pump", params: ["FlowRate"] },
  { group: "Material", params: ["Input Film", "Coating Solution"] }
];

const conditions = ["1"];

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.th} colSpan={2}>
                {""}
              </TableCell>
              {conditions.map((cond) => (
                <TableCell
                  className={classes.th}
                  colSpan={2}
                >{`Condition ${cond}`}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowHeaders.map((row) => (
              <TableRow>
                <TableHead>
                  <TableCell
                    className={classes.th}
                    rowSpan={row.params.length + 1}
                  >
                    {row.group}
                  </TableCell>
                </TableHead>
                {row.params.map((p) => (
                  <TableRow>
                    <TableCell className={classes.th}>{p}</TableCell>
                  </TableRow>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
