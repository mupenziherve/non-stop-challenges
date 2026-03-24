"use client"

import Image from "next/image"
import Link from "next/link"


const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-3">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE]">
          I’m currently open to new opportunities where I can help design and
          develop scalable, high-quality digital products. Whether you have a
          project, an idea, or just want to connect, feel free to reach out.
        </p>
        <div className="socials flex flex-row gap-5">
          <Link href="https://github.com/mupenziherve" target="_blank">
            <Image
              src="/projects/github.svg"
              alt="GitHub profile"
              width={40}
              height={40}
              className="hover:scale-110 py-4 invert transition-transform duration-200"
            />
          </Link>
          <Link
            href="https://wa.me/250780423952?text=Hello%20Herve!%20👋"
            target="_blank"
          >
            <Image
              src="/projects/whatsapp.svg"
              alt="WhatsApp"
              width={40}
              height={40}
              className="hover:scale-110 py-4 invert transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="john@google.com"
              className="bg-[#18191E] border border-[#92929254] placeholder-[#9CA2A9] text-gray-100  text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="What would you like to discuss?"
              className="bg-[#18191E] border border-[#92929254] placeholder-[#9CA2A9] text-gray-100  text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#92929254] placeholder-[#9CA2A9] text-gray-100  text-sm rounded-lg block w-full p-2.5"
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}
export default EmailSection
