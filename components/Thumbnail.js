import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";
const Thumbnail = forwardRef(({ result }, ref) => {
  return (
    <Link href={`/team/${result.idTeam}`}>
      <div
        ref={ref}
        className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-10"
      >
        <Image
          layout="responsive"
          src={result.strTeamBadge}
          height={200}
          alt=""
          width={200}
          quality={100}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.strDescriptionEN}</p>
          <h2 className="mt-1 text-2xl  text-red-500 transition-all duration-100 ease-in-out group-hover:font-bold">
            {result.strTeam}
          </h2>
        </div>
      </div>
    </Link>
  );
});

export default Thumbnail;
