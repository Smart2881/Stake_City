import PropTypes from "prop-types";

const ButtonRank = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[calc(100%_-_1306px)] w-[calc(100%_-_1200px)] top-[454px] right-[64px] bottom-[852px] left-[1136px] text-center text-13xl text-mediumaquamarine font-nunito-sans ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-light-untitled-white border-mediumaquamarine border-[3px] border-solid box-border" />
      <b className="absolute top-[25.16%] left-[16.5%] whitespace-pre-wrap">
        Your Rank
      </b>
    </div>
  );
};

ButtonRank.propTypes = {
  className: PropTypes.string,
};

export default ButtonRank;
