"use client";

import { useEffect, useState } from "react";

import LOGO from "/public/images/LOGO.webp";
import Image from "next/image";
import Link from "next/link";

interface Image {
  [key: string]: string[];
}

const images: Image = {
  "twoPlayers": ['2 Jugadores', 'images/categories/twoPlayers.webp'],
  "classics": ['Clásicos', 'images/categories/classic.webp'],
  "action": ['Acción', 'images/categories/action.webp'],
  "adventure": ['Aventura', 'images/categories/adventure.webp'],
  "puzzle": ['Puzzle', 'images/categories/puzzle.webp'],
  "strategy": ['Estratégia', 'images/categories/strategy.webp'],
  "cards": ['Cartas', 'images/categories/cards.webp'],
  "sports": ['Deportes', 'images/categories/sports.webp'],
  "guns": ['Armas', 'images/categories/guns.webp'],
  "kitchen": ['Cocina', 'images/categories/kitchen.webp'],
  "rides": ['Carreras', 'images/categories/rides.webp'],
  "driving": ['Autos', 'images/categories/driving.webp'],
  "bikes": ['Motos', 'images/categories/bikes.webp'],
  "fashion": ['Moda', 'images/categories/fashion.webp'],
  "dress": ['Vestir', 'images/categories/dressUp.webp'],
  "scape": ['Escape', 'images/categories/scape.webp'],
  "horror": ['Terror', 'images/categories/horror.webp'],
  "medic": ['Médico', 'images/categories/medic.webp'],
  "educational": ['Educacional', 'images/categories/educational.webp'],
  "math": ['Matemáticas', 'images/categories/math.webp'],
  "music": ['Música', 'images/categories/music.webp'],
}

export default function Nav() {
  /* const [clickedCategories, setClickedCategories] = useState([]);

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem("clickedCategories")) || [];
    setClickedCategories(savedCategories);
  }, []) */

  // Si no hay juegos : <Error />
  // traducir juegos antes de tocar -> ir a link traducido

  return (
    <>
      <nav>
        <Link className="navbar-brand" href="/">
          <Image src={LOGO} width={150} height={150} alt="Mundo Juegos" />
        </Link>
        
        <div className="categories">
        {
            Object.keys(images).map((key) => {
              return (
                <Link
                  key={key}
                  href={`/${key}`}
                  className={`category-link ${key}`}
                >
                  <Image src={`/${images[key][1]}`} width={20} height={20} alt={key} className="image-category-link" loading="lazy" />
                  <span className="image-nav">
                    {images[key][0]}
                  </span>
                </Link>
              );
            })
          }
        </div>

        {/* <div className="row">
          <div className="col">ADS AQUÍ</div>
        </div>
        <div className="row">
          <div className="col">ADS AQUÍ</div>
        </div> */}
      </nav>
    </>
  );
}
