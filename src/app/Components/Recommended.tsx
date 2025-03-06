"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
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

export default function Recommended() {
  const [games, setGames] = useState<Game[]>([]);
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);
  const router = useRouter();
  const maxGames = 8;

  useEffect(() => {
    fetchGames()
      .then((data) => setGames(getRandomGames(data, maxGames)))
      .catch((e) => console.error(`Error al mostrar data. ${e}`));
  }, []);

  const getRandomGames = (games: Game[], count: number): Game[] => {
    const shuffled = [...games].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const handleGameClick = (game: Game) => {
    router.push(`/juegos/${game.gameURL}`);
  };

  return (
    <>
      <h3>✨ Recomendados</h3>
      {/* SACAR CATEGORÍA + VISITADA DEL USER */}
      <div className="row w-games">
        {games.map((game) => {
          return (
            <div
              key={game.id} className="col"
              onClick={() => handleGameClick(game)}
              onMouseEnter={() => setHoveredGameId(game.id)}
              onMouseLeave={() => setHoveredGameId(null)}
            >
              <Link href={`/juegos/${game.gameURL}`} className="link-juego">
                <Image
                  src={game.image}
                  width={150} height={150} alt={game.title}
                  className="game-image" loading="lazy" />
                <h5>{game.title}</h5>
              </Link>
              {hoveredGameId === game.id && game.video && (
                <div className="video-overlay">
                  <Link href={`/juegos/${game.gameURL}`} className="link-juego">
                    <video
                      className="video-element"
                      width="150" height="250"
                      muted autoPlay loop
                      disablePictureInPicture
                      onLoadedData={(e) => (e.currentTarget.style.opacity = "1")} >
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
    </>
  );
}
