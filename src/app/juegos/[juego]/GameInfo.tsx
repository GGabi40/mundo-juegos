export default function gameInfo({ params }: { params: { description: string, controls: string } }) {
    return (
        <div className="info">
        <h2>Descripción del Juego:</h2>
        <p>{/* Descripción */}
            {params.description}
        </p>
        <h3>Controles:</h3>
        <p>
            {/* Controles del juego */}
            {params.controls}
        </p>
        </div>
    );
}