import React, { useContext, useReducer } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type ActionType =
  | {
      type: "ADD";
      payload: {
        text: string;
      };
    }
  | { type: "TOGGLE"; payload: { id: number } }
  | { type: "DELETE"; payload: { id: number } };

type stateType = Todo[] | [];

const todosReducer = (todos: stateType, action: ActionType): stateType => {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        id: Math.random() * 1000,
        text: action.payload.text,
        done: false,
      };
      return [...todos, newTodo];
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo,
      );

    default:
      throw new Error("unexpected action type");
  }
};

const TodoContext = React.createContext<{
  todos: stateType;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}>({
  todos: [],
  addTodo: () => null,
  removeTodo: () => null,
  toggleTodo: () => null,
});

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("context use error.");
  return context;
}

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const addTodo = (text: string) => {
    dispatch({ type: "ADD", payload: { text } });
  };
  const removeTodo = (id: number) => {
    dispatch({ type: "DELETE", payload: { id } });
  };
  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  };

  const providerValue = { todos, addTodo, removeTodo, toggleTodo };
  return (
    <TodoContext.Provider value={providerValue}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
