const Persons = ({ persons, handler }) => (
  <p>
    {persons.name} {persons.number}{" "}
    <button onClick={() => handler(persons.id)}>delete</button>
  </p>
);

export default Persons;
