import { useState } from "react";
const App = () => {
  const [good, counterGood] = useState(0);
  const [neutral, counterNeutral] = useState(0);
  const [bad, counterBad] = useState(0);

  const handleClickGood = () => {
    counterGood(good + 1);
  };
  const handleClickNeutral = () => {
    counterNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    counterBad(bad + 1);
  };
  const total = good + neutral + bad;

  return (
    <div>
      <h1> give feedback</h1>
      <button onClick={handleClickGood} style={{ padding: "10px 20px" }}>
        good
      </button>
      <button onClick={handleClickNeutral} style={{ padding: "10px 20px" }}>
        neutral
      </button>
      <button onClick={handleClickBad} style={{ padding: "10px 20px" }}>
        bad
      </button>
      <h1>statics</h1>
      <p>Clicks good {good} </p>
      <p>Clicks neutral {neutral} </p>
      <p>Clicks bad {bad} </p>
      all opinions: {total}
      <br></br>
      average : {(good + bad * -1) / total}
      <br></br>
      positive : {(good / total) * 100}
    </div>
  );
};
export default App;
