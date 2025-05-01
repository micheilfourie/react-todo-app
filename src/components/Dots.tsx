const Dots = () => {
  return (
    <div className="flex items-center justify-center gap-1.5 px-6">
      {[1, 2, 3].map((_, index) => (
        <div className="h-4 w-4 rounded-full bg-[#ada69d]" key={index}></div>
      ))}
    </div>
  );
};

export default Dots;
