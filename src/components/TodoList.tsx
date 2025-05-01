import { useState } from "react";
import DeleteButton from "./DeleteButton";

type TodoListItem = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<TodoListItem[]>([
    { id: 1, text: "buy groceries", isCompleted: false },
    { id: 2, text: "do laundry", isCompleted: false },
    { id: 3, text: "walk the dog", isCompleted: false },
  ]);

  const handleTodoClick = (id: number): void => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
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
            className={`capitalize ${todo.isCompleted && "text-[#ccc] line-through"}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} setTodos={setTodos}/>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
