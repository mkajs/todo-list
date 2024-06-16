const todos = [
  { id: 1, text: "a new todo but number one of them", done: false },
  { id: 2, text: "a new todo but number 2 of them ", done: true },
  { id: 3, text: "a new todo but number 3 of them", done: false },
];

const TodoList = () => {
  return (
    <ul className="flex flex-col gap-2  ">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center  gap-2">
          <input type="checkbox" checked={todo.done} className="checkbox" />
          <p
            className={`text-white ${todo.done ? "text-slate-400 line-through" : ""}`}
          >
            {todo.text}
          </p>
          <button className="btn btn-error ml-auto">Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
