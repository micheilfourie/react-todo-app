import { useTodosContext } from "../lib/hooks";
import Button from "./Button";
import { useState } from "react";

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { handleAddTodo } = useTodosContext();

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(newTodo);
        setNewTodo("");
      }}
      className="flex w-full flex-col items-start gap-2 p-6 font-medium text-[#231d15]"
    >
      <h2>Add a todo</h2>
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        className="h-[45px] w-full rounded-[5px] border border-black/12 p-4 outline-black/24"
      />
      <Button>Add todo</Button>
    </form>
  );
};

export default AddTodoForm;
