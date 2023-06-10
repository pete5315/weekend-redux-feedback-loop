import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function RatingComponent(feedbackText) {

  let [feedback, setNewFeedback] = useState({ feedbackType: "" });
  const dispatch=useDispatch();
  const history = useHistory()
  feedbackText=feedbackText.feedbackText

  const handleNewFeedback = (value, event) => {
    event.preventDefault();
    let newFeedback={}
    newFeedback[feedbackText.type]=value;
    console.log(newFeedback);
    setNewFeedback({
      newFeedback,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    feedback=feedback.newFeedback
    console.log(feedback);
    dispatch({
      type: "SEND_FEEDBACK",
      payload: feedback
    })
    history.push(`/`+feedbackText.nextFeedback)

  };

  return (
    <div>
      <h1>{feedbackText.sentence}</h1>
        <label>{feedbackText.type} (1-5)? </label>
        <input
          onChange={(event) => handleNewFeedback(event.target.value, event)}
          type="integer"
          placeholder="name"
          value={feedback.feedbackType}
        />
        <button onClick={handleSubmit} type="submit">Next</button>
    </div>
  );
}

export default RatingComponent;
