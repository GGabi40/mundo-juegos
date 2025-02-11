"use client";

import { useState, useEffect } from "react";

import Image from "next/image";


export default function SmallBlocks() {
  const [games, setGames] = useState([]);
  const [hoveredGame, setHoveredGame] = useState(null);

  useEffect(() => {
    fetch('../../public/data/games.json')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="principal-games">
          <h3>🆕 Novedad</h3>
            <div className="row w-games">
            <div className="col">
              {/* <Image src={} width={100} height={100} alt="Imagen del Juego" /> */}
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
