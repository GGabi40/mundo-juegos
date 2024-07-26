import Image from "next/image";

import traffic from "../../public/images/juegos/trafficcontrol300200.webp";
import trip from "../../public/images/juegos/fishingtrip-200.webp";

export default function BlocsChicos() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">
            <Image src={trip} width={100} height={100} alt="Traffic" />
          </div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
      </div>
    </>
  );
}
