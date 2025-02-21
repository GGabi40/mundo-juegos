import "../../../styles/app.scss";

export default function GameIframe ({ params }: { params: { gameUrl: string } }) {
  return (
    <div className="game-iframe">
      <iframe
        src={params.gameUrl}
        width="50%"
        height="100%"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
)};
