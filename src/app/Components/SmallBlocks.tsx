import { useState, useEffect } from "react";

import Image from "next/image";

import trip from "/public/images/juegos/fishingtrip-200.webp";

// Paámetro para saber qué tipo de juego será Ej.: ({ category })
// se manda: <BlockChicos(nuevo) />  => Parecerán todos los lanzamientos + recientes
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
      <div className="container text-center">
        <div className="row w-games">
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
        </div>
      </div>
    </>
  );
}
