import Schedule from "../../components/Schedule";
import Roster from "../../components/Roster";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

import FlipMove from "react-flip-move";

function TeamPage({ teamDetail, teamEvents, nextEvents, playerDetail }) {
  return (
    <div className="">
      <Nav />

      <Header teamDetail={teamDetail}></Header>

      <div className="container ml-12 sm:grid md:grid-cols-2 ">
        <div className=" container  ">
          <h1 className="text-4xl px-4 font-bold pt-10 pb-2 pl-2">
            Recent Games
          </h1>

          {teamEvents.results?.map((game) => (
            <Schedule key={game.idEvent} game={game} />
          ))}
        </div>
        <div className=" container mx-auto sm:ml-20 md:ml-40 lg:ml-60 ">
          <h1 className="text-4xl px-4 font-bold pt-10 pb-2 pl-2">
            Upcoming Games
          </h1>
          {nextEvents.events?.map((game) => (
            <Schedule key={game.idEvent} game={game} />
          ))}
        </div>
      </div>
      <div className="text-4xl mx-12 pt-6 font-bold ">Roster</div>

      <FlipMove className="sm:grid md:grid-cols-2 xl:grid-cols-5">
        {playerDetail?.map((player) => (
          <Roster key={player.idPlayer} player={player} />
        ))}
      </FlipMove>
    </div>
  );
}
export async function getServerSideProps(context) {
  const team = context.query.id;
  const [teamRes, eventRes, nextEventsRes, playersRes] = await Promise.all([
    fetch(
      `https://www.thesportsdb.com/api/v1/json/${
        process.env.API_KEY
      }/lookupteam.php?id=${[team]}`
    ),
    fetch(
      `https://www.thesportsdb.com/api/v1/json/${
        process.env.API_KEY
      }/eventslast.php?id=${[team]}`
    ),
    fetch(
      `https://www.thesportsdb.com/api/v1/json/${
        process.env.API_KEY
      }/eventsnext.php?id=${[team]}`
    ),
    fetch(
      `https://www.thesportsdb.com/api/v1/json/${
        process.env.API_KEY
      }/lookup_all_players.php?id=${[team]}`
    ),
  ]);
  const [teamInfo, teamSchedule, nextSchedule, playersInfo] = await Promise.all(
    [teamRes.json(), eventRes.json(), nextEventsRes.json(), playersRes.json()]
  );
  /* const request = await fetch(
    `https://www.thesportsdb.com/api/v1/json/40130162/lookupteam.php?id=${[
      team,
    ]}`
  ).then((res) => res.json()); */
  //const teams = JSON.parse(JSON.stringify(teamSchedule));

  return {
    props: {
      teamDetail: teamInfo.teams[0],
      teamEvents: teamSchedule,
      nextEvents: nextSchedule,

      playerDetail: playersInfo.player,
    },
  };
}
export default TeamPage;
