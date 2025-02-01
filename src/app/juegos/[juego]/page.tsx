import Link from "next/link";
import "../../../styles/app.scss";

import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import GameInfo from "./GameInfo";
import GameIframe from "./GameIframe";

import '../../../utils/fontAwesome';

// Página BASE en donde estarán los juegos
// disponibles para jugar
export default function baseJuegos({ params }: { params: { juego: string, author: string } }) {

  return (
    <>
      <Nav />

      <div className="container">
        <div className="contain-container">

          <div className="contain-info">
            <div className="contain-title">
              <h1>Juego {params.juego}</h1>
              <h3>By: <span className="author-cred">{/* AUTHOR - BBDD */}</span></h3> {/* VER */}
              {/* Agg fullscreen */}
            </div>

            <div className="contain-game">
              <GameIframe
                params={{
                  gameUrl: `https://html5.gamemonetize.games/ptog1yv2rirz05wbsbtvc396j280xso8/`
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
