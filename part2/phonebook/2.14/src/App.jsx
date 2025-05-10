import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter.jsx";
import personService from "./services/persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [find, setFind] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      };
      personService.create(nameObject).then((response) => {
        setPersons(persons.concat(response.data));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (id) => {
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch((error) => {
        console.error("Delete failed:", error);
      });
  };

  const handleChange = (event, setState) => setState(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input onChange={(event) => handleChange(event, setFind)} />
      </div>
      <h3>add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => handleChange(event, setNewName)}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(event) => handleChange(event, setNewNumber)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Filter persons={persons} find={find} handler={deletePerson}/>
    </div>
  );
};

export default App;
