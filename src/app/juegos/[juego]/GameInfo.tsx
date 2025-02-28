export default function gameInfo({ params }: { params: { description: string, controls: string, categorias: string[] } }) {
    return (
        <div className="info">
            <h2>Descripción del Juego:</h2>
            <p className="game-description">
                {params.description}
            </p>
            <h3>Controles:</h3>
            <p>
                {params.controls}
            </p>
            <h3>Categoría:</h3>
            <div className="categoria tags">
                {params.categorias.map((el) => (
                    <p>{el}</p>
                ))}
            </div>
        </div>
    );
}