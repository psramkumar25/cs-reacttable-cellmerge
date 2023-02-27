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
    // padding: "10px",
    fontWeight: "bold",
    border: "1px solid red"
  },
  // v: {
  //   transform: "rotate(-90deg)"
  // },
  td: {
    // padding: "10px",
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
                >{`Condition-${cond}`}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowHeaders.map((row, i) =>
              row.params.map((p, j) => (
                <TableRow>
                  {j === 0 ? (
                    <TableCell
                      className={`${classes.th} ${classes.v}`}
                      rowSpan={row.params.length}
                    >
                      {row.group}
                    </TableCell>
                  ) : null}
                  <TableCell className={classes.th}>{p}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
/*
cityValues.map((city, i) => {
  const stateName = i === 0 ? <td rowSpan={cityValues.length + 1}>{state.name}</td> : null
  const stateAbbreviation = i === 0 ? <td rowSpan={cityValues.length + 1}>{state.abbreviation}</td> : null
  return (
    <tr key={i}>
      {stateName}
      {stateAbbreviation}
      <td>{city.name}</td>
      <td>{city.metroPopulation}</td>
    </tr>
  )
})
*/
