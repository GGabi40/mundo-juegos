import "../../../styles/app.scss";

export default function GameIframe ({ params }: { params: { gameiFrame: string } }) {
  return (
    <div className="game-iframe">
      <iframe
        src={params.gameiFrame}
        width="50%"
        height="100%"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
)};
