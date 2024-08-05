import React from "react";

export default function juego({ params }: { params: { categoria: string } }) {
  return (
    <div>
      <h1>Juegos de {params.categoria}</h1>
    </div>
  );
}
