import Image from "next/image";

import "../../styles/app.scss";
import "../../utils/fontAwesome";
import errorImg from "/public/images/img/error.png";

import Nav from "../Components/Nav";

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
                <h2>Page not found</h2>
              </div>
              <div className="image">
                <Image src={errorImg} width={300} height={300} alt="Error 404" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
