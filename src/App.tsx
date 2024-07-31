import NewtodoForm from "./NewtodoForm";
import TodoList from "./TodoList";
import TodoProvider from "./TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className=" mx-auto max-w-96 py-6">
        <TodoList />
        <NewtodoForm classname="mt-6" />
      </div>
    </TodoProvider>
  );
};
export default App;
