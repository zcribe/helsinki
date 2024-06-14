const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const initialValue = 0;
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  return <b>total of exercises {total}</b>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((item) => (
      <Part part={item} key={item.name + item.id} />
    ))}
  </>
);

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

export default Course;