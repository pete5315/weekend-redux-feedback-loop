import { useHistory } from "react-router-dom/";

function Submitted() {

  const history = useHistory();
  function handleClick() {
    history.push('/')
  }


  return (

    <div>
      <h1>Feedback</h1>
      <h1>Thank You!</h1>
      <button onClick={handleClick}>Leave New Feedback</button>
    </div>

  );
}

export default Submitted;
