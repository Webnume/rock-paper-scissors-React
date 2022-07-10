import Score from "../Score/Score"
import "./Header.scss"
import logo from "../../assets/images/logo.svg"

function Header() {
  return (
    <header>
        {/* <h1>ROCK PAPER SCISSORS</h1> */}
        <img src={logo} alt="logo" />
        <Score/>
    </header>
  )
}

export default Header