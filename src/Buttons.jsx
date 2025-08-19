const IconBtn = ({ icon, size = "md", style = "" }) => {
  const sizeClass = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };
  return (
    <i className={`fa-solid fa-${icon} ${sizeClass[size]} text-stone-300 `}></i>
  );
};

export default IconBtn;