import { useState } from "react";
import Persons from "./components/Persons.jsx";

const ToShow = ({ persons, find }) => {
  const match = persons.map(
    (person) => (person.name === find || person.number === find) && find != "",
  );

  if (match) {
    persons.filter((person) => <Persons key={person.id} persons={person} />);
  } else {
    persons.map((person) => {
      console.log(person);
      return <Persons key={person.id} persons={person} />;
    });
  }
};

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-1234567" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [find, setFind] = useState("");

  const addPerson = (event) => {
    const nameExists = persons.some((person) => person.name === newName);
    event.preventDefault();
    console.log("button clicked", event.target);

    if (newName === "") {
      window.alert("name field is empty!");
      return;
    }

    if (newNumber === "") {
      window.alert("number field is empty!");
      return;
    }

    if (nameExists) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
      };
      setPersons(persons.concat(nameObject));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFind = (event) => {
    console.log(event.target.value);
    setFind(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFind} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ToShow persons={persons} find={find} />
    </div>
  );
};

export default App;
