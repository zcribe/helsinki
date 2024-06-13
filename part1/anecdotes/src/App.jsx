import { useEffect, useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({});
  const [max, setMax] = useState(0);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleOnClick = () => {
    const arrayLen = anecdotes.length;
    const picked = getRandomInt(arrayLen);
    setSelected(picked);
  };

  const handleOnVote = () => {
    const copy = { ...points };

    copy[selected] += 1;

    setPoints(copy);
    getMostPopular();
  };

  const getMostPopular = () => {
    let values = Object.values(points);
    let max = 0;
    
    for (let i = 0; i < values.length; i++){
      if (points[i] > max){
        max = i;
      }
    }
    setMax(max);
  }

  useEffect(() => {
    const raw = {};
    for (let i = 0; i < anecdotes.length; i++) {
      raw[i] = 0;
    }
    setPoints(raw);
  }, []);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>has {points[selected]} votes</p>
      <button onClick={handleOnVote}>vote</button>
      <button onClick={handleOnClick}>next joke</button>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[max]}</div>
    </>
  );
};

export default App;
