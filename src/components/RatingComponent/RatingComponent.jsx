import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function RatingComponent({feedbackText}) {

  let [feedback, setNewFeedback] = useState({ feedbackType: "" });
  const dispatch=useDispatch();
  const history = useHistory()

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
    let checker = (feedback.newFeedback[feedbackText.type])
    if (checker==='') {
      alert('empty input field')
      return;
    } else if (checker<1 || checker>5) {
      alert('please use the 1-5 rating scale')
      return;
    }
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
        <label>{feedbackText.type.charAt(0).toUpperCase() + feedbackText.type.slice(1)} (1-5)? </label>
        <input
          onChange={(event) => handleNewFeedback(event.target.value, event)}
          type="number"
          placeholder="name"
          min="1"
          max="5"
          value={feedback.feedbackType}
        />
        <button onClick={handleSubmit} type="submit" >Next</button>
        <br></br>
        <button onClick={() => history.push('/'+feedbackText.previousFeedback)}>Back</button>
    </div>
  );
}

export default RatingComponent;
