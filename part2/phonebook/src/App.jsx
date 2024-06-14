import { useEffect, useState } from "react";
import axios from "axios";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
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
      setNewNumber("");
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterTermChange = (event) => {
    setFilterTerm(event.target.value);
    setShowAll(false);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterTerm={filterTerm}
        handleFilterTermChange={handleFilterTermChange}
      />

      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons showAll={showAll} persons={persons} filterTerm={filterTerm} />
    </div>
  );
};

export default App;
