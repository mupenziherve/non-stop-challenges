'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EmailSection = () => {
  const [status, setStatus] = useState('idle') 

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.target)

    const response = await fetch('https://formspree.io/f/meepqgzg', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      setStatus('success')
      e.target.reset()

      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    } else {
      setStatus('error')

      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 scroll-mt-24"
    >
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        {status === 'success' && (
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/20 backdrop-blur-xl shadow-2xl animate-toast-in">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 text-sm">
              ✓
            </div>
            <p className="text-green-300 text-sm font-medium">
              Message sent successfully 👍
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/20 backdrop-blur-xl shadow-2xl animate-toast-in">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 text-sm">
              !
            </div>
            <p className="text-red-300 text-sm font-medium">
              Failed to send. Try again.
            </p>
          </div>
        )}
      </div>

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
                alt="GitHub"
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio!"
          />

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Your email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@google.com"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="What would you like to discuss?"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold hover:opacity-90 transition duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
