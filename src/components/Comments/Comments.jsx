import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  //local state for comments as they are updated on the DOM
  let [comments, setNewComments] = useState({ comments: "" });
  //need store information to load on page  
  const currentInfo = useSelector((store) => store);
  //useEffect loads state if it already exists on the store
  useEffect(() => {
    let x = currentInfo.currentInfo.comments;
    if (x === undefined) {
      return;
    }
    let newFeedback = {};
    newFeedback.comments = x;
    setNewComments(newFeedback);
  }, []);
  //updates local state as data is entered on DOM
  const handleNewComments = (value, event) => {
    event.preventDefault();
    setNewComments({
      comments: value,
    });
  };
  //sends local state to store on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comments.comments);
    if (comments.comments === "") {
      alert("comment required");
      return;
    }
    dispatch({
      type: "SEND_FEEDBACK",
      payload: comments,
    });
    history.push("/review");
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <label>Comments? </label>
      <TextField
        onChange={(event) => handleNewComments(event.target.value, event)}
        type="text"
        placeholder="name"
        value={comments.comments}
        sx={{ marginRight: "10px" }}
      />
      <Button onClick={handleSubmit} type="submit" variant="contained">
        Next
      </Button>
      <br></br>
      <br></br>
      <Button onClick={() => history.push("/support")} variant="contained">
        Back
      </Button>
    </div>
  );
}

export default Comments;
