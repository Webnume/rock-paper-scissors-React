import "./Icon.scss";
// import rock from "../../assets/images/icon-rock.svg";
// import paper from "../../assets/images/icon-paper.svg";
// import scissors from "../../assets/images/icon-scissors.svg";
import { ReactComponent as Rock } from "../../assets/images/icon-rock.svg";
import { ReactComponent as Paper } from "../../assets/images/icon-paper.svg";
import { ReactComponent as Scissors } from "../../assets/images/icon-scissors.svg";

function Icon({ emote }: { emote: string }) {
  let icon = null;
  // let color = "";

  if (emote === "paper") {
    // icon = "hand paper";
    icon = <Paper />;
    // color = "blue";
  }
  if (emote === "scissors") {
    // icon = "hand-peace";
    icon = <Scissors />;
    // color = "yellow";
  }
  if (emote === "rock") {
    // icon = "hand-back-fist";
    icon = <Rock />;
    // color = "red";
  }

  return (
    // <section className={`hands ${color}`}>
    //   <i className={`fa-solid fa-${icon}`}></i>
    // </section>
    <section>
      {/* <i className={`fa-solid fa-${icon}`}></i> */}
      {/* <img src={icon} alt={icon} /> */}
      {icon}
    </section>
  );
}

export default Icon;
