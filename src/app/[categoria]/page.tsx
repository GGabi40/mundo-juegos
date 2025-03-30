"use client";

import "../../styles/app.scss";

import { useState, useEffect } from "react";
import { categoryTranslations } from "@/utils/categoryTranslations";
import fetchGames from "@/utils/fetchGames";

import Error from "../Components/error/Error";
import Nav from "../Components/nav/Nav";
import CategoryGames from "../Components/categoryGames/CategoryGames";

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

export default function GameCategories({ params }: { params: { categoria: string } }) {
  const [games, setGames] = useState<Game[]>([]);
  const cat = params.categoria;
  const category = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();

  const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  useEffect(() => {
    fetchGames()
      .then((data: Game[]) => setGames(data))
      .catch(e => console.error("¡Algo pasó! ", e));
  }, []);

  if(!categoryTranslations[normalizedCategory]) {
    return <Error />
  }

  const filteredGames = games.filter((game) => game.categories.includes(category));

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="contain-container">
          
          <div className="backToPrincipal">
            <a href="/">⬅️ Volver</a>
          </div>

          <h1>Juegos de {categoryTranslations[normalizedCategory]}</h1>

          <CategoryGames
            games={filteredGames}
          />
        </div>
      </div>
    </div>
  );
}
