import { useState } from "react";

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const sum = good - bad;

  return (
    <>
      <p> good {good}</p>
      <p> neutral {neutral}</p>
      <p> bad {bad}</p>
      <p> all {total}</p>
      <p> average {sum / total}</p>
      <p> positive {(good / total) * 100}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title title={"give feedback"} />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Title title={"statistics"} />
      {
        good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p>
      }
    </div>
  );
};

export default App;
