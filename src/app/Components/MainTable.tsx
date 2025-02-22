"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

export default function MainTable() {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>([]);
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);
  const maxGames = 10;

  useEffect(() => {
    fetch("/data/games.json")
      .then((response) => response.json())
      .then((data: Game[]) => {
        setGames(getRandomGames(data, maxGames));
      })
      .catch((e) => console.error("¡Algo pasó! ", e));
  }, []);

  const getRandomGames = (games: Game[], count: number): Game[] => {
    const shuffled = [...games].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Codifica datos y redirige en la URL
  const handleGameClick = (game: Game) => {
    const gameData = encodeURIComponent(JSON.stringify(game));
    /* Problema con URL muy grande + error 404 en iframe */
    router.push(`/juegos/${game.gameURL}?gameData=${gameData}`); 
  };

  return (
    <>
      <div className="container text-center">
        <div className="row w-games" style={{ height: "180px" }}>
          {games.map((game) => {
            return (
              <div 
                key={game.id}
                className="col" 
                onMouseEnter={() => setHoveredGameId(game.id)}
                onMouseLeave={() => setHoveredGameId(null)}
                onClick={() => handleGameClick(game)}
              >
              <Link href="./juegos/[gameURL]" as = {`/juegos/${game.gameURL}`} className="link-juego">
                <Image
                    src={game.image}
                    width={150}
                    height={150}
                    alt={game.title}
                    className="game-image"
                    loading="lazy"
                  />
              </Link>
                {/* Mostrar video si el juego está siendo "hovered" */}
                {hoveredGameId === game.id && game.video && (
                  <div className="video-overlay">
                    <Link href="./juegos/[gameURL]" as = {`/juegos/${game.gameURL}`} className="link-juego">
                      <h5>{game.title}</h5>
                      <video
                        width="150"
                        height="150"
                        muted
                        autoPlay
                        loop
                        disablePictureInPicture
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

        <div className="row">
          <div className="col">
            {/* <Image src={trip} width={150} height={150} alt="Traffic" /> */}
          </div>
        </div>
      </div>

      <div className="container">
        <h3>✨ Recomendados</h3> 
        {/* SACAR CATEGORÍA + VISITADA DEL USER */}
        <div className="row">
          <div className="col">
            {/* <Image src={trip} width={180} height={200} alt="Traffic" /> */}
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
