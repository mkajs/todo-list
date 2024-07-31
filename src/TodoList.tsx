import { useTodoContext } from "./TodoProvider";

const TodoList = () => {
  const { todos, removeTodo, toggleTodo } = useTodoContext();
  return (
    <ul className="flex flex-col gap-2  ">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center  gap-2">
          <input
            onChange={() => toggleTodo(todo.id)}
            type="checkbox"
            checked={todo.done}
            className="checkbox"
          />
          <p
            className={`text-white ${todo.done ? "text-slate-400 line-through" : ""}`}
          >
            {todo.text}
          </p>
          <button
            onClick={() => removeTodo(todo.id)}
            className="btn btn-error ml-auto"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
