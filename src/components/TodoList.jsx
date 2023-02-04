export default function TodoList({ todos, setTodos, editTodoText }) {
  const checkTodo = (todo) => {
    setTodos(
      todos.map((e) => {
        //Se l'id è uguale lo cambiamo
        if (e.id === todo.id) {
          return {
            ...e,
            completed: !e.completed
          };
        }
        //Se non è uguale lo ritorniamo cosí com'è
        return e;
      })
    );
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const handleEditMode = (todo) => {
    setTodos(
      todos.map((e) => {
        //Se l'id è uguale lo cambiamo
        if (e.id === todo.id) {
          return {
            ...e,
            editMode: !e.editMode
          };
        }
        //Se non è uguale lo ritorniamo cosí com'è
        return e;
      })
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className={`todo ${todo.completed ? "completed" : ""}`} key={todo.id}>
          <span className="importance"></span>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => {
              editTodoText(e.target.value, todo.id);
            }}
            disabled={!todo.editMode}
          />
          <div>
            <button onClick={() => checkTodo(todo)} className="check-btn">
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={() => handleEditMode(todo)} className="check-btn">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => deleteTodo(todo)} className="trash-btn">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
