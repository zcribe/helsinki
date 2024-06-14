import { useEffect, useState } from "react";
import axios from "axios";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      id: `${persons.length + 1}`,
      name: newName,
      number: newNumber,
    };

    let exists = false;
    let existingId = 0;

    for (const person of persons) {
      if (person.name === newName) {
        exists = true;
        existingId = person.id;
      }
    }

    const createMessage = (message, type) => {
      setMessageType(type);
      setMessage(message);
      setTimeout(() => {
        setMessage(null);
        setMessageType("success")
      }, 5000);
    };

    if (!exists) {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
      personService
        .create(nameObject)
        .then(() => {
          createMessage(`${nameObject.name} was created!`);
        })
        .catch((error) => {
          createMessage(`Couldn't update ${nameObject.name}`, "error");
        });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .update(existingId, nameObject)
          .then(() => {
            personService.getAll().then((response) => setPersons(response));
            createMessage(`Person ${nameObject.name} was updated!`);
          })
          .catch((error) => {
            createMessage(`Couldn't update ${nameObject.name}`, "error");
          });
      }
    }
  };

  const deleteName = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(person.id)
        .then(() =>
          personService.getAll().then((response) => setPersons(response))
        );
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
    personService.getAll().then((response) => setPersons(response));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType}/>
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
      <Persons
        showAll={showAll}
        persons={persons}
        filterTerm={filterTerm}
        deleteName={deleteName}
      />
    </div>
  );
};

export default App;
