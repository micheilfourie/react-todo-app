import { useTodosContext } from "../lib/hooks";
const TodoCounter = () => {
  const { todoCounterTotal, todoCounterCompleted } = useTodosContext();

  return (
    <p className="px-6">
      <b>{todoCounterCompleted}</b> / {todoCounterTotal} todos completed
    </p>
  );
};

export default TodoCounter;
