import Dots from "./Dots";
import TodoCounter from "./TodoCounter";
import { TodoListType } from "../TypeArchive";

const Header = ({todos}: {todos: TodoListType[]}) => {
  return (
    <header className="col-span-2 flex items-center justify-between border-b border-black/8 bg-[#fbf5ed]">
      <Dots/>
      <TodoCounter todos={todos}/>
    </header>
  );
};

export default Header;
