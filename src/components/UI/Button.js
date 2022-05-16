const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="px-6 py-4 bg-ternaryPurple rounded-lg shadow-xl text-md text-slate-200 font-bold hover:brightness-90 lg:px-12 lg:text-2xl"
    >
      {props.children}
    </button>
  );
};

export default Button;
