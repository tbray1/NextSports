import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Results({ results }) {
  return (
    <FlipMove className=" grid md:grid-cols-2 xl:grid-cols-5 ml-20 pr-12">
      {results.map((result) => (
        <Thumbnail key={result.idTeam} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
