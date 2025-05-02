import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { TodoListType } from "../TypeArchive";

const Sidebar = ({
  setTodos, todos
}: {
  setTodos: React.Dispatch<React.SetStateAction<TodoListType[]>>,
  todos: TodoListType[]
}) => {
  return (
    <section className="flex flex-col justify-between border-l border-black/8 bg-[#fffcf9]">
      <AddTodoForm setTodos={setTodos} todos={todos}/>
      <div className="flex w-full flex-col items-start gap-2 p-6 font-medium text-[#231d15]">
        <Button buttonType="secondary">Login</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
};

export default Sidebar;
