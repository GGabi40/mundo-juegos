import LOGO from "/public/images/LOGO.webp";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <>
      <nav>
        <Link className="navbar-brand" href="/">
          <Image src={LOGO} width={150} height={150} alt="Mundo Juegos" />
        </Link>
        
        <div className="categories">
          {/* juegos/categoria */}
          <Link
            href="../dos-jugadores"
            className="category-link two-players"
          >
            🤼 2 Jugadores
          </Link>
          <Link
            href="../clasicos"
            className="category-link two-players"
          >
            🎮 Clásicos
          </Link>
          <Link href="../accion" className="category-link action">
            ⚔️ Acción
          </Link>
          <Link href="../aventura" className="category-link adventure">
            🧭 Aventura
          </Link>
          <Link href="../puzzle" className="category-link puzzle">
            🧩 Puzzle
          </Link>
          <Link href="../estrategia" className="category-link strategy">
            ♟️ Estrategia
          </Link>
          <Link href="../cartas" className="category-link cards">
            🃏 Cartas
          </Link>
          <Link href="../deportes" className="category-link sports">
            ⚽ Deportes
          </Link>
          <Link href="../armas" className="category-link guns">
            🏹 Armas
          </Link>
          <Link href="../cocina" className="category-link kitchen">
            🍔 Cocina
          </Link>
          <Link href="../carreras" className="category-link rides">
            🏁 Carreras
          </Link>
          <Link href="../autos" className="category-link driving">
            🚗 Autos
          </Link>
          <Link href="../motos" className="category-link bikes">
            🏍️ Motos
          </Link>
          <Link href="../moda" className="category-link fashion">
            ✨ Moda
          </Link>
          <Link href="../vestir" className="category-link dress">
            👕 Vestir
          </Link>
          <Link href="../escape" className="category-link scape">
            🏃 Escape
          </Link>
          <Link href="../terror" className="category-link horror">
            💀 Terror
          </Link>
          <Link href="../medico" className="category-link medic">
            💊 Médico
          </Link>
          <Link
            href="../educativos"
            className="category-link educational"
          >
            📚 Educativos
          </Link>
          <Link href="../matematicas" className="category-link math">
            📒 Matemáticas
          </Link>
          <Link href="../musica" className="category-link music">
            🎵 Música
          </Link>
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
