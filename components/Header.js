import Image from "next/image";

function Header(teamDetail) {
  return (
    <div className=" flex justify-center text-5xl font-extrabold  ">
      <Image
        src={teamDetail.teamDetail.strTeamBadge}
        alt=""
        width={100}
        height={100}
      />
      <h1 className="pt-10">{teamDetail.teamDetail.strTeam}</h1>
    </div>
  );
}

export default Header;
