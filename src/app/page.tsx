"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

import Link from "next/link";

import "./layout";
import Nav from "./Components/Nav";
import MainTable from "./Components/MainTable";
import SmallBlocks from "./Components/SmallBlocks";
import Footer from "./Components/Footer";

import '../utils/fontAwesome';

export default function Home() {
  return (
    <>
      <Nav />
      <MainTable />

      <div className="principal-games">
        <h3 className="newest">🆕 Novedad</h3>

        <SmallBlocks />
        <h3>🎮 Juegos Clásicos</h3>
        <SmallBlocks />
        <h3>🧭 Juegos de Aventura</h3>
        <SmallBlocks />
        <h3>🍔 Juegos de Cocina</h3>
        <SmallBlocks />
      </div>
      
      <Footer />
    </>
  );
}
