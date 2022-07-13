import "./Footer.scss";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal.js";
import useModal from "../Modal/useModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleBonusGame } from "../../store/features/gameSlice";
import { setToLS } from "../../utils/storage";
import { RootState } from "../../store/store";

function Footer() {
  const dispatch = useDispatch();
  const { isShowing, toggle } = useModal();
  const isBonusGame = useSelector((state: RootState) => state.game.isBonusGame);

  const handleClick = () => {
    dispatch(toggleBonusGame());
    setToLS("isBonusGame", !isBonusGame);
  };

  return (
    <footer>
      <Modal isShowing={isShowing} hide={toggle} />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="button-default"
        onClick={handleClick}
      >
        {isBonusGame ? "SIMPLE GAME" : "BONUS GAME"}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="button-default"
        onClick={toggle}
      >
        RULES
      </motion.button>
    </footer>
  );
}

export default Footer;
