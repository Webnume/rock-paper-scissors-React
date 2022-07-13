import "./Icon.scss";
import { ReactComponent as Rock } from "../../assets/images/icon-rock.svg";
import { ReactComponent as Paper } from "../../assets/images/icon-paper.svg";
import { ReactComponent as Scissors } from "../../assets/images/icon-scissors.svg";
import { ReactComponent as Lizard } from "../../assets/images/icon-lizard.svg";
import { ReactComponent as Spock } from "../../assets/images/icon-spock.svg";

function Icon({ emote }: { emote: string }) {
  let icon = null;

  if (emote === "paper") {
    icon = <Paper />;
  }
  if (emote === "scissors") {
    icon = <Scissors />;
  }
  if (emote === "rock") {
    icon = <Rock />;
  }
  if (emote === "lizard") {
    icon = <Lizard />;
  }
  if (emote === "spock") {
    icon = <Spock />;
  }

  return <section>{icon}</section>;
}

export default Icon;
