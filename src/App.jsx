import { useState } from "react";

const Filter = ({ value, onChange }) => (
  <div>
    filter shown with: <input value={value} onChange={onChange} />
  </div>
);

const PersonForm = ({
  onSubmit,
  nameValue,
  nameOnChange,
  numberValue,
  numberOnChange,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={nameOnChange} />
    </div>
    <div>
      number: <input value={numberValue} onChange={numberOnChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

const Persons = ({ personsAMostrar }) => (
  <ul>
    {personsAMostrar.map((persona) => (
      <li key={persona.name}>
        {persona.name} {persona.number}
      </li>
    ))}
  </ul>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  const manejarCambioNombre = (e) => setNewName(e.target.value);
  const manejarCambioNumber = (e) => setNumber(e.target.value);
  const manejarCambioFilter = (e) => setFilter(e.target.value);

  const agregarPersona = (event) => {
    event.preventDefault();

    const nombreExiste = persons.some(
      (p) => p.name.toLowerCase() === newName.toLowerCase(),
    );

    if (nombreExiste) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nuevaPersona = { name: newName, number: newNumber };
    setPersons(persons.concat(nuevaPersona));
    setNewName("");
    setNumber("");
  };

  const personasAMostrar = persons.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter value={filter} onChange={manejarCambioFilter} />

      <h2>Add a new</h2>

      <PersonForm
        onSubmit={agregarPersona}
        nameValue={newName}
        nameOnChange={manejarCambioNombre}
        numberValue={newNumber}
        numberOnChange={manejarCambioNumber}
      />

      <h2>Numbers</h2>

      <Persons personsAMostrar={personasAMostrar} />
    </div>
  );
};

export default App;
