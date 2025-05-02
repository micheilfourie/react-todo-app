import DeleteButton from "./DeleteButton";
import { TodoListType } from "../TypeArchive";
const TodoList = ({
  todos,
  setTodos,
}: {
  todos: TodoListType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoListType[]>>;
}) => {
  const handleTodoClick = (id: number): void => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleTodoClick(todo.id)}
          className="flex h-[50px] cursor-pointer items-center justify-between border-b border-black/8 pl-6 text-[14px]"
        >
          <span
            className={`${todo.isCompleted && "text-[#ccc] line-through"}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
