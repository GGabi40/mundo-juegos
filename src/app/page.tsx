"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

import Link from "next/link";

import "./layout";
import Nav from "./Components/Nav";
import TablaPrincipal from "./Components/TablaPrincipal";
import SmallBlocks from "./Components/SmallBlocks";

export default function Home() {
  return (
    <>
      <Nav />
      <TablaPrincipal />

      <div className="principal-games">
        <h3 className="newest">🆕 Novedad</h3>
        {/*
        HACER QUE FUNCIONE
         <Link href="PlayGames">
          Visit here
        </Link> */}
        <SmallBlocks />
        <h3>🎮 Juegos Clásicos</h3>
        <SmallBlocks />
        <h3>🧭 Juegos de Aventura</h3>
        <SmallBlocks />
        <h3>🍔 Juegos de Cocina</h3>
        <SmallBlocks />
      </div>
    </>
  );
}
