import { useState } from "react";
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };

    if (!newName || !newNumber) {
      alert(`Missing information`);
    }

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
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
