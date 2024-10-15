import MenuIcon from "./MenuIcon";
import StakeCityLogoIcon from "./StakeCityLogoIcon";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[14px] left-[-1px] w-[1440px] h-[137px] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(13,_27,_42,_0.7),_rgba(51,_102,_156,_0.6)_93.5%)] w-[1440px] h-[137px]" />
      <div className="absolute top-[0px] left-[1310px] w-[100px] h-[98.7px] overflow-hidden">
        <MenuIcon />
      </div>
      <div className="absolute top-[0px] left-[46px] w-[139px] h-[142px] overflow-hidden">
        <StakeCityLogoIcon />
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
