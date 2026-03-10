'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import React, { useState } from 'react'
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-4">
        <Image
  src="/logo.png"
  alt="MH Logo"
  width={40}
  height={40}
  className="object-contain"
  priority
/>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white md:hidden"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>

        <div className="hidden md:block">
          <ul className="flex md:space-x-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
