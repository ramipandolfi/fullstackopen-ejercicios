import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  // 1. Nuevos estados para controlar lo que el usuario escribe
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setItems(res.data));
  }, []);

  // 2. Esta función se ejecutará cuando le demos al botón "agregar"
  const addPerson = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    console.log("Botón clickeado", newName);
    // Por ahora solo limpia los campos, no guarda en el server todavía
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Agenda Telefónica</h1>

      {/* 3. El Formulario */}
      <form onSubmit={addPerson}>
        <div>
          nombre:
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          teléfono:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">agregar</button>
        </div>
      </form>

      <h2>Números</h2>
      <ul>
        {items.map((p) => (
          <li key={p.id}>
            {p.name} - {p.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
