'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]/90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-5 py-2">
        <Link href="/" className="text-3xl md:text-4xl text-cyan-500 font-bold">
          {'<MH>'}
        </Link>

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

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex gap-8 p-4 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar