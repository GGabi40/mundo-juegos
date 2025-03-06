"use client";

import { useState, useEffect } from "react";

import PrincipalGames from "./PrincipalGames";
import Recommended from './Recommended';

export default function MainTable() {
  const principalPhrases = ['¡Explora y diviértete!', '¡Hola!', '¡Disfruta jugando!'];
  // si posee localStorage: ¡Qué bueno verte otra vez!

  const getRandomPhrase = () => {
    const index = Math.floor(Math.random() * principalPhrases.length);
    const electedPhrase = principalPhrases[index];
    return electedPhrase;
  }

  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    setPhrase(getRandomPhrase())
  }, []);

  return (
    <>
      <h2 className="text-center title">{phrase}</h2>
      <PrincipalGames />
      <PrincipalGames />

      {/* IF localStorage: 2do PrincipalGames disappear - appers Recommended */}
      {/* <div className="container">
        <Recommended />
      </div> */}
    </>
  );
}
