import { Link } from "react-router-dom";

import openingImg from "../assets/images/openingImg.png";

const Opening = (props) => {
  return (
    <div className="w-full h-[100vh] px-8 bg-gradient-to-b from-primaryPurple to-secondaryPurple flex flex-col justify-evenly items-center ">
      <h1 className="text-4xl text-slate-200 font-bold text-center md:order-1 lg:text-6xl">
        Paper, Rock, Scissor game
      </h1>
      <img
        src={openingImg}
        alt="three hands"
        className="md:order-3 md:w-[90%]"
      />
      <Link
        to="/main"
        className="block py-5 px-10 bg-ternaryPurple text-slate-200 font-bold text-xl rounded-xl shadow-xl md:order-2"
      >
        New Game
      </Link>
    </div>
  );
};

export default Opening;
