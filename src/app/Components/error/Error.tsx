import "../../../styles/app.scss";
import "../../../utils/fontAwesome";

import Nav from '../nav/Nav';

export default function Error() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="contain-container">
          <div className="backToPrincipal">
            <a href="/">⬅️ Volver</a>
          </div>

          <div className="container-error">
            <div className="image-texto">
              <div className="error-title">
                <h1>Error 404</h1>
                <h3>Page not found</h3>
              </div>
              <div className="juego-dino">
                <div className="game-container">
                  <iframe
                    src="https://chromedino.com"
                    height="300"
                    title="Juego del Dinosaurio"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
