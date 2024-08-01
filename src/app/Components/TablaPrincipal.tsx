import Image from "next/image";

import traffic from "/public/images/juegos/trafficcontrol300200.webp";
import trip from "/public/images/juegos/fishingtrip-200.webp";

import BlocsChicos from './SmallBlocks'

export default function TablaPrincipal() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <a href="#">
              <Image src={traffic} width={200} height={140} alt="Traffic" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <Image src={traffic} width={200} height={140} alt="Traffic" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <Image src={traffic} width={200} height={140} alt="Traffic" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <Image src={traffic} width={200} height={140} alt="Traffic" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <Image src={traffic} width={200} height={140} alt="Traffic" />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Image src={trip} width={150} height={150} alt="Traffic" />
          </div>
          <div className="col">2 of 6</div>
          <div className="col">3 of 6</div>
          <div className="col">4 of 6</div>
          <div className="col">5 of 6</div>
          <div className="col">6 of 6</div>
        </div>
      </div>

      <BlocsChicos />

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Image src={trip} width={180} height={200} alt="Traffic" />
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
