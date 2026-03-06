import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Herve
          </h1>

          <p className="text-[#adb7be] mb-6 text-lg lg:text-xl">
            Writing code to solve real-world problems and build meaningful
            digital solutions.
          </p>
          <div>
            <button className="bg-white rounded-full text-black px-6 py-3 mr-4 hover:bg-slate-200">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full hover:bg-green text-white border-white mt-3">
              Download CV
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
