import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function Support() {

  let [support, setNewSupport] = useState({ support: "" });
  const dispatch=useDispatch();
  const history = useHistory()


  const handleNewSupport = (value, event) => {
    event.preventDefault();
    if ((0<value && value<6) || value==="") {
      setNewSupport({
        support: value,
      });  
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "SEND_FEEDBACK",
      payload: support
    })
    history.push('/comments')

  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
        <label>Support (1-5)? </label>
        <input
          onChange={(event) => handleNewSupport(event.target.value, event)}
          type="integer"
          placeholder="name"
          value={support.support}
        />
        <button onClick={handleSubmit} type="submit">Next</button>
    </div>
  );
}

export default Support;
