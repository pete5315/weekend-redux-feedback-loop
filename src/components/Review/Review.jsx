import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Review() {
  const currentInfo = useSelector((store) => store.currentInfo);
  const history = useHistory();
  const handleSubmit = () => {
    console.log(currentInfo);
    axios
      .post("/api/send", {
        feeling: currentInfo.feeling,
        understanding: currentInfo.understanding,
        support: currentInfo.support,
        comments: currentInfo.comments
      })
      .then((response) => {
        console.log("Client POST success", response);
      })
      .catch((error) => {
        console.log("Error in client side POST", error);
      });
    history.push("/form");
  };

  return (
    <div>
      <h1>Review your feedback</h1>
      <br></br>
      <br></br>
      <p>Feelings: {currentInfo.feeling}</p>
      <p>Understanding: {currentInfo.understanding}</p>
      <p>Support: {currentInfo.support}</p>
      <p>Comments: {currentInfo.comments}</p>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Review;
