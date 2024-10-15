import { useMemo } from "react";
import PropTypes from "prop-types";

const FramePlayer = ({
  className = "",
  frame,
  userRank,
  userImage,
  trophyIcon,
  userName,
  userLocation,
  userCredits,
  frameTop,
  propHeight,
  propTop,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const framePlayer9Style = useMemo(() => {
    return {
      top: frameTop,
    };
  }, [frameTop]);

  const frameStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const userRank9Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frame1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frame2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frame3Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className={`absolute top-[1300px] left-[48px] w-[936px] h-[88px] overflow-hidden text-left text-sm text-light-untitled-white font-head-h-20 ${className}`}
      style={framePlayer9Style}
    >
      <div className="absolute top-[0px] left-[0px] w-[936px] h-[88px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-gray-400 w-[936px] h-[88px]" />
        <img
          className="absolute top-[31px] left-[20.7px] w-[29.9px] h-[26px] overflow-hidden"
          alt=""
          src={frame}
        />
      </div>
      <div className="absolute top-[12px] left-[32px] w-[838px] h-16 overflow-hidden">
        <div
          className="absolute top-[21px] left-[0px] w-2 h-[22px] overflow-hidden text-xs"
          style={frameStyle}
        >
          <b
            className="absolute top-[2px] left-[0px] tracking-[-0.1px] leading-[20px]"
            style={userRank9Style}
          >
            {userRank}
          </b>
        </div>
        <img
          className="absolute top-[0px] left-[73px] rounded-[50%] w-16 h-16 object-cover"
          alt=""
          src={userImage}
        />
        <div className="absolute top-[0px] left-[348px] w-[197px] h-16">
          <div className="absolute top-[2px] left-[0px] [backdrop-filter:blur(20px)] rounded-53xl bg-gray-500 w-[183px] h-16" />
          <div className="absolute top-[8px] left-[20px] w-[147px] h-12 overflow-hidden">
            <div className="absolute top-[0px] left-[99px] flex flex-row items-start justify-start">
              <img
                className="w-12 relative h-12"
                alt=""
                src="/badge-n-circle.svg"
              />
            </div>
            <div className="absolute top-[14px] left-[0px] tracking-[-0.1px] leading-[20px]">
              Achievement
            </div>
          </div>
        </div>
        <img
          className="absolute top-[8px] left-[668px] w-12 h-12"
          alt=""
          src={trophyIcon}
        />
        <div
          className="absolute top-[6px] left-[152px] w-[134px] h-[52px] overflow-hidden text-base"
          style={frame1Style}
        >
          <div
            className="absolute top-[0px] left-[0px] w-[62px] h-[52px] overflow-hidden"
            style={frame2Style}
          >
            <div className="absolute top-[0px] left-[0px] tracking-[-0.6px] leading-[24px] font-semibold">
              {userName}
            </div>
          </div>
          <div
            className="absolute top-[2px] left-[1px] w-[133px] h-12 overflow-hidden text-center text-sm text-light-secondary"
            style={frame3Style}
          >
            <div className="absolute top-[28px] left-[0px] tracking-[-0.1px] leading-[20px]">
              {userLocation}
            </div>
          </div>
        </div>
        <div className="absolute top-[4px] left-[760px] w-[78px] h-14 overflow-hidden text-right text-light-secondary">
          <div className="absolute top-[5px] left-[21px] w-[57px] h-[46px] overflow-hidden">
            <div className="absolute top-[23px] left-[0px] tracking-[-0.1px] leading-[20px] flex items-center w-[57px] h-[23px]">
              Credits
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[78px] h-14 overflow-hidden text-xl text-light-untitled-white">
            <div className="absolute top-[0px] left-[0px] tracking-[-0.8px] leading-[28px] font-semibold flex items-center w-[78px] h-8">
              {userCredits}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FramePlayer.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,
  userRank: PropTypes.string,
  userImage: PropTypes.string,
  trophyIcon: PropTypes.string,
  userName: PropTypes.string,
  userLocation: PropTypes.string,
  userCredits: PropTypes.string,

  /** Style props */
  frameTop: PropTypes.any,
  propHeight: PropTypes.any,
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default FramePlayer;
