import Link from "next/link";

// Página BASE en donde estarán los juegos
// disponibles para jugar
export default function baseJuegos({ params }: { params: { juego: string } }) {
  return (
    <>
      <h1>Juego {params.juego}</h1>
      <Link href="/">Ir a Home</Link>
    </>
  );
}
