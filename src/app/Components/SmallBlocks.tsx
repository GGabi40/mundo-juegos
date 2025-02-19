"use client";

import { useState, useEffect } from "react";

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
};

export default function SmallBlocks({ category }: { category: string }) {
  const [games, setGames] = useState<Game[]>([]);
  const maxGames = 10;

  useEffect(() => {
    fetch('/data/games.json')
      .then(response => response.json())
      .then((data: Game[]) => setGames(data))
      .catch(e => console.error("¡Algo pasó! ", e));
  }, []);

  const getGameByCategory = (category: string) => {
    return games.filter((game) => game.categories.includes(category));
  };

  const gamesByCategory = getGameByCategory(category).slice(0, maxGames);

  return (
    <>
      <div className="row w-games">
        {gamesByCategory.map((game) => {
          const title = game.title.split(" ").slice(0, 4).join(" ");


          return (
            <div key={game.id} className="col">
              <Image
               src={game.image} 
               width={100} 
               height={100} 
               alt={game.title} 
               className="game-image"
              />
              
              <h5>{title}</h5>
            </div>
          );
        })}

        {/* "Ver más" */}
        {getGameByCategory(category).length > maxGames && (
          <div className="col">
            <Link href={`/${category}`} className="see-more">
              Ver más de <span className="link">{category} ➡️</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
