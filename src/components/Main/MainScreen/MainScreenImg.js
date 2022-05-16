import playerChoice from "../../../assets/images/player-rock.png";
import computerChoice from "../../../assets/images/comp-rock.png";

const MainScreenImg = (props) => {
  return (
    <div className="flex w-full items-center justify-around">
      <img
        src={playerChoice}
        alt="Player choice"
        className="w-[35%] md:w-[25%]"
      />
      <img
        src={computerChoice}
        alt="Computer choice"
        className="w-[35%] md:w-[25%]"
      />
    </div>
  );
};

export default MainScreenImg;
