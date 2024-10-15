import PropTypes from "prop-types";

const StakeCityLogoIcon = ({ className = "" }) => {
  return (
    <img
      className={`absolute top-[11px] left-[0px] w-[139px] h-[131px] object-cover ${className}`}
      alt=""
      src="/stakecity-logo@2x.png"
    />
  );
};

StakeCityLogoIcon.propTypes = {
  className: PropTypes.string,
};

export default StakeCityLogoIcon;
