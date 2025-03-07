"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import fetchGames from "@/utils/fetchGames";
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

interface Props {
  category: string;
  translatedCategory: string;
}

export default function SmallBlockCategory({ category, translatedCategory }: Props) {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>([]);
  const maxGames = 10;

  useEffect(() => {
    fetchGames()
      .then((data: Game[]) => setGames(data))
      .catch(e => console.error("¡Algo pasó! ", e));
  }, []);

  const getGameByCategory = (category: string) => {
    return games.filter((game) => game.categories.includes(category));
  };

  const gamesByCategory = getGameByCategory(category).slice(0, maxGames);

  const handleGameClick = (game: Game) => {
    router.push(`/juegos/${game.gameURL}`); 
  };

  return (
    <>
      <div className="row w-games">
        {gamesByCategory.map((game) => {
          const title = game.title.split(" ").slice(0, 4).join(" ");


          return (
            <div key={game.id} className="col" onClick={() => handleGameClick(game)}>
              <Link href={`/juegos/${game.gameURL}`} className="link-juego">
                <Image
                src={game.image} 
                width={100} 
                height={100} 
                alt={game.title} 
                className="game-image"
                loading="lazy"
                />
                
                <h5>{title}</h5>
              </Link>
            </div>
          );
        })}

        {/* "Ver más" */}
        {getGameByCategory(category).length >= 8 && (
          <div className="col">
            <Link href={`/${category}`} className="see-more">
              Ver más de <span className="link">{translatedCategory} ➡️</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
