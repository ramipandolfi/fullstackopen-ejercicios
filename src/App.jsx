import { useState } from "react";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

const App = () => {
  const [good, counterGood] = useState(0);
  const [neutral, counterNeutral] = useState(0);
  const [bad, counterBad] = useState(0);

  const total = good + neutral + bad;

  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => counterGood(good + 1)}>good</button>
      <button onClick={() => counterNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => counterBad(bad + 1)}>bad</button>

      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
