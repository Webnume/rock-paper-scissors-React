import "./Battle.scss";
import Icon from "../Icon/Icon";
import type { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/features/gameSlice";
import { getFromLS, setToLS } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Battle() {
  let navigate = useNavigate();
  const player1 = useSelector((state: RootState) => state.game.player1);
  const [player2, setPlayer2] = useState("");
  const dispatch = useDispatch();
  const emotes = useSelector((state: RootState) => state.game.emotes);
  const emote = getFromLS("emote");
  const scoreRedux = useSelector((state: RootState) => state.game.score);
  const scoreStorage = getFromLS("scoreStorage");
  const [winner, setWinner] = useState(false);
  const [loading, setLoading] = useState(true);

  const shuffledArray = [...emotes].sort(
    (_a: any, _b: any) => 0.5 - Math.random()
  );
  const result = shuffledArray.filter((typ: any) => typ !== emote);

  const rules: { [key: string]: any } = {
    paper: ["rock","spock"],
    rock: ["scissors","lizard"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  const handleClick = () => {
    navigate("/main");
  };

  const score = () => {
    if (rules[emote].includes(player2)) {
      dispatch(increment());
      setToLS("score", scoreStorage ? scoreStorage + 1 : scoreRedux + 1);
      setWinner(true);
    } else {
      dispatch(decrement());
      setToLS("score", scoreStorage ? scoreStorage - 1 : scoreRedux - 1);
      setWinner(false);
    }
  };

  const player2Setter = () => {
    setTimeout(() => {
      setPlayer2(result[0]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loading && player2Setter();
    player2 && score();
  }, [player2]);

  return (
    <section className="battle">
      <div className="left">
        <h2>YOU PICKED</h2>
        <div className={`hands ${emote}`}>
          <Icon emote={player1 || emote} />
        </div>
        {winner && player2 && <div className="winner"></div>}
      </div>
      {player2 ? (
        <div className="center">
          <h3>{winner ? "YOU WIN" : "YOU LOOSE"}</h3>
          <motion.button
            whileHover={{ scale: 1.1, color: "rgb(255 44 44)" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
          >
            PLAY AGAIN
          </motion.button>
        </div>
      ) : (
        ""
      )}

      <div className="right">
        <h2>THE HOUSE PICKED</h2>
        {player2 ? (
          <motion.div
            className={`hands ${player2}`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, zIndex: 1 }}
          >
            <Icon emote={player2} />
          </motion.div>
        ) : (
          <span className="empty-slot"></span>
        )}
        {!winner && player2 && <div className="winner"></div>}
      </div>
    </section>
  );
}

export default Battle;
