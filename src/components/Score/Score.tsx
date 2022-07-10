import "./Score.scss";
import { getFromLS } from "../../utils/storage";
import { useSelector } from "react-redux";

function Score() {
  const scoreRedux = useSelector((state: any) => state.game.score);
  const scoreStorage = getFromLS("score");
  return (
    <section className="score">
      <h2>SCORE</h2>
      <span>{scoreStorage ? scoreStorage : scoreRedux}</span>
    </section>
  );
}

export default Score;
