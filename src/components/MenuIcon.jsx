import PropTypes from "prop-types";

const MenuIcon = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[66.57%] w-full top-[33.43%] right-[0%] bottom-[0%] left-[0%] ${className}`}
    >
      <div className="absolute h-[16.13%] w-full top-[0%] right-[0%] bottom-[83.87%] left-[0%] rounded-81xl bg-light-untitled-white" />
      <div className="absolute h-[16.13%] w-full top-[84.02%] right-[0%] bottom-[-0.15%] left-[0%] rounded-81xl bg-light-untitled-white" />
      <div className="absolute h-[16.13%] w-full top-[42.01%] right-[0%] bottom-[41.86%] left-[0%] rounded-81xl bg-light-untitled-white" />
    </div>
  );
};

MenuIcon.propTypes = {
  className: PropTypes.string,
};

export default MenuIcon;
