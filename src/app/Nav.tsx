import LOGO from "../../public/images/LOGO.webp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <a className="navbar-brand" href="#">
          <Image src={LOGO} width={150} height={150} alt="Mundo Juegos" />
        </a>

        <div className="categories">
          <a
            href="/categories/dos-jugadores"
            className="category-link two-players"
          >
            🤼 2 Jugadores
          </a>
          <a
            href="/categories/dos-jugadores"
            className="category-link two-players"
          >
            🎮 Clásicos
          </a>
          <a href="/categories/accion" className="category-link action">
            ⚔️ Acción
          </a>
          <a href="/categories/aventura" className="category-link adventure">
            🧭 Aventura
          </a>
          <a href="/categories/puzzle" className="category-link puzzle">
            🧩 Puzzle
          </a>
          <a href="/categories/estrategia" className="category-link strategy">
            ♟️ Estrategia
          </a>
          <a href="/categories/cartas" className="category-link cards">
            🃏 Cartas
          </a>
          <a href="/categories/deportes" className="category-link sports">
            ⚽ Deportes
          </a>
          <a href="/categories/armas" className="category-link guns">
            🏹 Armas
          </a>
          <a href="/categories/familiar" className="category-link kitchen">
            🍔 Cocina
          </a>
          <a href="/categories/carreras" className="category-link rides">
            🏁 Carreras
          </a>
          <a href="/categories/manejar" className="category-link driving">
            🚗 Autos
          </a>
          <a href="/categories/motos" className="category-link bikes">
            🏍️ Motos
          </a>
          <a
            href="/categories/educativos"
            className="category-link educational"
          >
            📚 Educativos
          </a>
          <a href="/categories/moda" className="category-link fashion">
            ✨ Moda
          </a>
          <a href="/categories/vestir" className="category-link dress">
            👕 Vestir
          </a>
          <a href="/categories/terror" className="category-link horror">
            💀 Terror
          </a>
          <a href="/categories/escape" className="category-link scape">
            🏃 Escape
          </a>
          <a href="/categories/matematicas" className="category-link math">
            📒 Matemáticas
          </a>
          <a href="/categories/musica" className="category-link music">
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
