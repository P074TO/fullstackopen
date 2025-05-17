import { useState } from "react";

const Name = ({ name }) => <p>{name}</p>;

const Persons = ({ persons }) => (
  <>
    {persons.map((person) => (
      <Name key={person.id} name={person.name} />
    ))}
  </>
);

const App = () => {
  const [persons, setPersons] = useState([{ id: "1", name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: String(persons.length + 1),
    };

    setPersons(persons.concat(personObject));
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
      <Persons persons={persons} />
    </div>
  );
};

export default App;
