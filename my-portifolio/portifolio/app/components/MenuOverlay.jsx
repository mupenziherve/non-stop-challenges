import NavLink from './NavLink'

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <ul className="flex flex-col items-center py-3">
      {links.map((link, index) => (
        <li key={index} className="w-full max-w-xs">
          <NavLink
            href={link.path}
            title={link.title}
            onClick={closeMenu} 
            className="block w-full text-center px-4 py-2 rounded-md hover:bg-gray-700/40"
          />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
