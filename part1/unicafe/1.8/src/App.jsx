import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Feedback = () => <h1>give feedback</h1>;

const Statistics = () => <h1>statistics</h1>;

const StatisticsLn = ({ statistic, value }) => {
  return (
    <p>
      {statistic} {value}
    </p>
  );
};

const All = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Average = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Positive = ({ text, value }) => {
  return (
    <p>
      {text} {value} %
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  var average = score / all;
  var positive = (good / all) * 100;

  const handleGood = () => {
    const updatedGood = good + 1;
    const updatedAll = all + 1;
    console.log("good!");
    setGood(updatedGood);
    console.log("previous value: ", good);
    console.log("current value: ", updatedGood);
    setAll(updatedAll);
    setScore(score + 1);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedAll = all + 1;
    console.log("neutral");
    setNeutral(updatedNeutral);
    console.log("previous value: ", neutral);
    console.log("current value: ", updatedNeutral);
    setAll(updatedAll);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    const updatedAll = all + 1;
    console.log("bad!");
    setBad(updatedBad);
    console.log("previous value: ", bad);
    console.log("current value: ", updatedBad);
    setAll(updatedAll);
    setScore(score - 1);
  };

  return (
    <div>
      <Feedback />
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />
      <Statistics />
      <StatisticsLn statistic={"good"} value={good} />
      <StatisticsLn statistic={"neutral"} value={neutral} />
      <StatisticsLn statistic={"bad"} value={bad} />
      <All text={"all"} value={all} />
      <Average text={"average"} value={average} />
      <Positive text={"positive"} value={positive} />
    </div>
  );
};

export default App;
