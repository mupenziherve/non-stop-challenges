

const TabButton = ({ active, selectTab,children }) => {
    const buttonClasses = active
      ? 'text-white  border-b border-b-cyan-500'
      : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
      <p className="mr-3 font-semibold hover:text-white  "></p>
      {children}
    </button>
  )
};
export default TabButton;
