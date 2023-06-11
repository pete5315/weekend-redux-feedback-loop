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
  const history = useHistory();

  useEffect(() => {
    getHistory();
  }, []);

  function getHistory() {
    console.log("get");
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
  };

  
  function handleDelete(id) {
    axios
      .delete("/api/delete/"+id)
      .then((response) => {
        console.log("Client DELETE success", response);
        getHistory();      
      })
      .catch((error) => {
        console.log("Error in client side DELETE", error);
        alert("Server error, please try again later.");
      });
  };

  function handleFlag(id, flag) {
    console.log(flag);
    flag=!flag
    axios
      .put(`/api/flag/${id}`, {flag}) //id tells the server what data to update, data has the new number of likes
      .then((response) => {
        getHistory(); //update the DOM after we update the number of likes on the server
      })
      .catch((err) => {
        //error catching
        alert("error in put");
        console.log(err);
      });
  };

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
                  <Button onClick={() => (handleDelete(instance.id))} variant="contained">
                    Delete
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => (handleFlag(instance.id, instance.flag))} variant="contained">
                    Flag
                  </Button>
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
