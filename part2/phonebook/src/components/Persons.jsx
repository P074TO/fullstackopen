const Person = ({ person, onClick }) => (
  <p>
    {person.name} {person.number} <button onClick={onClick}>delete</button>
  </p>
);

const Persons = ({ persons, deleteHandler }) => (
  <>
    {persons.map((person) => (
      <Person
        key={person.id}
        person={person}
        onClick={() => {
          if (confirm(`Delete ${person.name}?`)) {
            deleteHandler(person.id);
          }
        }}
      />
    ))}
  </>
);

export default Persons;
