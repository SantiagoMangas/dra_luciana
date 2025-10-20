import Hero from '../components/Hero';
import About from '../components/About'
import Trayectoria from '../components/Trayectoria'
import Valores from '../components/ServicesSection'
import BlogSection from '../components/BlogSection'
import ContactSecion from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trayectoria />
      <Valores />
      <BlogSection />
      <ContactSecion />
    </>
  )
}