'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false)
      }
    }

    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.path))

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection('#' + section.id)
          }
        }
      })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 py-4">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="MH Logo"
            width={120}
            height={120}
            className="w-14 md:w-16 lg:w-20 h-auto object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        <div className="hidden md:flex">
          <ul className="flex items-center gap-8 lg:gap-10 text-base lg:text-lg">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={activeSection === link.path}
                />
              </li>
            ))}
          </ul>
        </div>


        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg border border-white/20 text-slate-200 hover:text-white hover:border-sky-500 transition"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {navbarOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-t border-white/10">
          <MenuOverlay
            links={navLinks}
            closeMenu={() => setNavbarOpen(false)}
            activeSection={activeSection}
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar
