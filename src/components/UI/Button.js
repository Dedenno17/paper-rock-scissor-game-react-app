const Button = (props) => {
  return (
    <button
      type={props.type}
      className="px-7 py-5 bg-ternaryPurple rounded-lg shadow-xl text-md text-slate-200 font-bold hover:brightness-75"
    >
      {props.children}
    </button>
  );
};

export default Button;
