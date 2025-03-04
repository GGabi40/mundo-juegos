"use client";

import Image from "next/image";
import Link from "next/link";

export default function Recommended() {
    return (
        <>
            <h3>✨ Recomendados</h3> 
            {/* SACAR CATEGORÍA + VISITADA DEL USER */}
            <div className="row">
            <div className="col">
                {/* <Image src={trip} width={180} height={200} alt="Traffic" /> */}
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            </div>
        </>
    )
}