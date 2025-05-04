const DeleteButton = ({
  id,
  handleTodoDelete,
}: {
  id: number;
  handleTodoDelete: (id: number) => void;
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleTodoDelete(id);
      }}
      className="cursor-pointer px-6 py-2 text-2xl"
      style={{ color: "red" }}
    >
      &times;
    </button>
  );
};

export default DeleteButton;
