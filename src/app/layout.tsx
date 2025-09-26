import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About'
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

