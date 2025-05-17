import { useState, useEffect } from "react";
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import personService from "./services/persons.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (!newName || !newNumber) {
      alert(`Missing information`);
    } else if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }

    setNewName("");
    setNewNumber("");
  };

  const handler = (setter) => (event) => setter(event.target.value);

  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handler={handler(setFilter)} />

      <h3>add a new</h3>

      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        nameHandler={handler(setNewName)}
        numberValue={newNumber}
        numberHandler={handler(setNewNumber)}
      />

      <h3>Numbers</h3>

      <Persons persons={filtered} />
    </div>
  );
};

export default App;
