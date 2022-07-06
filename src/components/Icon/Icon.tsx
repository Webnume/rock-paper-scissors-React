import "./Icon.scss";

function Icon({ type }: { type: string }) {
  let icon = "";
  let color = "";

  if (type === "paper") {
    icon = "hand paper";
    color = "blue";
  }
  if (type === "scissors") {
    icon = "hand-peace";
    color = "yellow";
  }
  if (type === "rock") {
    icon = "hand-back-fist";
    color = "red";
  }

  return (
    <section className={`hands ${color}`}>
      <i className={`fa-solid fa-${icon}`}></i>
    </section>
  );
}

export default Icon;
