import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function Feelings() {

  let [feeling, setNewFeeling] = useState({ feeling: "" });
  const dispatch=useDispatch();
  const history = useHistory()


  const handleNewFeeling = (value, event) => {
    event.preventDefault();
    setNewFeeling({
      feeling: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "SEND_FEEDBACK",
      payload: feeling
    })
    history.push('/understanding')

  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
        <label>Feeling? </label>
        <input
          onChange={(event) => handleNewFeeling(event.target.value, event)}
          type="integer"
          placeholder="name"
          value={feeling.feeling}
        />
        <button onClick={handleSubmit} type="submit">Next</button>
    </div>
  );
}

export default Feelings;
