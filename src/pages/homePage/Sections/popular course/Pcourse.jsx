import "./Pcourse.scss";
import { Link } from "react-router-dom";

import course1 from "../../../../Assets/images/course1.svg";
import course2 from "../../../../Assets/images/course2.svg";
import course3 from "../../../../Assets/images/course3.svg";
import course4 from "../../../../Assets/images/course4.svg";
import course5 from "../../../../Assets/images/course5.svg";
import course6 from "../../../../Assets/images/course6.svg";

import profile1 from "../../../../Assets/images/Frame 165.svg";
import profile2 from "../../../../Assets/images/Frame 165 (1).svg";
import profile3 from "../../../../Assets/images/Frame 165 (2).svg";
import profile4 from "../../../../Assets/images/Frame 165 (3).svg";
import profile5 from "../../../../Assets/images/Frame 165 (4).svg";
import profile6 from "../../../../Assets/images/Frame 165 (5).svg";

import star from "../../../../Assets/images/star.svg";

const Pcourse = () => {
  const courseCard = [
    {
      id: 1,
      img: course1,
      tag: "design",
      rating: "4.7k",
      registered: "(32.7k+)",
      title: "introduction to user research in ux design",
      time: "23hrs 50mins",
      lesson: "15 lessons",
      profilePic: profile1,
      tName: "leonard victor",
      amount: "15.00",
    },
    {
      id: 2,
      img: course2,
      tag: "marketing",
      rating: "4.7k",
      registered: "(8.7k+)",
      title: "introduction to  new marketing audience ",
      time: "22hrs 30mins",
      lesson: "22 lessons",
      profilePic: profile2,
      tName: "Jeffrey williams",
      amount: "32.00",
    },
    {
      id: 3,
      img: course3,
      tag: "development",
      rating: "4.7k",
      registered: "(12.7k+)",
      title: "introduction to html, css & bootstrap",
      time: "45hrs 50mins",
      lesson: "55 lessons",
      profilePic: profile3,
      tName: "claretta mason",
      amount: "55.00",
    },
    {
      id: 4,
      img: course4,
      tag: "development",
      rating: "4.7k",
      registered: "(32.7k+)",
      title: "introduction to javascript, git & GitHub",
      time: "30hrs 50mins",
      lesson: "22 lessons",
      profilePic: profile4,
      tName: "Jessica duke",
      amount: "45.00",
    },
    {
      id: 5,
      img: course5,
      tag: "marketing",
      rating: "4.7k",
      registered: "(4.7k+)",
      title: "introduction to outroom  marketing analysis",
      time: "33hrs 50mins",
      lesson: "26 lessons",
      profilePic: profile5,
      tName: "Samuel jacobs",
      amount: "25.00",
    },
    {
      id: 6,
      img: course6,
      tag: "marketing",
      rating: "4.7k",
      registered: "(15.7k+)",
      title: "introduction to live  marketing analysis",
      time: "10hrs 50mins",
      lesson: "32 lessons",
      profilePic: profile6,
      tName: "adam smith",
      amount: "25.00",
    },
  ];

  return (
    <section className="popular-course-main">
      <div className="popular-course-inner">
        <div className="popular-course-div1">
          <h1>Browse our popular courses</h1>

          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>

          <img src={star} alt="star" />
        </div>
        {/************************************************** */}

        <div className="popular-course-div2">
          <div className="course-menu">
            <ul>
              <li>
                <Link to="#">All categories</Link>
              </li>
              <li>
                <Link to="#">Design</Link>
              </li>
              <li>
                <Link to="#">Development</Link>
              </li>
              <li>
                <Link to="#">Marketing</Link>
              </li>
            </ul>
          </div>
        </div>

        {/************************************************** */}
        <div className="popular-course-div3">
          {courseCard.map((courseCards, id) => (
            <div key={id} className="course-card-main">
              <div className="course-card-img">
                {" "}
                <img src={courseCards.img} alt="course-image" />{" "}
              </div>

              <div className="course-card-rate-tag">
                <div className="course-card-rate">{courseCards.tag}</div>

                <div className="course-card-tag">
                  <span>{courseCards.rating}</span>
                  <span>{courseCards.registered}</span>
                </div>
              </div>

              <div className="course-card-title">
                <h2>{courseCards.title}</h2>
              </div>

              <div className="course-card-time-lesson">
                <div className="course-card-time">{courseCards.time}</div>
                <div className="course-card-lesson">{courseCards.lesson}</div>
              </div>

              <div className="course-card-pic-name-amount">
                <div className="course-card-pic-name">
                  <span>
                    <img src={courseCards.profilePic} alt="tutor pic" />
                  </span>
                  <h5>{courseCards.tName}</h5>
                </div>

                <div className="course-card-amount">$ {courseCards.amount}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-btn">
          <button>Explore All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default Pcourse;
