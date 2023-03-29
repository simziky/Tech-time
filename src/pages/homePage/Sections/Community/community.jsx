import "./community.scss";
import community from "../../../../Assets/images/Frame 209.svg";

const Community = () => {
  return (
    <section className="community-main">
      <div className="community-inner">
        <div className="community-div1">
          <span className="community-div1-heading">join our community</span>

          <h1>
            Are you ready to connect with the future talent of the tech world
          </h1>

          <span className="community-div1-subheading">
            meet up with other techstars and grow together
          </span>
        </div>

        {/********************************************************** */}
        <div className="community-div2">
          <div>
            <img src={community} alt="community" />
          </div>
        </div>

        {/********************************************************** */}
        <div className="community-div3">
          <div>
            <button>Join Our Community</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
