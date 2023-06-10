import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function Comments() {

  let [comments, setNewComments] = useState({ comments: "" });
  const dispatch=useDispatch();
  const history = useHistory()


  const handleNewComments = (value, event) => {
    event.preventDefault();
    setNewComments({
      comments: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "SEND_FEEDBACK",
      payload: comments
    })
    history.push('/review')

  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
        <label>Comments? </label>
        <input
          onChange={(event) => handleNewComments(event.target.value, event)}
          type="text"
          placeholder="name"
          value={comments.comments}
        />
        <button onClick={handleSubmit} type="submit">Next</button>
        <br></br>
        <button onClick={() => history.push('/support')}>Back</button>
    </div>
  );
}

export default Comments;
