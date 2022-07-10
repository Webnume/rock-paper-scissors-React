import "./Footer.scss";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

function Footer() {
  const { isShowing, toggle } = useModal();
  return (
    <footer>
      <Modal isShowing={isShowing} hide={toggle} />
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="button-default" onClick={toggle}>
        RULES
      </motion.button>
    </footer>
  );
}

export default Footer;
