import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-6">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Sobre mí</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}