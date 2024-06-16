const NewtodoForm = ({ classname = "" }: { classname?: string }) => {
  return (
    <form className={`flex items-center gap-4 ${classname}`}>
      <input
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
