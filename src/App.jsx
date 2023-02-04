import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // Prendiamo i todos dal localStorage (se presenti) quando parte l'app
  useEffect(() => {
    getStorageTodos();
  }, []);

  // Aggiorniamo il localStorage quando lo state "todos" cambia
  useEffect(() => {
    saveTodos();
  }, [todos]);

  /* Salviamo nel LocalStorage */
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Prendiamo i todos dal LocalStorage
  const getStorageTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      if (localTodos.length === 0) {
        return null;
      }
      setTodos(localTodos);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Cosa farai oggi?</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
