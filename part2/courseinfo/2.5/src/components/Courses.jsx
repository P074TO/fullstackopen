const Courses = ({ courses }) => {
  return (
    <>
      <Header header="Web development curriculum" />
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default Courses;
