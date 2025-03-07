"use client";

import { useState, useEffect } from "react";

import fetchGames from "@/utils/fetchGames";
import { categoryTranslations } from "@/utils/categoryTranslations";

import SmallBlockCategory from "./SmallBlocksCategory";

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

export default function SmallBlocks() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGames()
      .then((data: Game[]) => {
        setGames(data);
      })
      .catch(e => console.error("¡Algo pasó! ", e));
  }, []);
  
  const categories = Object.keys(categoryTranslations);

  return (
    <>
      <div className="container">
        <div className="principal-games">
          {
            categories
            .filter(category => {
              // shows only if 5 games
              const gameCount = games.filter(game => game.categories.includes(category)).length;

              return gameCount > 5;
            })
            .map(category => {
              // translates category 
              const translatedCategory = categoryTranslations[category] || category;

              return (
                <div key={category} className="principal-games">
                  <h3>{translatedCategory}</h3>
                  <SmallBlockCategory category={category} translatedCategory={translatedCategory} />
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
