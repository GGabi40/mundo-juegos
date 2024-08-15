import Link from "next/link";
import "../../../styles/app.scss";

import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

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
              </div>
            </div>

            <div className="info">
              <h2>Descripción del Juego:</h2>
              <p>{/* Descripción */}
              Step into the dynamic and intriguing world of Hamster cute mer, the ultimate puzzle game that challenges your mind with a twist of personality! In this engaging and addictive game, your goal is to merge and match various iconic faces to create mega-characters and achieve high scores. Gameplay Features: Intuitive Controls: Simply swipe to combine faces and create new, larger characters. Easy to learn, but hard to master! 
              </p>
              <h3>Controles:</h3>
              <p>
                {/* Controles del juego */}
                🖱️ Mouse
                <br /> 📱👈 Touch 
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
