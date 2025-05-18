import { useState, useEffect } from "react";
import "./index.css";
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Notification from "./components/Notification.jsx";
import personService from "./services/persons.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);

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
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const existingPerson = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase(),
        );

        personService.update(existingPerson.id, personObject).then(() => {
          const updated = { ...existingPerson, number: newNumber };
          setPersons(
            persons.map((person) =>
              person.id === existingPerson.id ? updated : person,
            ),
          );
        });
      }
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNotification(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    }

    setNewName("");
    setNewNumber("");
  };

  const removePerson = (id) => {
    personService.remove(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  const handler = (setter) => (event) => setter(event.target.value);

  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />

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

      <Persons persons={filtered} deleteHandler={removePerson} />
    </div>
  );
};

export default App;
