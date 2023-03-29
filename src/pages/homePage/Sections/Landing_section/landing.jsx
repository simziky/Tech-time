import "./landing.scss";
import frame1 from "../../../../Assets/images/Frame 95.svg";
import frame2 from "../../../../Assets/images/Frame 96.svg";
import frame3 from "../../../../Assets/images/Frame 97.svg";
import frame4 from "../../../../Assets/images/Frame 98.svg";
import frame5 from "../../../../Assets/images/Frame 99.svg";
import hero from "../../../../Assets/images/Frame 103.svg";

import arrow from "../../../../Assets/images/arrow.svg";

const Landing = () => {
  return (
    <section className="landing-main">
      <div className="landing-inner">
        {/*************************************************************** */}
        <div className="land-div1">
          <div className="land-div1-heading">
            <h1>Grow your skills to advance your career path</h1>

            <p>
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
          </div>

          <div className="land-div1-btn-sec">
            <button>Get Started Now</button>

            <button>Enroll Now</button>

            <img src={arrow} alt="arrow" />
          </div>

          <div className="land-div1-img">
            <img src={frame1} alt="x" />
            <img src={frame2} alt="x" />
            <img src={frame3} alt="x" />
            <img src={frame4} alt="x" />
            <img src={frame5} alt="x" />

            <div className="land-div1-img-text">
              <h3>255k +</h3>
              <p>Previews</p>
            </div>
          </div>
        </div>
        {/*************************************************************** */}
        <div className="land-div2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
