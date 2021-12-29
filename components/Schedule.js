function Schedule(game) {
  return (
    <div className="flex flex-col  bg-blue-50 shadow-2xl">
      <div className="inline-flex">
        <p className=" text-xs  font-extrabold pl-2">{game.game.dateEvent}</p>
        <p className=" text-xs  font-extrabold pl-2 ml-auto pr-2">Score</p>
      </div>
      <div className="inline-flex ">
        <p className="text-xl  pb-2 pl-2"> {game.game.strAwayTeam}</p>
        <p className="text-xl pl-2 ml-auto pr-2"> {game.game.intAwayScore}</p>
      </div>
      <div className="inline-flex">
        <p className="text-xl pb-2 pl-2"> {game.game.strHomeTeam}</p>
        <p className="text-xl  pb-2 pl-2 ml-auto pr-2">
          {" "}
          {game.game.intHomeScore}
        </p>
      </div>
    </div>
  );
}

export default Schedule;
