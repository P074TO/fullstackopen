const Header = (header) => {
  return (
    <div>
      <h1>{header.course}</h1>
    </div>
  );
};

const Content = (content) => {
  return (
    <div>
      <p>
        {content.name} {content.quantity}
      </p>
    </div>
  );
};

const Total = (number) => {
  return (
    <div>
      <p>Number of exercises {number.sum}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content name={part1} quantity={exercises1} />
      <Content name={part2} quantity={exercises2} />
      <Content name={part3} quantity={exercises2} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
