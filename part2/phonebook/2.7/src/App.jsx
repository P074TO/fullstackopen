import { useState } from "react";
import Persons from "./components/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "39-44-5323523" },
  ]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    const nameExists = persons.some((person) => person.name === newName);
    event.preventDefault();
    console.log("button clicked", event.target);

    if (nameExists) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        id: String(persons.length + 1),
      };
      setPersons(persons.concat(nameObject));
    }

    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persons) => (
        <Persons key={persons.id} persons={persons} />
      ))}
    </div>
  );
};

export default App;
