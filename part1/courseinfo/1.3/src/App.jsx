const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <p>
      {props.name} {props.quantity}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.sum}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "Fundamentals of React",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content name={part1.name} quantity={part1.exercises} />
      <Content name={part2.name} quantity={part2.exercises} />
      <Content name={part3.name} quantity={part3.exercises} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
