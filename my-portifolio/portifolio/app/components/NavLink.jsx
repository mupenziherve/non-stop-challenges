import Link from "next/link"

const NavLinks = ({ href, title })=>{
return (
  <Link href={href} className="text-[#ADB7BE] hover:text-white">
    {title}
  </Link>
)
}

export default NavLinks;