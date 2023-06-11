import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


function RatingComponent({ feedbackText }) {
  let [feedback, setNewFeedback] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const currentInfo = useSelector((store) => store);

  useEffect(() => {
    let x = currentInfo.currentInfo[feedbackText.type];
    if (x === undefined) {
      return;
    }
    let newFeedback = {};
    newFeedback[feedbackText.type] = x;
    setNewFeedback(newFeedback);
  }, []);

  const handleNewFeedback = (value, event) => {
    event.preventDefault();
    let newFeedback = {};
    newFeedback[feedbackText.type] = value;
    console.log(newFeedback);
    setNewFeedback(newFeedback);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback);
    let checker = feedback[feedbackText.type];
    console.log(checker);
    if (checker === "" || checker === undefined) {
      alert("empty input field");
      return;
    } else if (checker < 1 || checker > 5) {
      alert("please use the 1-5 rating scale");
      return;
    }
    console.log("trying to send feedback: ", feedback);
    dispatch({
      type: "SEND_FEEDBACK",
      payload: feedback,
    });
    history.push(`/` + feedbackText.nextFeedback);
  };

  return (
    <div>
      <h1>{feedbackText.sentence}</h1>
      <label>
        {feedbackText.type.charAt(0).toUpperCase() + feedbackText.type.slice(1)}{" "}
        (1-5)?{" "}
      </label>
      <TextField
        onChange={(event) => handleNewFeedback(event.target.value, event)}
        type="number"
        placeholder="name"
        min="1"
        max="5"
        value={feedback[feedbackText.type]}
        sx={{ marginRight: "10px" }}
        
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
      >
        Next
      </Button>
      <br></br>
      <br></br>
      <Button
        onClick={() => history.push("/" + feedbackText.previousFeedback)}
        variant="contained"
      >
        Back
      </Button>
    </div>
  );
}

export default RatingComponent;
