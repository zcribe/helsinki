const Persons = (props) => {
  const personsToShow = props.showAll
    ? props.persons
    : props.persons.filter((person) =>
        person.name.toUpperCase().includes(props.filterTerm.toUpperCase())
      );

  return (
    <>
      {personsToShow.map((person) => (
        <p key={person.name + person.id}>
          {person.name} {person.number} <button onClick={() => props.deleteName(person)}>delete</button>
        </p>
      ))}
    </>
  );
};

export default Persons;
