import { TodoListType } from "../TypeArchive";

const DeleteButton = ({ id, setTodos }: { id: number; setTodos: React.Dispatch<React.SetStateAction<TodoListType[]>> }) => {
  const handleDelete = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <button
      onClick={handleDelete}
      className="cursor-pointer px-6 py-2 text-2xl"
      style={{ color: "red" }}
    >
      &times;
    </button>
  );
};

export default DeleteButton;
