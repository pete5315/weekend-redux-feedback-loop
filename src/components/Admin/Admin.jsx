import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/";
import { useEffect } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Admin() {
  //set up a local state for storing the information from the server
  let [feedbackHistory, setHistory] = useState([]);
  const history = useHistory();
  //useEffect to load the history from the server
  useEffect(() => {
    getHistory();
  }, []);
  //function to get the history from the server
  function getHistory() {
    axios
      .get("/api/history")
      .then((response) => {
        console.log("Client GET success", response);
        setHistory(response.data);
      })
      .catch((error) => {
        console.log("Error in client side GET", error);
        alert("Server error, please try again later.");
      });
  }
  //function to delete information from the server
  function handleDelete(id) {
    axios
      .delete("/api/delete/" + id)
      .then((response) => {
        console.log("Client DELETE success", response);
        getHistory();
      })
      .catch((error) => {
        console.log("Error in client side DELETE", error);
        alert("Server error, please try again later.");
      });
  }
  //function to update the flagged status on the server
  function handleFlag(id, flag) {
    flag = !Boolean(flag);
    axios
      .put(`/api/flag/${id}`, { flag })
      .then((response) => {
        getHistory();
      })
      .catch((err) => {
        //error catching
        alert("error in put");
        console.log(err);
      });
  }

  return (
    //Table elements below are from Material UI
    <div>
      <h1>Feedback Results!</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Feeling</TableCell>
              <TableCell>Understanding</TableCell>
              <TableCell>Support</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Flag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbackHistory.map((instance) => (
              <TableRow key={instance.id}>
                <TableCell>{instance.feeling}</TableCell>
                <TableCell>{instance.understanding}</TableCell>
                <TableCell>{instance.support}</TableCell>
                <TableCell>{instance.comments}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(instance.id)}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell>
                  {instance.flagged ? (
                    <Button
                      onClick={() => handleFlag(instance.id, instance.flagged)}
                      variant="contained"
                    >
                      {" "}
                      Flagged
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleFlag(instance.id, instance.flagged)}
                      variant="contained"
                    >
                      {" "}
                      Unflagged
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Admin;
