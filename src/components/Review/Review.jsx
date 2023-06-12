import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();
  //need to get info from Store to load on DOM
  const currentInfo = useSelector((store) => store);
  //formatting for the MUI list
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };
  //initiates post to server if all feedback is complete
  const handleSubmit = () => {
    //incomplete data handling
    if (Object.keys(currentInfo.currentInfo).length !== 4) {
      alert("You must complete all feedback");
      return;
    }
    axios
      .post("/api/send", {
        currentInfo,
      })
      .then((response) => {
        console.log("Client POST success", response);
        history.push("/submitted");
        dispatch({
          type: "CLEAR_FEEDBACK",
        });
      })
      .catch((error) => {
        console.log("Error in client side POST", error);
        alert("Server error, please try again later.");
      });
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Review your feedback</h1>
        <br></br>
        <br></br>

        <List
          sx={style}
          component="nav"
          aria-label="mailbox folders"
          justifyContent="center"
        >
          <ListItem button onClick={() => history.push("/")}>
            <ListItemText
              primary={`Feelings: ${currentInfo.currentInfo.feeling}`}
            />
          </ListItem>
          <Divider />
          <ListItem button divider onClick={() => history.push("/understanding")}>
            <ListItemText
              primary={`Understanding: ${currentInfo.currentInfo.understanding}`}
            />
          </ListItem>
          <ListItem button onClick={() => history.push("support")}>
            <ListItemText
              primary={`Support: ${currentInfo.currentInfo.support}`}
            />
          </ListItem>
          <Divider light />
          <ListItem button onClick={() => history.push("/comments")}>
            <ListItemText
              primary={`Comments: ${currentInfo.currentInfo.comments}`}
            />
          </ListItem>
        </List>
        <Button onClick={handleSubmit} variant="contained">
          SUBMIT
        </Button>
        <br></br>
        <Button onClick={() => history.push("/comments")} variant="contained">
          Back
        </Button>
      </Box>
    </div>
  );
}

export default Review;
