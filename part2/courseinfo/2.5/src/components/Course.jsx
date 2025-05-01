import Header from "./Header.jsx";
import Part from "./Part.jsx";
import Total from "./Total.jsx";

const Course = ({ course }) => {
  const sum = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <Header header={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total sum={sum} />
    </>
  );
};

export default Course;
