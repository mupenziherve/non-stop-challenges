
const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div
        className="h-52 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="p-4 text-white bg-gray-800">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
