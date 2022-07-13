import Icon from "../Icon/Icon";
import "./Main.scss";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { playerPicked } from "../../store/features/gameSlice";
import { useNavigate } from "react-router-dom";
import { setToLS } from "../../utils/storage";
import { motion } from "framer-motion";
import { ReactComponent as Triangle } from "../../assets/images/bg-triangle.svg";
import { ReactComponent as Pentagon } from "../../assets/images/bg-pentagon.svg";

function Main() {
  const isBonusGame = useSelector((state: RootState) => state.game.isBonusGame);
  const emotesSimple = useSelector((state: RootState) => state.game.emotes);
  const emotesBonus = useSelector((state: RootState) => state.game.emotesBonus);
  const emotes = isBonusGame ? emotesBonus : emotesSimple;
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (emote: string) => {
    dispatch(playerPicked(emote));
    navigate(`/battle`);
    setToLS("emote", emote);
  };

  return (
    <div className="main">
      {emotes?.map((emote) => (
        <motion.div
          onClick={() => handleClick(emote)}
          key={emote}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`hands ${emote} ${isBonusGame ? "bonus" : ""}`}
        >
          <Icon emote={emote} />
        </motion.div>
      ))}
      {isBonusGame ? <Pentagon /> : <Triangle className="triangle" />}
    </div>
  );
}

export default Main;
