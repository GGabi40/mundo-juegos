"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

import { useState, useEffect } from "react";

import "./layout";
import Nav from "./Components/Nav";
import MainTable from "./Components/MainTable";
import SmallBlocks from "./Components/SmallBlocks";
import Footer from "./Components/Footer";

import '../utils/fontAwesome';
import { categoryTranslations } from "@/utils/categoryTranslations";
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

export default function Home() {
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
      <Nav />
      <MainTable />

      <div className="container">
        <div className="principal-games">
          {
            categories.filter(category => games.some(game => game.categories.includes(category)))
            .map(category => {
              const traslatedCategory = categoryTranslations[category] || category;
              
              return (
                <div key={category} className="principal-games">
                  <h3>{traslatedCategory}</h3>
                  <SmallBlocks category={category} />
                </div>
              );
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
