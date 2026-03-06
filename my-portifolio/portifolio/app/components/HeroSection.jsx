import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Herve
          </h1>

          <p className="text-[#adb7be] text-lg lg:text-xl">
            Writing code to solve real-world problems and build meaningful
            digital solutions.
          </p>
        </div>

        <div className="col-span-5 flex justify-center">
          <div className="rounded-full overflow-hidden w-[250px] h-[250px]">
            <Image
              src="/passport.png"
              alt="hero image"
              width={250}
              height={250}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
