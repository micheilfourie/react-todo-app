import { TodoListType } from "../TypeArchive";

const TodoCounter = ({todos}: {todos: TodoListType[]  }) => {
  return (
    <p className="px-6">
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length} todos completed
    </p>
  );
};

export default TodoCounter;
