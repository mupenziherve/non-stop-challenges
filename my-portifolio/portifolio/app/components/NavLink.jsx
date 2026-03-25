'use client'

import Link from 'next/link'

const NavLink = ({ href, title, className = '', onClick }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        e.preventDefault()
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
      className={`text-[#ADB7BE] hover:text-white transition-colors duration-200 ${className}`}
    >
      {title}
    </Link>
  )
}

export default NavLink
