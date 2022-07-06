import Icon from "../Icon/Icon";
import "./Main.scss";
import { useDispatch } from "react-redux";
import { playerPicked } from "../../store/features/gameSlice";
import { useNavigate } from "react-router-dom";
import { setToLS } from "../../utils/storage";
import { motion } from "framer-motion";

function Main() {
  const types = ["paper", "scissors", "rock"];
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (type: string) => {
    dispatch(playerPicked(type));
    navigate(`/battle`);
    setToLS("type", type);
    setToLS("types", types);
  };

  return (
    <div className="main">
      {types.map((type) => (
        <motion.div
          onClick={() => handleClick(type)}
          key={type}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon type={type} />
        </motion.div>
      ))}
    </div>
  );
}

export default Main;
