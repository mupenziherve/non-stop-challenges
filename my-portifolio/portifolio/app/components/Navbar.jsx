import Link from 'next/link'
import NavLink from './NavLink'
import { title } from 'node:process'
import path from 'node:path'

const navLinks =[
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact"
  }
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]/90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-7 p-5">
        <Link href="/" className="text-3xl md:text-4xl text-cyan-500 font-bold">
          {'<MH>'}
        </Link>
        <div className="menu block md:w-auto" id="navbar">
          <ul className="flex gap-8 p-4 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
