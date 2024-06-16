import NewtodoForm from "./NewtodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className=" mx-auto max-w-96 py-6">
      <TodoList />
      <NewtodoForm classname="mt-6" />
    </div>
  );
};
export default App;
