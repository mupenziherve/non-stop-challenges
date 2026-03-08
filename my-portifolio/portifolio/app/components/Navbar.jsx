import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full px-12 py-6">
      <div className="flex items-center justify-between">
       
        <Link href="/" className="text-4xl text-white font-bold">
          {'<MH>'}
        </Link>
        import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full px-12 py-6">
      <div className="flex items-center justify-between">
       
        <Link href="/" className="text-4xl text-white font-bold">
          {'<MH>'}
        </Link>


        <ul className="flex gap-8">
          <li>
            <Link href="#about" className="text-[#ADB7BE] hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
