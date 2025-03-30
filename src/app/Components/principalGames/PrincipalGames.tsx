import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import fetchGames from "@/utils/fetchGames";

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

export default function PrincipalGames() {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>([]);
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);
  const maxGames = 10;

  // Recupera datos de Base de Datos
  useEffect(() => {
    fetchGames()
      .then((data) => setGames(getRandomGames(data, maxGames)))
      .catch((e) => console.error(`Error al mostrar data. ${e}`));
  }, []);

  // Elige juegos aleatorios para el main
  const getRandomGames = (games: Game[], count: number): Game[] => {
    const shuffled = [...games].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Redirige URL
  const handleGameClick = (game: Game) => {
    router.push(`/juegos/${game.gameURL}`);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row w-games" style={{ height: "180px" }}>
          {games.map((game) => {
            return (
              <div 
                key={game.id} className="col" 
                onMouseEnter={() => setHoveredGameId(game.id)}
                onMouseLeave={() => setHoveredGameId(null)}
                onClick={() => handleGameClick(game)}
              >
              <Link href={`/juegos/${game.gameURL}`} className="link-juego">
                <Image src={game.image}
                    width={150} height={150} alt={game.title}
                    className="game-image" loading="lazy" />
              </Link>
                {/* Mostrar video si el juego está siendo "hovered" */}
                {hoveredGameId === game.id && game.video && (
                  <div className="video-overlay">
                    <Link href={`/juegos/${game.gameURL}`} className="link-juego">
                      <h5>{game.title}</h5>
                      <video
                        className="video-element"
                        width="150" height="150"
                        muted autoPlay loop
                        disablePictureInPicture
                        onLoadedData={(e) => e.currentTarget.style.opacity = "1"} 
                      >
                        <source src={game.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
