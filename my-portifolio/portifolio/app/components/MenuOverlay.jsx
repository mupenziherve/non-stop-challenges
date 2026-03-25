import NavLink from './NavLink'

const MenuOverlay = ({ links, closeMenu, activeSection }) => {
  return (
    <ul className="flex flex-col items-center py-4 gap-4">
      {links.map((link) => (
        <li key={link.title} className="w-full max-w-xs">
          <NavLink
            href={link.path}
            title={link.title}
            onClick={closeMenu}
            isActive={activeSection === link.path}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-white/10"
          />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
