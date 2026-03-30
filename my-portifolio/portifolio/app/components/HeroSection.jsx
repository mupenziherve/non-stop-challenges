'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { Phone, Mail } from 'lucide-react'


const ContactItem = ({ icon: Icon, text, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.03]"
    >
      <div className="p-2 sm:p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition backdrop-blur-md border border-white/10 shadow-md group-hover:shadow-lg group-hover:shadow-cyan-500/20">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>

      <p className="text-sm sm:text-base text-slate-300 group-hover:text-white break-all transition">
        {text}
      </p>
    </a>
  )
}

const HeroSection = () => {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="lg:py-16 lg:pl-15 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 items-center">
        <div className="col-span-8 text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1]">
              Hello, I'm
            </span>
            <br />

            <TypeAnimation
              sequence={[
                'Herve',
                1000,
                'Full-Stack Dev',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#adb7be] text-base mb-6 sm:text-lg lg:text-xl max-w-xl mx-auto sm:mx-0">
            Writing code to solve real-world problems and build meaningful
            digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-13">
            <ContactItem
              icon={Phone}
              text="+250780423952"
              href="tel:+250780423952"
            />
            <ContactItem
              icon={Mail}
              text="mupenziherv04@gmail.com"
              href="mailto:mupenziherv04@gmail.com"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleHireMeClick}
              className="bg-linear-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1] w-full sm:w-fit rounded-full text-white px-6 py-3 hover:opacity-90 transition shadow-lg hover:shadow-cyan-500/30"
            >
              Hire Me
            </button>

            <a
              href="/Herve_Mupenzi_CV.pdf"
              download
              className="w-full sm:w-fit rounded-full p-[2px] bg-linear-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1] hover:opacity-90 transition"
            >
              <div className="bg-[#121212] rounded-full px-6 py-3 text-white text-center hover:bg-[#1a1a1a] transition">
                Download CV
              </div>
            </a>
          </div>
        </div>

        <div className="col-span-4 flex justify-center items-center mt-10 lg:mt-0">
          <div
            className="
      relative rounded-full overflow-hidden 
      w-40 h-40 
      sm:w-56 sm:h-56 
      lg:w-72 lg:h-72
      border-4 border-[#33353F]
    "
          >
            <Image
              src="/passport.png"
              alt="hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
