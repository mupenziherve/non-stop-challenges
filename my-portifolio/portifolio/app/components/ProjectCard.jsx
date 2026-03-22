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
      <div
        onMouseMove={handleMouseMove}
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden group cursor-pointer"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
          }}
        />

    
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center gap-4">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center
            transform transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-lg hover:shadow-white/20 group/link"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] transition-colors duration-300 group-hover/link:text-white" />
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center
            transform transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-lg hover:shadow-white/20 group/link"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] transition-colors duration-300 group-hover/link:text-white" />
          </Link>
        </div>

    
        <div className="absolute inset-0 rounded-t-xl pointer-events-none group-hover:ring-2 group-hover:ring-white/20 transition-all duration-300" />
      </div>

     
      <div
        className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 
        transition-all duration-300 group-hover:bg-[#1f1f1f] group-hover:shadow-xl group-hover:shadow-black/40"
      >
        <h5 className="text-xl font-semibold mb-2 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h5>

        <p className="text-[#ADB7BE] md:text-xl lg:text-xl transition-transform duration-300 group-hover:translate-x-1">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
