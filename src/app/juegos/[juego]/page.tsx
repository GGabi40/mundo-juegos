import Link from "next/link";
import "../../../styles/app.scss";

import Nav from "../../Components/Nav";

// Página BASE en donde estarán los juegos
// disponibles para jugar
export default function baseJuegos({ params }: { params: { juego: string } }) {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="contain-container">
          
          <div className="backToPrincipal">
            <a href="/">⬅️ Volver</a>
          </div>

          <h1>Juego {params.juego}</h1>
        </div>
      </div>
    </>
  );
}
