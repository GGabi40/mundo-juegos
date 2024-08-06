import LOGO from "/public/images/LOGO.webp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <a className="navbar-brand" href="/">
          <Image src={LOGO} width={150} height={150} alt="Mundo Juegos" />
        </a>

        <div className="categories">
          {/* Utilizar LINK */}
          {/* juegos/categoria */}
          <a
            href="../dos-jugadores"
            className="category-link two-players"
          >
            🤼 2 Jugadores
          </a>
          <a
            href="../clasicos"
            className="category-link two-players"
          >
            🎮 Clásicos
          </a>
          <a href="../accion" className="category-link action">
            ⚔️ Acción
          </a>
          <a href="../aventura" className="category-link adventure">
            🧭 Aventura
          </a>
          <a href="../puzzle" className="category-link puzzle">
            🧩 Puzzle
          </a>
          <a href="../estrategia" className="category-link strategy">
            ♟️ Estrategia
          </a>
          <a href="../cartas" className="category-link cards">
            🃏 Cartas
          </a>
          <a href="../deportes" className="category-link sports">
            ⚽ Deportes
          </a>
          <a href="../armas" className="category-link guns">
            🏹 Armas
          </a>
          <a href="../cocina" className="category-link kitchen">
            🍔 Cocina
          </a>
          <a href="../carreras" className="category-link rides">
            🏁 Carreras
          </a>
          <a href="../autos" className="category-link driving">
            🚗 Autos
          </a>
          <a href="../motos" className="category-link bikes">
            🏍️ Motos
          </a>
          <a href="../moda" className="category-link fashion">
            ✨ Moda
          </a>
          <a href="../vestir" className="category-link dress">
            👕 Vestir
          </a>
          <a href="../escape" className="category-link scape">
            🏃 Escape
          </a>
          <a href="../terror" className="category-link horror">
            💀 Terror
          </a>
          <a href="../medico" className="category-link medic">
            💊 Médico
          </a>
          <a
            href="../educativos"
            className="category-link educational"
          >
            📚 Educativos
          </a>
          <a href="../matematicas" className="category-link math">
            📒 Matemáticas
          </a>
          <a href="../musica" className="category-link music">
            🎵 Música
          </a>
        </div>

        <div className="row">
          <div className="col">ADS AQUÍ</div>
        </div>
        <div className="row">
          <div className="col">ADS AQUÍ</div>
        </div>
      </nav>
    </>
  );
}
