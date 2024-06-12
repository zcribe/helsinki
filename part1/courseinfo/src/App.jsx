const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = ({course}) => {
    return <h1>{course.name}</h1>;
  };

  const Part = ({ part, exercises }) => {
    return (
      <p>
        {part} {exercises}
      </p>
    );
  };

  const Content = ({ part1, part2, part3 }) => {
    return (
      <>
        <Part part={part1.name} exercises={part1.exercises} />
        <Part part={part2.name} exercises={part1.exercises} />
        <Part part={part3.name} exercises={part1.exercises} />
      </>
    );
  };

  const Total = ({ exercises1, exercises2, exercises3 }) => {
    return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={course.parts[0]}
        part2={course.parts[1]}
        part3={course.parts[2]}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;
