import React from 'react';
import Link from 'next/link';
import { designSystem } from '../design-system';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4" style={{ backgroundColor: designSystem.colors.background, fontFamily: designSystem.fontFamily }}>
      <div className="text-xl font-bold" style={{ color: designSystem.colors.primary }}>
        Cinemark
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="#" className="uppercase" style={{ color: designSystem.colors.onBackground, fontSize: designSystem.fontFamily ? undefined : undefined }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="#" className="uppercase" style={{ color: designSystem.colors.onBackground }}>
            Cartelera
          </Link>
        </li>
        <li>
          <Link href="#" className="uppercase" style={{ color: designSystem.colors.onBackground }}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
