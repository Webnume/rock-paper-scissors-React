import { useState } from 'react';
import { getFromLS } from "../../utils/storage";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function isBonusGame(){
    return getFromLS("isBonusGame");
  }

  return {
    isShowing,
    toggle,
    isBonusGame
  }
};

export default useModal;