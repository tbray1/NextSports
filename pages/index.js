import Head from "next/head";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);

  return (
    <div className="text-xl">
      <Head>
        <title> NextSports</title>
      </Head>

      <Nav />
      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const sport = context.query.l;
  const request = await fetch(
    `https://www.thesportsdb.com/api/v1/json/1${
      requests[sport]?.url || requests.fetchNFL.url
    }`
  ).then((res) => res.json());
  const teams = JSON.parse(JSON.stringify(request));
  return {
    props: {
      results: teams.teams,
    },
  };
}
