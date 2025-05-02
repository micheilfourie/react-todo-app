import Button from "./Button";
import { TodoListType } from "../TypeArchive";
import { useState } from "react";

const AddTodoForm = ({
  setTodos,
  todos,
}: {
  setTodos: React.Dispatch<React.SetStateAction<TodoListType[]>>;
  todos: TodoListType[];
}) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!newTodo) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: newTodo,
        isCompleted: false,
      },
    ]);
    setNewTodo("");
  };

  return (
    <form
      action=""
      onSubmit={handleAddTodo}
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
