import { useMemo } from "react";
import PropTypes from "prop-types";

const FramePlayer1 = ({
  className = "",
  frame,
  userRank1,
  userImage1,
  trophyIcon,
  userName1,
  userCredits1,
  propTop,
  propWidth,
}) => {
  const framePlayer3Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frame4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`absolute top-[640px] left-[45px] w-[936px] h-[88px] overflow-hidden text-left text-sm text-light-untitled-white font-head-h-20 ${className}`}
      style={framePlayer3Style}
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
        <div className="absolute top-[21px] left-[0px] w-2 h-[22px] overflow-hidden text-xs">
          <b className="absolute top-[2px] left-[0px] tracking-[-0.1px] leading-[20px]">
            {userRank1}
          </b>
        </div>
        <img
          className="absolute top-[0px] left-[73px] rounded-[50%] w-16 h-16 object-cover"
          alt=""
          src={userImage1}
        />
        <div className="absolute top-[0px] left-[348px] w-[197px] h-16">
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(20px)] rounded-53xl bg-gray-500 w-[183px] h-16" />
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
        <div className="absolute top-[6px] left-[151px] w-40 h-[52px] overflow-hidden text-center text-light-secondary">
          <div className="absolute top-[2px] left-[0px] w-40 h-12 overflow-hidden">
            <div className="absolute top-[28px] left-[0px] tracking-[-0.1px] leading-[20px]">
              London, United kingdom
            </div>
          </div>
          <div
            className="absolute top-[0px] left-[1px] w-[107px] h-[52px] overflow-hidden text-left text-base text-light-untitled-white"
            style={frame4Style}
          >
            <div className="absolute top-[0px] left-[0px] tracking-[-0.6px] leading-[24px] font-semibold">
              {userName1}
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
              {userCredits1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FramePlayer1.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,
  userRank1: PropTypes.string,
  userImage1: PropTypes.string,
  trophyIcon: PropTypes.string,
  userName1: PropTypes.string,
  userCredits1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FramePlayer1;
