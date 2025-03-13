import "../../styles/app.scss";

import Nav from "../Components/Nav";


export default function GameCategories({ params }: { params: { categoria: string } }) {
  // Cada juego: verificar si es la categoría -> mostrar
  // traducir juegos

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="contain-container">
          
          <div className="backToPrincipal">
            <a href="/">⬅️ Volver</a>
          </div>

          <h1>Juegos de {params.categoria}</h1>
        </div>
      </div>
    </div>
  );
}
