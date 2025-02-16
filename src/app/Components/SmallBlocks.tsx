"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

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

  useEffect(() => {
    fetch('/data/games.json')
      .then(response => response.json())
      .then((data: Game[]) => setGames(data))
      .catch(e => console.error("¡Algo pasó! ", e));
  }, []);

  const getGameByCategory = (category: string) => {
    return games.filter((game) => game.categories.includes(category));
  };

  const gamesByCategory = getGameByCategory(category);

  return (
    <>
      <div className="row w-games">
        {gamesByCategory.map((game) => (
            <div key={game.id} className="col">
              <Image src={game.image} width={100} height={100} alt={game.title} className="game-image" />
              <h5>{game.title}</h5>
            </div>
        ))}
      </div>
    </>
  );
}
