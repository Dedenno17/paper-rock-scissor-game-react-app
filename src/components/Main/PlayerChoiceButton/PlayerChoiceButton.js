import Button from "../../UI/Button";

const choices = ["Paper", "Rock", "Scissor"];

const PlayerChoiceButton = (props) => {
  return (
    <div className="w-full bg-slate-200 flex flex-col items-center pt-2">
      <h1 className="text-3xl font-semibold text-slate-800 mb-3">
        Choose One!
      </h1>
      <div className="w-full flex justify-evenly">
        {choices.map((item) => (
          <Button type="button" key={item}>
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PlayerChoiceButton;
