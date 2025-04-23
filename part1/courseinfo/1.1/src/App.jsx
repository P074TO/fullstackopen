const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.name1} {props.quantity1}
      </p>
      <p>
        {props.name2} {props.quantity2}
      </p>
      <p>
        {props.name3} {props.quantity3}
      </p>
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.sum}</p>;
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
