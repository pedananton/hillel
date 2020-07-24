import React from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@material-ui/core";
import ListItem from "./ListItem";
import { Link, useRouteMatch } from "react-router-dom";

function List({ users, user, onSave }) {
  const { url } = useRouteMatch();
  return (
    <>
      <button type="submit">
        <Link to={url + "/new"}>Add New</Link>
      </button>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <ListItem user={user} key={user.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = ({ users: { users } }) => ({
  users,
});

export default connect(mapStateToProps)(List);