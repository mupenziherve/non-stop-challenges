

const TabButton = ({ active, selectTab,children }) => {
    const buttonClasses = active
      ? 'text-white  border-b border-b-cyan-500'
      : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
      {children}
      </p>
    </button>
  )
};
export default TabButton;

// Git. I am a quick learner
//             and I am always looking to expand my knowledge and skill set. I am a
//             team player and I am excited to work with others to create amazing
//             applications.