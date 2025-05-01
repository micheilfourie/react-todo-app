type ButtonProps = {
  children: React.ReactNode;
  buttonType?: "secondary";
};

const Button = ({ children, buttonType }: ButtonProps) => {
  return (
    <button
      className={`h-[45px] w-full cursor-pointer rounded-[5px] bg-[#473a2b] hover:bg-[#322618] ${buttonType === "secondary" && "opacity-85"} border border-black/12 text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
