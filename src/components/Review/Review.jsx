import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from 'axios';


function Review() {
    
  const dispatch=useDispatch();
  const currentInfo = useSelector((store) => store);
  const history = useHistory();

  const handleSubmit = () => {
    console.log(currentInfo);
    axios
      .post("/api/send", {
        currentInfo
      })
      .then((response) => {
        console.log("Client POST success", response);
        history.push("/submitted");
        dispatch({
          type: "CLEAR_FEEDBACK",
        })
      })
      .catch((error) => {
        console.log("Error in client side POST", error);
        alert("Server error, please try again later.")
      });
  };

  return (
    <div>
      <h1>Review your feedback</h1>
      <br></br>
      <br></br>
      <p>Feelings: {currentInfo.currentInfo.feeling}</p>
      <p>Understanding: {currentInfo.currentInfo.understanding}</p>
      <p>Support: {currentInfo.currentInfo.support}</p>
      <p>Comments: {currentInfo.currentInfo.comments}</p>
      <button onClick={() => history.push('/comments')}>Back</button>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Review;
