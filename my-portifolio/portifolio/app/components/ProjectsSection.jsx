'use client'
import React, { useState, useMemo, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Store',
    description:
      'A modern online store with product browsing, cart functionality, and a smooth user experience.',
    image: '/projects/store.png',
    tags: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://next-store-project.netlify.app/',
  },
  {
    id: 2,
    title: 'Travel Tours Website',
    description:
      'A responsive travel platform for exploring tours and destinations with a clean and modern UI.',
    image: '/projects/Backroads.png',
    tags: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://iwacu-explore.netlify.app/',
  },
  {
    id: 3,
    title: 'Reviews Dashboard',
    description:
      'An interactive interface for displaying user reviews with dynamic content and smooth navigation.',
    image: '/projects/reviews.png',
    tags: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://unslpash-images.netlify.app/',
  },
  {
    id: 4,
    title: 'Birthday Reminder App',
    description:
      'A simple app to manage and display upcoming birthdays with clean state handling.',
    image: '/projects/birthday.png',
    tags: ['All', 'Web'],
    gitUrl: '',
    previewUrl: '',
  },
  {
    id: 5,
    title: 'Book Library App',
    description:
      'A digital library interface for browsing, managing, and exploring books.',
    image: '/projects/book.png',
    tags: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://best-selling-book-amazon.netlify.app/',
  },
  {
    id: 6,
    title: 'FAQ / Questions App',
    description:
      'A dynamic FAQ section with collapsible questions and smooth user interaction.',
    image: '/projects/questions.png',
    tags: ['All', 'Web'],
    gitUrl: '',
    previewUrl: '',
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

      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
        My Projects
      </h2>


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
