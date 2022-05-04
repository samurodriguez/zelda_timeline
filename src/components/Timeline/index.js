import "./style.css";
import { GameCard } from "../GameCard";
import { List } from "../List";

export const Timeline = ({ games }) => {
  return (
    <section className="timeline">
      <List
        data={games.sort((a, b) => a.date - b.date)}
        render={(game, index) => (
          <li key={index}>
            <GameCard game={game} />
          </li>
        )}
      />
      ¡
    </section>
  );
};
