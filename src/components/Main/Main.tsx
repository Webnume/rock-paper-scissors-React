import Icon from "../Icon/Icon";
import "./Main.scss";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { playerPicked } from "../../store/features/gameSlice";
import { useNavigate } from "react-router-dom";
import { setToLS } from "../../utils/storage";
import { motion } from "framer-motion";

function Main() {
  const emotes = useSelector((state: RootState) => state.game.emotes);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (emote: string) => {
    dispatch(playerPicked(emote));
    navigate(`/battle`);
    setToLS("emote", emote);
  };

  return (
    <div className="main">
      {/* <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;" xml:space="preserve">
<style type="text/css">
	.st0{fill: "none";stroke:"#203B75";stroke-width:"14";stroke-miterlimit:"10";}
</style>
<line class="st0" x1="124" y1="236" x2="483" y2="236"/>
</svg> */}

      {emotes?.map((emote) => (
        <motion.div
          onClick={() => handleClick(emote)}
          key={emote}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`hands ${emote}`}
        >
          <Icon emote={emote} />
        </motion.div>
      ))}
    </div>
  );
}

export default Main;
