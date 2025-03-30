"use client";

import { useState, useEffect } from "react";
import "../../../styles/app.scss";
import fetchGames from "@/utils/fetchGames";

import Nav from "../../Components/nav/Nav";
import Footer from "../../Components/footer/Footer";
import GameInfo from "./GameInfo";
import GameIframe from "./GameIframe";
import Error from "../../Components/error/Error";
import "@fontAwesome";

export default function BaseJuegos({ params }: { params: { juego: string } }) {
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.juego) return;

    fetchGames()
      .then((games) => {
        const foundGame = games.find((g: any) => g.gameURL === params.juego);
        setGame(foundGame || null);
      })
      .catch((error) => console.error("Error al obtener los juegos:", error))
      .finally(() => setLoading(false));
  }, [params?.juego]);

  const extractIframeSrc = (iframeCode: string) => {
    const match = iframeCode.match(/src="([^"]+)"/);
    return match ? match[1] : "";
  };

  const iframeSrc = game?.iframeCode ? extractIframeSrc(game.iframeCode) : ""


  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!game) {
    return <Error />;
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="contain-container">
          <div className="contain-info">
            <div className="contain-title">
              <h1>{game.title}</h1>
              <h3>
                By: <span className="author-cred">{game.author}</span>
              </h3>
            </div>

            <div className="contain-game">
              <GameIframe params={{ gameiFrame: iframeSrc }} />

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
              <GameInfo
                params={{
                  description: game.description || "Sin descripción",
                  controls: "🖱️ Mouse e 📱Touch",
                  categorias: game.categories
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
