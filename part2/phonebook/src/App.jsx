import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    };

    let exists = false;

    for (const person of persons) {
      if (person.name === newName) {
        exists = true;
      }
    }

    if (!exists) {
      setPersons(persons.concat(nameObject));
      setNewName("");
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name + person.id}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
