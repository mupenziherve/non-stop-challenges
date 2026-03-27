'use client'

import React, { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import PROJECTS from '../../data/projects.json'


const TAGS = ['All', 'Web', 'Mobile']
const INITIAL_COUNT = 6

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState('All')
  const [showMore, setShowMore] = useState(false)

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  // FILTER PROJECTS
  const filteredProjects = useMemo(() => {
    if (activeTag === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.tags.includes(activeTag))
  }, [activeTag])

  // SHOW LIMITED OR FULL LIST
  const displayedProjects = useMemo(() => {
    if (showMore) return filteredProjects
    return filteredProjects.slice(0, INITIAL_COUNT)
  }, [filteredProjects, showMore])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-16 px-4 md:px-8">
      {/* TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
        My Projects
      </h2>

      {/* TAG FILTERS */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {TAGS.map((tag) => (
          <ProjectTag
            key={tag}
            name={tag}
            isSelected={activeTag === tag}
            onClick={(tag) => {
              setActiveTag(tag)
              setShowMore(false) // reset view more when filter changes
            }}
          />
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.ul
        ref={ref}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {displayedProjects.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No projects found for this category.
          </p>
        ) : (
          displayedProjects.map((project) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))
        )}
      </motion.ul>

      {/* VIEW MORE BUTTON */}
      {filteredProjects.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6480ff] via-[#3e9bba] to-[#2fa3a1] text-white font-medium hover:scale-105 transition"
          >
            {showMore ? 'Show Less' : 'View More'}
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
