import { Goty } from "../Goty";
import "./style.css";
export const GameCard = ({ game }) => {
  const { image, title, text, goty, date, platform } = game;

  return (
    <article className="gameCard">
      <img src={image} alt={title} />
      <h2>
        {title} ({date}) ({platform})
      </h2>

      <p>{text}</p>

      {goty && <Goty className="goldText">GOTY</Goty>}
    </article>
  );
};
