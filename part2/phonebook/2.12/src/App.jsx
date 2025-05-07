import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [find, setFind] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
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
      axios
        .post("http://localhost:3001/persons", nameObject)
        .then((response) => {
          console.log("promise fulfilled");
          setPersons(persons.concat(response.data));
        });
      // setPersons(persons.concat(nameObject));
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
      <h3>add a new</h3>
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
      <h3>Numbers</h3>
      <Filter persons={persons} find={find} />
    </div>
  );
};

export default App;
