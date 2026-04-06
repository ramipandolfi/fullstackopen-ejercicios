import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filer, setFilter] = useState("");

  const manejarCambioNombre = (e) => setNewName(e.target.value);
  const manejarCambioNumber = (e) => setNumber(e.target.value);
  const manejarCambioFilter = (e) => setFilter(e.target.value);

  const personasAMostrar = persons.filter((persona) =>
    persona.name.toLowerCase().includes(filer.toLowerCase()),
  );

  const agregarPersona = (event) => {
    event.preventDefault();

    const nombreExiste = persons.some(
      (persona) => persona.name.toLowerCase() === newName.toLowerCase(),
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

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        filter shown with:{" "}
        <input value={filer} onChange={manejarCambioFilter} />
      </div>

      <h2>Add a new</h2>
      <form onSubmit={agregarPersona}>
        <div>
          name: <input value={newName} onChange={manejarCambioNombre} />
        </div>
        <div>
          number: <input value={newNumber} onChange={manejarCambioNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personasAMostrar.map((persona) => (
          <li key={persona.name}>
            {persona.name} {persona.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
