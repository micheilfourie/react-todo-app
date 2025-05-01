import Dots from "./Dots";
import TodoCounter from "./TodoCounter";

const Header = () => {
  return (
    <header className="col-span-2 flex items-center justify-between border-b border-black/8 bg-[#fbf5ed]">
      <Dots/>
      <TodoCounter/>
    </header>
  );
};

export default Header;
