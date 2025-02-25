"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import "../../../styles/app.scss";
import fetchGames from "@/utils/fetchGames";

import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import GameInfo from "./GameInfo";
import GameIframe from "./GameIframe";
import Error from "@/app/Components/Error";

import '../../../utils/fontAwesome';

/* 
Agarrar:
-> JSON
-> verificar qué id de juego es
-> por su id, poner titulo, autor, iframe, descripcion, controls, tags
*/

// Página BASE en donde estarán los juegos disponibles para jugar
export default function baseJuegos({ params }: { params: { juego: string  } }) {
  const [game, setGame] = useState<any>(null);
  console.log({ params });

  // const [id, ...gameURLParts] = params.juego.split('-');
  // console.log(id);
  // console.log('OTRO: ', gameURLParts);

  /* fetchGames().then((juegos) => {
    const foundGame = juegos.find((g: any) => g.id.toString() === id);
    console.log(foundGame);
  }) */

  useEffect(() => {
    fetchGames()
      .then((games) => {
        const [id, ...gameURLParts] = params.juego.split('-');
        // const gameURL = gameURLParts.join('-');
        const foundGame = games.find((game: any) => game.id.toString() === id);
        console.log('JUEGO ENCONTRADO: ', foundGame);

        setGame(foundGame);
      })
      .catch((error) => console.error("Error al obtener los juegos:", error));
  }, [params.juego]);

  console.log({game});

  if(!game) return <Error />

  return (
    <>
      <Nav />

      <div className="container">
        <div className="contain-container">

          <div className="contain-info">
            <div className="contain-title">
              <h1>{game.title}</h1>
              <h3>By: <span className="author-cred">{game.author}</span></h3>
            </div>

            <div className="contain-game">
              <GameIframe
                params={{
                  gameiFrame: `${game.gameURL}`
                }}
              />

              <div className="recomendaciones">
                <div className="recomendacion">
                  <div className="juegos-recomendados"></div>
                  <div className="juegos-recomendados"></div>
                  <div className="juegos-recomendados"></div>
                  <div className="juegos-recomendados"></div>
                </div>
              </div>
            </div>

            <div className="info">
              {/* Game info */}
              <GameInfo
                params={{
                  description: "Hola",
                  controls: "🖱️ Mouse e 📱Touch"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
