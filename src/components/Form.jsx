import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

export default function Form({ inputText, setInputText, todos, setTodos }) {
  /* È possibile modificare il testo del todo già esistente */
  const editTodoText = (updatedText, id) => {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          el.text = updatedText;
        }
        return el;
      })
    );
  };

  /* Gestiamo il testo dell'input */
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  /* Aggiungiamo il todo con le seguenti proprietà */
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: uuid(), text: inputText, completed: false, editMode: false, deleted: false },
    ]);
    setInputText("");
  };

  return (
    <div className="list-box">
      <div className="form">
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputText}
            placeholder="Inserisci Task"
            required
          />
          <button>
            <i className="fa-solid fa-plus"></i>
          </button>
        </form>
      </div>
      <div className="todo-list">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          editTodoText={editTodoText}
        />
      </div>
    </div>
  );
}
