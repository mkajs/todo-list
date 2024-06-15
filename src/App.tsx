import NewtodoForm from "./NewtodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className=" mx-auto max-w-96">
      <TodoList />
      <NewtodoForm />
    </div>
  );
};
export default App;
