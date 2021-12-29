import requests from "../utils/requests";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();

  return (
    <nav>
      <div className="text-2xl flex  space-x-10 min-w-max  bg-black">
        <Link href="/" passHref={false}>
          <h1 className="text-3xl text-red-500 font-extrabold cursor-pointer">
            NextSports{" "}
          </h1>
        </Link>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?l=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 text-white hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
