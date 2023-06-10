import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function Understanding() {

  let [understanding, setNewUnderstanding] = useState({ understanding: "" });
  const dispatch=useDispatch();
  const history = useHistory()


  const handleNewUnderstanding = (value, event) => {
    event.preventDefault();
    if ((0<value && value<6) || value==="") {
      setNewUnderstanding({
        understanding: value,
      });  
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "SEND_FEEDBACK",
      payload: understanding
    })
    history.push('/support')

  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
        <label>Understanding (1-5)? </label>
        <input
          onChange={(event) => handleNewUnderstanding(event.target.value, event)}
          type="integer"
          placeholder="name"
          value={understanding.understanding}
        />
        <button onClick={handleSubmit} type="submit">Next</button>
    </div>
  );
}

export default Understanding;
