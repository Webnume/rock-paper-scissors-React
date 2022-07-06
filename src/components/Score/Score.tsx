import "./Score.scss";
import { getFromLS } from "../../utils/storage";
import { useSelector } from "react-redux";

function Score() {
  const score = useSelector((state: any) => state.game.score);
  // const score = getFromLS("score");
  return (
    <section className="score">
      <h2>SCORE</h2>
      <span>{score}</span>
    </section>
  );
}

export default Score;
