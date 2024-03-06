const Button = ({ children, type, handler }) => {
  const buttonBg = type === "increment" ? "bg-green-500" : "bg-red-400";
  return (
    <button onClick={handler} className={`px-3 py-1 rounded mr-2 ${buttonBg}`}>{children}</button>
  );
};

export default Button;
