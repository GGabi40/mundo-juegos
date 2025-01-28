import Link from "next/link";
import "../../../styles/app.scss";

import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import GameInfo from "./GameInfo";
import GameIframe from "./GameIframe";

import '../../../utils/fontAwesome';

// Página BASE en donde estarán los juegos
// disponibles para jugar
export default function baseJuegos({ params }: { params: { juego: string } }) {
  const height = 625;

  return (
    <>
      <Nav />

      <div className="container">
        <div className="contain-container">
          <div className="backToPrincipal">
            <a href="/">⬅️ Volver</a>
          </div>

          <div className="contain-info">
            <div className="contain-title">
              <h1>Juego {params.juego}</h1>
              {/* Agg fullscreen */}
            </div>

            <div className="contain-game">
              <div className="display-game">
                {/* Juego aquí */}
                {/* <GameIframe
                  params={{
                    gameUrl: `https://html5.gamemonetize.co/0f8jl3z2d645u23b3ae08o137dfrf6ie/`
                  }}
                /> */}
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
