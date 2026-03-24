'use client'

import Image from 'next/image'
import Link from 'next/link'

const EmailSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16">
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-gray-900 to-black" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="flex flex-col justify-center">
        <h5 className="text-3xl font-bold text-white mb-4">Let’s Connect</h5>

        <p className="text-gray-400 leading-relaxed max-w-md">
          I design and build scalable, high-performance digital products.
          Whether you have a project, idea, or opportunity — let’s create
          something impactful.
        </p>

        <div className="flex gap-6 mt-6">
          <Link href="https://github.com/mupenziherve" target="_blank">
            <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition backdrop-blur-md border border-white/10">
              <Image
                src="/projects/github.svg"
                alt="GitHub profile"
                width={24}
                height={24}
                className="invert"
              />
            </div>
          </Link>

          <Link
            href="https://wa.me/250780423952?text=Hello%20Herve!%20👋"
            target="_blank"
          >
            <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition backdrop-blur-md border border-white/10">
              <Image
                src="/projects/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="invert"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
        <form className="flex flex-col gap-6">
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Your email
            </label>
            <input
              type="email"
              required
              placeholder="john@google.com"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">Subject</label>
            <input
              type="text"
              required
              placeholder="What would you like to discuss?"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 hover:scale-102 rounded-xl bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold hover:opacity-90 transition duration-300 shadow-lg shadow-blue-500/20"
          >
            Send Message 
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
