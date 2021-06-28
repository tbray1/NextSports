import Image from "next/image";
import React from "react";
const Roster = React.forwardRef(({ result }, ref) => {
  return (
    <div
      ref={ref}
      className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-10"
    >
      <Image
        layout="responsive"
        src={player.strThumb || "/default.png"}
        alt=""
        height={200}
        width={200}
        quality={100}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{player.strPosition}</p>
        <h2 className="mt-1 text-2xl  text-red-500 transition-all duration-100 ease-in-out group-hover:font-bold">
          {player.strPlayer}
        </h2>
      </div>
    </div>
  );
});

export default React.forwardRef(Roster);
