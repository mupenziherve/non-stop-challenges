import Link from 'next/link'

const NavLinks = ({ href, title, className = '' }) => {
  return (
    <Link
      href={href}
      className={`text-[#ADB7BE] hover:text-white transition-colors duration-200 ${className}`}
    >
      {title}
    </Link>
  )
}

export default NavLinks
