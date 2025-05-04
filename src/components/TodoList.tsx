import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";
import { TodoListType } from "../lib/typeArchive";

const TodoList = () => {
  
  const { todos, handleTodoToggle, handleTodoDelete } = useTodosContext();

  return (
    <>
      {todos.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="text-lg">Start by adding a todo from the sidebar.</p>
        </div>
      ) : (
        <ul className="overflow-auto">
          {todos.map((todo: TodoListType) => (
            <li
              key={todo.id}
              onClick={() => handleTodoToggle(todo.id)}
              className="flex h-[50px] cursor-pointer items-center justify-between border-b border-black/8 pl-6 text-[14px]"
            >
              <span
                className={`w-[600px] truncate whitespace-nowrap ${todo.isCompleted ? "text-[#ccc] line-through" : ""}`}
              >
                {todo.text}
              </span>
              <DeleteButton id={todo.id} handleTodoDelete={handleTodoDelete} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
