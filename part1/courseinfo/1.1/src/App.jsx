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
        {content.name1} {content.quantity1}
      </p>
      <p>
        {content.name2} {content.quantity2}
      </p>
      <p>
        {content.name3} {content.quantity3}
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
      <Content
        name1={part1}
        quantity1={exercises1}
        name2={part2}
        quantity2={exercises2}
        name3={part3}
        quantity3={exercises3}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
