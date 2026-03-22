'use client'
import React, { useState, useMemo, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    id: 1,
    title: 'Next Store Website',
    description: 'Modern e-commerce platform built with Next.js',
    image: '/projects/store.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Photography Portfolio',
    description: 'Clean and minimal portfolio for photographers',
    image: '/projects/Backroads.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Full-featured shopping experience with cart & payments',
    image: '/projects/reviews.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Food Ordering App',
    description: 'Order food seamlessly with real-time updates',
    image: '/projects/birthday.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD starter template',
    image: '/projects/book.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Guide for becoming a full-stack developer',
    image: '/projects/questions.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
]

const TAGS = ['All', 'Web', 'Mobile']

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => project.tags.includes(activeTag))
  }, [activeTag])

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects" className="py-16 px-4 md:px-8">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
        My Projects
      </h2>

      {/* Tags */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {TAGS.map((tag) => (
          <ProjectTag
            key={tag}
            name={tag}
            isSelected={activeTag === tag}
            onClick={setActiveTag}
          />
        ))}
      </div>

      {/* Projects Grid */}
      <ul ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{
              duration: 0.4,
              delay: index * 0.1, 
              ease: 'easeOut',
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
