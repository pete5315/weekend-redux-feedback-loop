import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

function Review() {
  const dispatch = useDispatch();
  const currentInfo = useSelector((store) => store);
  const history = useHistory();

  const handleSubmit = () => {
    console.log(currentInfo.currentInfo);
    console.log(Object.keys(currentInfo.currentInfo));
    if (Object.keys(currentInfo.currentInfo).length !== 4) {
      alert('You must complete all feedback');
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
      <h1>Review your feedback</h1>
      <br></br>
      <br></br>
      <p onClick={() => history.push("/")}>Feelings: {currentInfo.currentInfo.feeling}</p>
      <p onClick={() => history.push("/understanding")}>Understanding: {currentInfo.currentInfo.understanding}</p>
      <p onClick={() => history.push("/support")}>Support: {currentInfo.currentInfo.support}</p>
      <p onClick={() => history.push("/comments")}>Comments: {currentInfo.currentInfo.comments}</p>
      <button onClick={() => history.push("/comments")}>Back</button>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Review;
