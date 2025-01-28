import "../../../styles/app.scss";


export default function GameIframe ({ params }: { params: { gameUrl: string } }) { 
  return (
      <iframe
        src={params.gameUrl}
        style={{
          width: 'auto',
          height: 'auto',
          border: "none"
        }}
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
)};
  
