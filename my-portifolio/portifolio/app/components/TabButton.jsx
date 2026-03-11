

const TabButton = ({ active, selectTab,children }) => {
    const buttonClasses = active
      ? 'text-white  border-b border-b-cyan-500'
      : 'text-[#ADB7BE]'
  return (
    <button on>
      {children}
    </button>
  )
};
export default TabButton;
