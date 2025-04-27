import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ statistic, value }) => {
  return (
    <p>
      {statistic} {value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    console.log("good!");
    setGood(updatedGood);
    console.log("previous value: ", good);
    console.log("current value: ", updatedGood);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    console.log("neutral");
    setNeutral(updatedNeutral);
    console.log("previous value: ", neutral);
    console.log("current value: ", updatedNeutral);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    console.log("bad!");
    setBad(updatedBad);
    console.log("previous value: ", bad);
    console.log("current value: ", updatedBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />
      <h1>statistics</h1>
      <Statistics statistic={"good"} value={good} />
      <Statistics statistic={"neutral"} value={neutral} />
      <Statistics statistic={"bad"} value={bad} />
    </div>
  );
};

export default App;
