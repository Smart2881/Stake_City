import PropTypes from "prop-types";

const Tabs = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[286px] left-[calc(50%_-_225px)] w-[449px] h-[60px] text-left text-base text-gray-100 font-head-h-20 ${className}`}
    >
      <div className="absolute top-[76px] left-[0px] [backdrop-filter:blur(4px)] rounded-21xl bg-gray-200 w-[449px] h-12 hidden" />
      <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-21xl bg-gray-200 w-[449px] h-12" />
      <div className="absolute top-[6px] left-[9px] [backdrop-filter:blur(4px)] rounded-21xl bg-mediumaquamarine w-[211px] h-9" />
      <div className="absolute top-[82px] left-[225px] [backdrop-filter:blur(4px)] rounded-21xl bg-light-untitled-white w-[211px] h-9 hidden" />
      <div className="absolute top-[12px] left-[85px] tracking-[-0.6px] leading-[24px] font-semibold">
        Weekly
      </div>
      <div className="absolute top-[88px] left-[296px] tracking-[-0.6px] leading-[24px] font-semibold hidden">
        Monthly
      </div>
      <div className="absolute top-[12px] left-[293px] tracking-[-0.6px] leading-[24px] font-semibold text-light-secondary">
        Monthly
      </div>
      <div className="absolute top-[88px] left-[82px] tracking-[-0.6px] leading-[24px] font-semibold text-light-secondary hidden">
        Weekly
      </div>
      <div className="absolute top-[76px] left-[293px] tracking-[-0.6px] leading-[24px] font-semibold text-gray-300 hidden">
        <p className="m-0">&nbsp;</p>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
};

export default Tabs;
