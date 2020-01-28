import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Nav from "./Nav.js";
import rows from "./data.js";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tablecell: {
    fontSize: "12pt"
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <header className="bg-primary py-5 mb-5">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <h1 className="display-4 text-white mt-5 mb-2">
                <br />
                <div>
                  This website summarize a list of weed detection datasets.
                </div>
              </h1>
              <br/>
              <p className="lead mb-5 text-white-50" id="website-description">
                It takes a lot of effort to find an appropriate dataset for a data science/machine learning project. 
                To make it easier for data scientists whose interest lies in automatic weed detection, this website was created as 
                a collection of weed datasets, each with its own clear description and source details. 
              </p>
            </div>
          </div>
        </div>
      </header>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead id="headrow">
            <TableRow>
              <TableCell className={classes.tablecell}>ID</TableCell>
              <TableCell align="left" className={classes.tablecell}>
                Dataset
              </TableCell>
              <TableCell align="left" className={classes.tablecell}>
                Number of species
              </TableCell>
              <TableCell align="left" className={classes.tablecell}>
                Number of images
              </TableCell>
              <TableCell align="left" className={classes.tablecell}>
                Number of plants
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tablecell}
                >
                  {row.id}
                </TableCell>
                <TableCell align="left" className={classes.tablecell}>
                  <Link to={`/des/${row.id}`}>{row.name}</Link>
                </TableCell>
                <TableCell align="left" className={classes.tablecell}>
                  {row.num_of_species}
                </TableCell>
                <TableCell align="left" className={classes.tablecell}>
                  {row.num_of_images}
                </TableCell>
                <TableCell align="left" className={classes.tablecell}>
                  {row.num_of_plants}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
