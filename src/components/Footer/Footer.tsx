import "./Footer.scss";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal.js";
import useModal from "../Modal/useModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleBonusGame } from "../../store/features/gameSlice";
import { setToLS } from "../../utils/storage";
import { RootState } from "../../store/store";
import { useCallback, useEffect } from "react";

function Footer() {
  const dispatch = useDispatch();
  const { isShowing, toggle } = useModal();
  const isBonusGame = useSelector((state: RootState) => state.game.isBonusGame);

  const handleClick = () => {
    dispatch(toggleBonusGame());
    setToLS("isBonusGame", !isBonusGame);
  };

  const escFunction = (event: any) => {

    if (event.key === "Escape" && isShowing) {
      //Do whatever when esc is pressed
      console.log("esc");

      return toggle();
    }
  }

  useEffect(() => {
    console.log(isShowing);
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [isShowing]);
  
  // useEffect(() => {
  //   console.log(isShowing);
  // }, [isShowing]);

  return (
    <footer>
      <Modal isShowing={isShowing} toggle={toggle} isBonusGame={isBonusGame} />
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
