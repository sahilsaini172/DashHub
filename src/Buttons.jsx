const IconBtn = ({ icon, size = "md", style = "" }) => {
  const sizeClass = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };
  return (
    <div className="text-stone-300 w-fit inline-block">
      <i className={`fa-solid fa-${icon} ${sizeClass[size]} ${style} `}></i>
    </div>
  );
};

export default IconBtn;
