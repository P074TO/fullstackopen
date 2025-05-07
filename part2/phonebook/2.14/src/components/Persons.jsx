import personServices from "../services/persons.jsx";

const Persons = ({ persons }) => (
  <p>
    {persons.name} {persons.number}{" "}
    <button onClick={() => personServices.remove(persons.id)}>delete</button>
  </p>
);

export default Persons;
