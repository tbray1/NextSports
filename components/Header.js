function Header(teamDetail) {
  console.log(teamDetail);
  return (
    <div>
      <header>
        <h1 className="text-center text-5xl font-extrabold relative">
          <img
            className="w-32 mx-auto"
            src={teamDetail.teamDetail.strTeamBadge}
            alt=""
          />
          {teamDetail.teamDetail.strTeam}
        </h1>
      </header>
    </div>
  );
}

export default Header;
