'use client'

import Link from 'next/link'

const NavLink = ({ href, title, className = '', onClick, isActive }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    if (onClick) onClick()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      scroll={false}
      className={`relative px-1 py-1 transition duration-300 ${
        isActive ? 'text-white' : 'text-[#ADB7BE]'
      } hover:text-white ${className}`}
    >
      {title}

      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-sky-300 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  )
}

export default NavLink
