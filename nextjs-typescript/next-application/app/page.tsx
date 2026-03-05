import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div className="hover-3d">
        {/* content */}
        <figure className="max-w-100 rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/creditcard.webp"
            alt="3D card"
          />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
