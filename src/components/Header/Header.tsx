import Score from "../Score/Score";
import "./Header.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as LogoBonus } from "../../assets/images/logo-bonus.svg";

function Header() {
  const isBonusGame = useSelector((state: RootState) => state.game.isBonusGame);
  return (
    <header>
      {isBonusGame ? <LogoBonus /> : <Logo />}
      <Score />
    </header>
  );
}

export default Header;
