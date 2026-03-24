'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
  { title: 'Home', path: '#home' },
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between mx-auto w-full max-w-350 px-6 md:px-12 lg:px-20 py-">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="MH Logo"
            width={120}
            height={120}
            className="w-17 md:w-14 lg:w-20 xl:w-20 h-auto object-contain hover:scale-110 transition-transform duration-300"
            priority
          />
        </Link>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white md:hidden"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        <div className="hidden md:flex">
          <ul className="flex space-x-10 text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  )
}

export default Navbar
