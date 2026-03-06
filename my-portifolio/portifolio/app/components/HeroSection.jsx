import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span class="text-transparent bg-clip-text bg-linear-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1]">
              Hello, I'm{''}
            </span>
            Herve
          </h1>

          <p className="text-[#adb7be] text-base mb-6 sm:text-lg lg:text-xl">
            Writing code to solve real-world problems and build meaningful
            digital solutions.
          </p>
          <div>
            <button className="bg-linear-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1]  w-full sm:w-fit rounded-full text-white px-6 py-3 mr-4 hover:bg-slate-200">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit  rounded-full bg-linear-to-br from-[#6480ff] via-[#3e9bba] to-[#2fa3a1] hover:bg-slate-800 text-white ">
              <div className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3 ">
                Download CV</div>
            </button>
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
