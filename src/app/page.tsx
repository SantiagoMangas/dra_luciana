import Hero from '../components/Hero';
import About from '../components/About'
import TrajectoriaPreview from '../components/TrayectoriaPreview'
import Valores from '../components/ServicesSection'
import BlogSection from '../components/BlogSection'
import ContactSecion from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TrajectoriaPreview />
      <Valores />
      <BlogSection />
      <ContactSecion />
    </>
  )
}