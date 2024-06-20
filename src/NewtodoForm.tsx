import React from "react";
import { useTodoContext } from "./TodoProvider";

const NewtodoForm = ({ classname = "" }: { classname?: string }) => {
  const { addTodo } = useTodoContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const todoInput = form.elements.namedItem("newTodo") as HTMLInputElement;
    const todoText = todoInput.value.trim();
    addTodo(todoText);
    todoInput.value = "new todo...";
  };

  return (
    <form
      className={`flex items-center gap-4 ${classname}`}
      onSubmit={handleSubmit}
    >
      <input
        name="newTodo"
        type="text"
        autoFocus
        defaultValue="new todo..."
        className="w-full rounded-lg p-4 py-2 text-lg"
      />
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};
export default NewtodoForm;
