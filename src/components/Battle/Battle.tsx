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
  const dispatch = useDispatch();
  const emotes = useSelector((state: RootState) => state.game.emotes);
  const emote = getFromLS("emote");
  const scoreRedux = useSelector((state: RootState) => state.game.score);
  const scoreStorage = getFromLS("scoreStorage");
  const [player2, setPlayer2] = useState("");
  const [winner, setWinner] = useState(false);
  const [loading, setLoading] = useState(true);

  const shuffledArray = [...emotes].sort(
    (a: any, b: any) => 0.5 - Math.random()
  );
  const result = shuffledArray.filter((typ: any) => typ !== emote);

  const rules: { [key: string]: any } = {
    paper: ["rock"],
    rock: ["scissors"],
    scissors: ["paper"],
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
      <h2 className="player-picked">YOU PICKED</h2>
      <div className={`left hands ${emote}`}>
        <Icon emote={player1 || emote} />
        {winner && player2 && <div className="winner"></div>}
      </div>
      {player2 ? (
        <div className="center">
          <h3>{winner ? "YOU WIN" : "YOU LOOSE"}</h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
          >
            PLAY AGAIN
          </motion.button>
        </div>
      ) : (
        ""
      )}

      <h2 className="house-picked">THE HOUSE PICKED</h2>
      {player2 ? (
        <>
          <div className={`right hands ${player2}`}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0, zIndex: 1 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Icon emote={player2} />
            </motion.div>
            {!winner && <div className="winner"></div>}
          </div>
        </>
      ) : (
        <span className="empty-slot"></span>
      )}
    </section>
  );
}

export default Battle;
