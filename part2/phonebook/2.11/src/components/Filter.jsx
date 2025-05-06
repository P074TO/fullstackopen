import Persons from "./Persons.jsx";

const Filter = ({ persons, find }) => {
  const match = find
    ? persons.filter(
        (person) =>
          person.name.toLowerCase().includes(find.toLowerCase()) ||
          person.number.includes(find),
      )
    : persons;

  return (
    <div>
      {match.map((person) => (
        <Persons key={person.id} persons={person} />
      ))}
    </div>
  );
};

export default Filter;
