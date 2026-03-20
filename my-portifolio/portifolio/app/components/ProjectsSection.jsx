
import ProjectCard from './ProjectCard'

const projectData = [
  {
    id: 1,
    title: 'Tours website',
    description:
      'Reprehenderit aspernatur sunt saepe ullam, totam asperiores illum. Incidunt cum minima excepturi praesentium placeat.',
    image: '/projects/tours.png',
    tag: ['all', 'web'],
  },
  {
    id: 2,
    title: 'Birthday website',
    description:
      'Reprehenderit aspernatur sunt saepe ullam, totam asperiores illum. Incidunt cum minima excepturi praesentium placeat.',
    image: '/projects/birthday.png',
    tag: ['all', 'web'],
  },
  {
    id: 3,
    title: 'Question website',
    description:
      'Reprehenderit aspernatur sunt saepe ullam, totam asperiores illum. Incidunt cum minima excepturi praesentium placeat.',
    image: '/projects/questions.png',
    tag: ['all', 'web'],
  },
  {
    id: 4,
    title: 'Review website',
    description:
      'Reprehenderit aspernatur sunt saepe ullam, totam asperiores illum. Incidunt cum minima excepturi praesentium placeat.',
    image: '/projects/reviews.png',
    tag: ['all', 'web'],
  },
  {
    id: 5,
    title: 'Energy website',
    description:
      'Reprehenderit aspernatur sunt saepe ullam, totam asperiores illum. Incidunt cum minima excepturi praesentium placeat.',
    image: '/projects/energy.png',
    tag: ['all', 'web'],
  },
  {
    id: 6,
    title: 'Portfolio website',
    description:
      'Reprehenderit aspernatur sunt saepe ullam, totam asperiores illum. Incidunt cum minima excepturi praesentium placeat.',
    image: '/projects/portifolio.png',
    tag: ['all', 'web'],
  },
]

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection
