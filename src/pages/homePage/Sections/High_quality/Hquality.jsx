import "./Hquality.scss";
import speaker from "../../../../Assets/icon/Frame 110.svg";
import wifi from "../../../../Assets/icon/Frame 110 (1).svg";
import play from "../../../../Assets/icon/Frame 110 (2).svg";
import note from "../../../../Assets/icon/Frame 110 (3).svg";

import Hmain from "../../../../Assets/images/unsplash1.svg";
import Hsub from "../../../../Assets/images/unsplash2.svg";
import Hside from "../../../../Assets/images/Frame 113.svg";

import crown from "../../../../Assets/images/Vector.svg";

const Highquality = () => {
  const subDiv = [
    { index: 1, icon: speaker, text: "Audio classes" },
    { index: 2, icon: wifi, text: "Live classes" },
    { index: 3, icon: play, text: "Recorded classes" },
    { index: 4, icon: note, text: "50+ notes" },
  ];

  return (
    <section className="hquality-main">
      <div className="hquality-inner">
        {/**************************************************** */}
        <div className="hquality-div1">
          <div className="hquality-div1-h1">
            <h1>High quality video, audio & live classes</h1>
            <img src={crown} alt="crown" />
          </div>

          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>

          <div className="hquality-div1-btn">
            <button>View Courses</button>
          </div>

          <div className="hquality-div1-card-main">
            {subDiv.map((subDivs, index) => (
              <div key={index} className="hquality-div1-card">
                <img src={subDivs.icon} alt="icon" />
                <h3>{subDivs.text}</h3>
              </div>
            ))}
          </div>
        </div>

        {/**************************************************** */}
        <div className="hquality-div2">
          <div className="hquality-div2-inner">
            <img src={Hmain} alt="" />
            <img src={Hsub} alt="" />
            <img src={Hside} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highquality;
