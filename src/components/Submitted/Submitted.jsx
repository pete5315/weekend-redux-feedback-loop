import { useHistory } from "react-router-dom/";
import * as React from "react";
import Button from "@mui/material/Button";

function Submitted() {
  const history = useHistory();
  //returns user tp beginning when they click Leave New Feedback
  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      <h1>Feedback</h1>
      <h1>Thank You!</h1>
      <Button onClick={handleClick} variant="contained">
        Leave New Feedback
      </Button>
    </div>
  );
}

export default Submitted;
