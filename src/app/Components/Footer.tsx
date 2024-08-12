import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*     AGG FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons' */

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span>&copy; 2024 Mundo Juegos</span>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link href="/privacy-policy">Política de Privacidad</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/terms-of-service">Términos de Servicio</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://youtube.com/@ggabi40" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </a>
          <a href="https://instagram.com/@ggabi40" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a href="https://ggabi40.github.io/linktree" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon='globe' />
          </a>
        </div>
      </div>
    </footer>
  );
}
