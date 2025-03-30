import Image from "next/image";
import Link from "next/link";

interface Game {
    id: number;
    title: string;
    author: string;
    image: string;
    video: string;
    description: string;
    iframeCode: string;
    categories: string[];
    gameURL: string;
}

interface CategoryGamesProps {
  games: Game[];
}

export default function CategoryGames({ games }: CategoryGamesProps) {

  return (
    <div>
      <div className="games-list">
        {games.length === 0 ? (
          <p>No hay juegos en esta categoría.</p>
        ) : (
          games.map((game) => (
            <div key={game.id} className="game-item">
              <Link href={`/juegos/${game.gameURL}`}>
                <Image
                  src={game.image}
                  alt={game.title}
                  width={150}
                  height={150}
                  className="game-image"
                />
                <h5>{game.title}</h5>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
