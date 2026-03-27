import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="group">
      {/* IMAGE SECTION */}
      <div
        onMouseMove={handleMouseMove}
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden cursor-pointer"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center gap-4">
          {/* CODE ICON (GitHub) */}
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center
              hover:scale-110 hover:border-white transition-all duration-300 group/link"
            >
              <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
            </Link>
          )}

          {/* EYE ICON (Preview) */}
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center
              hover:scale-110 hover:border-white transition-all duration-300 group/link"
            >
              <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
            </Link>
          )}
        </div>

        {/* border glow */}
        <div className="absolute inset-0 rounded-t-xl pointer-events-none group-hover:ring-2 group-hover:ring-white/20 transition-all duration-300" />
      </div>

      {/* TEXT SECTION */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 group-hover:bg-[#1f1f1f] transition-all duration-300">
        <h5 className="text-xl font-semibold mb-2 group-hover:translate-x-1 transition-transform">
          {title}
        </h5>

        <p className="text-[#ADB7BE] md:text-xl lg:text-xl group-hover:translate-x-1 transition-transform">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
