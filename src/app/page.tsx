import Hero from '../components/Hero';
import About from '../components/About'
import Trayectoria from '../components/Trayectoria'
import Valores from '../components/ServicesSection'
import BlogSection from '../components/BlogSection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trayectoria />
      <Valores />
      <BlogSection />
    </>
  )
}