import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 md:grid-cols-2 xl:grid-cols-5">
      {results.map((result) => (
        <Thumbnail key={result.idTeam} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
