import ButtonRank from "../components/ButtonRank";
import Tabs from "../components/Tabs";
import FramePlayer from "../components/FramePlayer";
import FramePlayer1 from "../components/FramePlayer1";
import Header from "../components/Header";

const LeaderboardPageFinal = () => {
  return (
    <div className="w-full relative bg-light-untitled-white h-[1397px] overflow-hidden flex flex-col items-center justify-start text-center text-23xl text-light-untitled-white font-head-h-20">
      <div className="w-[1440px] relative rounded-sm [background:linear-gradient(180deg,_#0d1b2a,_#33669c)] h-[1397px] overflow-hidden shrink-0">
        <img
          className="absolute top-[0px] left-[-662px] w-[2102px] h-[1332px]"
          alt=""
          src="/pattern-mask-group.svg"
        />
        <img
          className="absolute top-[346px] left-[calc(50%_-_720px)] w-[1440px] h-[165px] mix-blend-normal"
          alt=""
          src="/bg-gradient-effect.svg"
        />
        <img
          className="absolute top-[937px] left-[996px] w-[472px] h-[473px] object-cover"
          alt=""
          src="/3d-money-exchange@2x.png"
        />
        <ButtonRank />
        <Tabs />
        <img
          className="absolute bottom-[1086px] left-[1280px] w-[132px] h-[133px] overflow-hidden"
          alt=""
          src="/player-profile-image.svg"
        />
        <div className="absolute top-[180px] left-[calc(50%_-_365px)] tracking-[-1.5px] leading-[60px] font-semibold flex items-center justify-center w-[729px]">
          Top Leaderboard
        </div>
        <FramePlayer
          frame="/frame.svg"
          userRank="9"
          userImage="/user-image-9@2x.png"
          trophyIcon="/trophy-icon.svg"
          userName="Elon rain"
          userLocation="Los Angles, America"
          userCredits="$6300"
        />
        <div className="absolute top-[530px] left-[44px] w-[936px] h-[88px] overflow-hidden flex flex-row items-center justify-end text-left text-sm">
          <div className="w-[936px] h-[88px] overflow-hidden shrink-0 flex flex-row items-center justify-end">
            <div className="w-[936px] relative [backdrop-filter:blur(4px)] rounded-xl bg-gray-400 h-[88px]" />
            <img
              className="w-[29.9px] relative h-[26px] overflow-hidden shrink-0 ml-[-915px]"
              alt=""
              src="/frame1.svg"
            />
          </div>
          <div className="w-[836px] relative h-16 overflow-hidden shrink-0 ml-[-902px]">
            <div className="absolute top-[21px] left-[0px] w-2 h-[22px] overflow-hidden flex flex-col items-center justify-end text-xs">
              <b className="relative tracking-[-0.1px] leading-[20px]">2</b>
            </div>
            <img
              className="absolute top-[0px] left-[71px] rounded-[50%] w-16 h-16 object-cover"
              alt=""
              src="/user-image-2@2x.png"
            />
            <div className="absolute top-[0px] left-[346px] w-[197px] h-16">
              <div className="absolute top-[8px] left-[119px] flex flex-row items-start justify-start">
                <img
                  className="w-12 relative h-12"
                  alt=""
                  src="/badge-n-circle.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(20px)] rounded-53xl bg-gray-500 w-[183px] h-16 overflow-hidden">
                <div className="absolute top-[22px] left-[20px] tracking-[-0.1px] leading-[20px]">
                  Achievement
                </div>
              </div>
            </div>
            <img
              className="absolute top-[8px] left-[666px] w-12 h-12"
              alt=""
              src="/trophy-icon1.svg"
            />
            <div className="absolute top-[6px] left-[149px] w-40 h-[52px] overflow-hidden flex flex-row items-center justify-start py-0 pl-px pr-[82px] box-border text-base">
              <div className="w-[77px] h-[52px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                <div className="relative tracking-[-0.6px] leading-[24px] font-semibold">
                  Alex Robin
                </div>
              </div>
              <div className="w-40 h-12 overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-78px] text-center text-sm text-light-secondary">
                <div className="relative tracking-[-0.1px] leading-[20px]">
                  London, United kingdom
                </div>
              </div>
            </div>
            <div className="absolute top-[4px] left-[758px] w-[78px] h-14 overflow-hidden text-right text-light-secondary">
              <div className="absolute top-[5px] left-[21px] w-[57px] h-[46px] overflow-hidden">
                <div className="absolute top-[23px] left-[0px] tracking-[-0.1px] leading-[20px] flex items-center w-[57px] h-[23px]">
                  Credits
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[78px] h-14 overflow-hidden text-xl text-light-untitled-white">
                <div className="absolute top-[0px] left-[0px] tracking-[-0.8px] leading-[28px] font-semibold flex items-center w-[78px] h-8">
                  $9250
                </div>
              </div>
            </div>
          </div>
        </div>
        <FramePlayer1
          frame="/frame2.svg"
          userRank1="3"
          userImage1="/user-image-3@2x.png"
          trophyIcon="/trophy-icon2.svg"
          userName1="Bemiso Shawn"
          userCredits1="$9200"
        />
        <FramePlayer
          frame="/frame3.svg"
          userRank="4"
          userImage="/user-image-4@2x.png"
          trophyIcon="/trophy-icon3.svg"
          userName="Aleina shipr"
          userLocation="Seoul, Korea"
          userCredits="$8500"
          frameTop="750px"
          propHeight="26px"
          propTop="6px"
          propWidth="85px"
          propWidth1="85px"
          propWidth2="82px"
        />
        <FramePlayer1
          frame="/frame3.svg"
          userRank1="5"
          userImage1="/user-image-5@2x.png"
          trophyIcon="/trophy-icon.svg"
          userName1="somin pixel"
          userCredits1="$7800"
          propTop="860px"
          propWidth="82px"
        />
        <FramePlayer
          frame="/frame3.svg"
          userRank="8"
          userImage="/user-image-9@2x.png"
          trophyIcon="/trophy-icon.svg"
          userName="Elon rain"
          userLocation="Los Angles, America"
          userCredits="$6300"
          frameTop="1190px"
          propHeight="22px"
          propTop="2px"
          propWidth="134px"
          propWidth1="62px"
          propWidth2="133px"
        />
        <FramePlayer
          frame="/frame3.svg"
          userRank="6"
          userImage="/user-image-9@2x.png"
          trophyIcon="/trophy-icon.svg"
          userName="Elon rain"
          userLocation="Los Angles, America"
          userCredits="$6300"
          frameTop="970px"
          propHeight="22px"
          propTop="2px"
          propWidth="134px"
          propWidth1="62px"
          propWidth2="133px"
        />
        <FramePlayer
          frame="/frame.svg"
          userRank="7"
          userImage="/user-image-9@2x.png"
          trophyIcon="/trophy-icon.svg"
          userName="Elon rain"
          userLocation="Los Angles, America"
          userCredits="$6300"
          frameTop="1080px"
          propHeight="22px"
          propTop="2px"
          propWidth="134px"
          propWidth1="62px"
          propWidth2="133px"
        />
        <FramePlayer
          frame="/frame.svg"
          userRank="1"
          userImage="/user-image-1@2x.png"
          trophyIcon="/trophy-icon4.svg"
          userName="Suraj Khandwal"
          userLocation="Jaipur, Rajsthan"
          userCredits="$9300"
          frameTop="420px"
          propHeight="22px"
          propTop="2px"
          propWidth="113px"
          propWidth1="113px"
          propWidth2="104px"
        />
        <Header />
      </div>
    </div>
  );
};

export default LeaderboardPageFinal;
