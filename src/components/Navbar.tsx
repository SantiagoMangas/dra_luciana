'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from './button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Efecto para manejar el tema
  useEffect(() => {
    // Leer preferencia guardada al cargar
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      const isDarkMode = savedTheme === 'dark'
      setIsDark(isDarkMode)
      updateTheme(isDarkMode)
    } else {
      setIsDark(systemPrefersDark)
      updateTheme(systemPrefersDark)
    }
  }, [])

  const updateTheme = (isDarkMode: boolean) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  // Cerrar menú
  const closeMenu = () => {
    setIsOpen(false)
  }

  // Toggle tema
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    updateTheme(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  // Bloquear scroll cuando el menú esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#trayectoria', label: 'Trayectoria' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-slate-700/20' 
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group" onClick={closeMenu}>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                  Dra. Luciana Mangas
                </span>
              </Link>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Controles de tema y menú */}
            <div className="flex items-center space-x-3">
              {/* Toggle de tema */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className="h-10 w-10 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 group"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-amarilloPastel group-hover:rotate-12 transition-transform duration-200" />
                ) : (
                  <Moon className="h-5 w-5 text-primary group-hover:-rotate-12 transition-transform duration-200" />
                )}
              </Button>

              {/* Botón menú móvil */}
              <div className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Menú de navegación"
                  className="h-10 w-10 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200"
                >
                  {isOpen ? (
                    <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay con desenfoque para móvil */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      
      {/* Panel del menú móvil */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] transform bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out md:hidden border-l border-gray-200 dark:border-slate-700 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header del menú */}
          <div className="flex items-center justify-between mb-10">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent" onClick={closeMenu}>
              Dra. Luciana Mangas
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="h-12 w-12 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 hover:rotate-90 transition-all duration-200"
            >
              <X className="h-7 w-7 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
          
          {/* Enlaces de navegación */}
          <nav className="flex-1 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="group text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light py-4 px-4 rounded-xl hover:bg-secondary/10 dark:hover:bg-primary/10 transition-all duration-200 text-base font-medium relative overflow-hidden"
                onClick={closeMenu}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInRight 300ms ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}