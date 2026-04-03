import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  const manejarCambioNombre = (e) => {
    setNewName(e.target.value);
  };

  const agregarPersona = (event) => {
    event.preventDefault();

    const nuevaPersona = { name: newName };

    setPersons(persons.concat(nuevaPersona));

    setNewName("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={agregarPersona}>
        <div>
          name: <input value={newName} onChange={manejarCambioNombre} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((persona) => (
          <li key={persona.name}>{persona.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
