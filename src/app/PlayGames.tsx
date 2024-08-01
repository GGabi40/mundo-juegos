import { useEffect } from "react";
import Link from "next/link";

// Página BASE en donde estarán los juegos
// disponibles para jugar
export default function PlayGame() {
  return (
    <>
      <h1>Juego</h1>
      <Link href="/">Home</Link>
    </>
  );
}
