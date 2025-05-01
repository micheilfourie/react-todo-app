import Button from "./Button";

const AddTodoForm = () => {
  return (
    <form
      action=""
      className="flex w-full flex-col items-start gap-2 p-6 font-medium text-[#231d15]"
    >
      <h2>Add a todo</h2>
      <input
        type="text"
        className="h-[45px] w-full rounded-[5px] border border-black/12 p-4 outline-black/24"
      />
      <Button>Add todo</Button>
    </form>
  );
};

export default AddTodoForm;
