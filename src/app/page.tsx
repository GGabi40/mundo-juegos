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

      <div className="container">
        <div className="principal-games">
          <h3>🖱️ Para Cliquear</h3>
          <SmallBlocks category="Clicker" />
          <h3>⚔️ Acción</h3>
          <SmallBlocks category="Action" />
          <h3>🔷 3D</h3>
          <SmallBlocks category="3D" />
        </div>
      </div>
      <Footer />
    </>
  );
}
