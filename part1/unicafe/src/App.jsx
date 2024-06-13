import { useState } from "react";

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Button = (props) => {
  const { value, setValue, title } = props;
  return <button onClick={() => setValue(value + 1)}>{title}</button>;
};

const StatisticLine = (props) => {
  const { value, title } = props;
  return (
    <p>
      {" "}
      {title} {value}
    </p>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const sum = good - bad;
  const positive = (good / total) * 100;

  return (
    <>
      <StatisticLine value={good} title={"good"} />
      <StatisticLine value={neutral} title={"neutral"} />
      <StatisticLine value={bad} title={"bad"} />
      <StatisticLine value={total} title={"all"} />
      <StatisticLine value={sum / total} title={"average"} />
      <StatisticLine value={`${positive}%`} title={"positive"} />
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

      <Button value={good} setValue={setGood} title={"good"} />
      <Button value={neutral} setValue={setNeutral} title={"neutral"} />
      <Button value={bad} setValue={setBad} title={"bad"} />

      <Title title={"statistics"} />

      {good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
