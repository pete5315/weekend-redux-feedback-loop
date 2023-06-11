import { useHistory } from "react-router-dom/";
import * as React from "react";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useState } from "react";

function Admin() {
  let [feedbackHistory, setHistory] = useState([]);

  useEffect(() => {
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
  }, []);

  const history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return (
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
                  <button>Delete</button>
                </TableCell>
                <TableCell>
                  <button>Flag</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleClick} variant="contained">
        Leave New Feedback
      </Button>
    </div>
  );
}

export default Admin;
