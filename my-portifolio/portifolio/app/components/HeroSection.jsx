'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1]">
              Hello, I'm{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Herve',
                1000,
                'Full-Stack Software Engineer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#adb7be] text-base mb-6 sm:text-lg lg:text-xl">
            Writing code to solve real-world problems and build meaningful
            digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleHireMeClick}
              className="bg-linear-to-r cursor-pointer from-[#6480ff] via-[#3e9bba] to-[#2fa3a1]  w-full sm:w-fit rounded-full text-white px-6 py-3 hover:opacity-90 transition"
            >
              Hire Me
            </button>

            <a
              href="/Herve_Mupenzi_CV.pdf"
              download
              className="w-full sm:w-fit cursor-pointer rounded-full p-0.5 bg-linear-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1] hover:opacity-90 transition"
            >
              <div className="block bg-[#121212] rounded-full px-5 py-3 text-white text-center">
                Download CV
              </div>
            </a>
          </div>
        </div>

        <div className="col-span-5 flex justify-center mt-8 lg:mt-0">
          <div
            className="rounded-full overflow-hidden 
              w-50 h-50 
              sm:w-62.5 sm:h-62.5
              lg:w-87.5 lg:h-87.5"
          >
            <Image
              src="/passport.png"
              alt="hero image"
              width={350}
              height={350}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
