const Footer = () => {
  return (
    <footer className="mt-4 flex items-center justify-between text-[11px] opacity-30">
      <small className="text-[11px]">
        &copy; {new Date().getFullYear()}. Copyright by Micheil
      </small>
      <p>
        Version <b>1.5</b>
      </p>
    </footer>
  );
};

export default Footer;
