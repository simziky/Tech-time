import "./best.scss";
import besImg from "../../../../Assets/images/whybestimage.svg";

import best1 from "../../../../Assets/icon/whybest1.svg";
import best2 from "../../../../Assets/icon/whybest2.svg";
import best3 from "../../../../Assets/icon/whybest3.svg";
import best4 from "../../../../Assets/icon/whybest4.svg";

const Best = () => {
  const bestCard = [
    {
      id: 1,
      icon: best1,
      title: "experienced mentors",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      id: 2,
      icon: best2,
      title: "one-on-one meetings",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      id: 3,
      icon: best3,
      title: "one-on-one meetings",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      id: 4,
      icon: best4,
      title: "affordable prices",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
  ];

  return (
    <section className="best-main">
      <div className="best-innner">
        {/**************************************************** */}
        <div className="best-div1">
          <h1>This is why we are best from others</h1>

          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>

          <div className="best-div1-img">
            <img src={besImg} alt="beestimage" />
          </div>
        </div>

        {/**************************************************** */}
        <div className="best-div2">
          {bestCard.map((bestCards, id) => (
            <div key={id} className="bestCard">
              <img src={bestCards.icon} alt="best-icon" />
              <h1>{bestCards.title}</h1>

              <p>{bestCards.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Best;
