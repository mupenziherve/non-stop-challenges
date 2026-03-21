
const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 bg-cover rounded-t-xl"
        style={{ backgroundImage: `url(${imgUrl})` ,backgroundSize: "cover" }}
      ></div>
      <div className="p-4 text-white bg-gray-800">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
