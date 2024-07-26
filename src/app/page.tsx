"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/app.scss";

import { useState, useEffect } from "react";

import "./layout";
import Nav from "./Nav";
import TablaPrincipal from './TablaPrincipal'
import BlocsChicos from './BlocsChicos'

import Image from "next/image";
import trip from "../../public/images/juegos/fishingtrip-200.webp";

export default function Home() {
  return (
    <>
      <Nav />
      <TablaPrincipal />

      <div className="principal-games">
        <h3>🎮 Juegos Clásicos</h3>
        <BlocsChicos />
        <h3>🧭 Juegos de Aventura</h3>
        <BlocsChicos />
        <h3>🍔 Juegos de Cocina</h3>
        <BlocsChicos />
      </div>
    </>
  );
}
