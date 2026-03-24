import Image from "next/image"

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
<Image src="/logo.svg" alt="Logo" width={60} height={60} />

        <p className="text-l text-gray-500 hover:text-gray-300 transition">
          Designed & built by Herve
        </p>
        <p className="text-l text-gray-500">
          © {new Date().getFullYear()} MH. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
