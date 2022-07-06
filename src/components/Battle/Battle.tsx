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
  const type = getFromLS("type");

  const [player2, setPlayer2] = useState("");
  const [winner, setWinner] = useState(false);
  const [loading, setLoading] = useState(true);

  const shuffledArray = [...emotes].sort(
    (a: any, b: any) => 0.5 - Math.random()
  );
  const result = shuffledArray.filter((typ: any) => typ !== type);

  const rules: { [key: string]: any } = {
    paper: ["rock"],
    rock: ["scissors"],
    scissors: ["paper"],
  };

  const handleClick = () => {
    navigate("/main");
  };

  const score = () => {
    if (rules[type].includes(player2)) {
      dispatch(increment());
      setWinner(true);
    } else {
      dispatch(decrement());
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
    // return () => {
    //   setLoading(false);
    // };
  }, [player2]);

  return (
    <section className="battle">
      <h2 className="player-picked">YOU PICKED</h2>
      <div className="left">
        <Icon type={player1 || type} />
        {winner && player2 && <div className="winner"></div>}
      </div>
      {player2 ? (
        <div className="center">
          <h3>{winner ? "YOU WIN" : "YOU LOOSE"}</h3>
          <button onClick={handleClick}>PLAY AGAIN</button>
        </div>
      ) : (
        ""
      )}

      <h2 className="house-picked">THE HOUSE PICKED</h2>
      <div className="right">
        {player2 ? (
          <>
            <motion.div
              initial={{ scale: 0.5, opacity: 0, zIndex: 1 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Icon type={player2} />
            </motion.div>
            {!winner && <div className="winner"></div>}
          </>
        ) : (
          <span className="empty-slot"></span>
        )}
      </div>
    </section>
  );
}

export default Battle;
