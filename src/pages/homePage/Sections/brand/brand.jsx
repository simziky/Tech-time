import './brand.scss'

import zoom from "../../../../Assets/images/Zoom svg.svg";
import monday from "../../../../Assets/images/monday.com.svg";
import dropbox from "../../../../Assets/images/Dropbox.svg";
import stripe from "../../../../Assets/images/Group.svg";
import slack from "../../../../Assets/images/Group (1).svg";
const Brand = () =>{
    return (
        <section className="landing-sub-section">
        <div className="landing-sub-section-inner">
          <div className="landing-sub-img-container" >
            <img src={zoom} alt="x" />
            <img src={stripe} alt="x" />
            <img src={monday} alt="x" />
            <img src={slack} alt="x" />
            <img src={dropbox} alt="x" />
          </div>
        </div>
      </section>
    )
}

export default Brand