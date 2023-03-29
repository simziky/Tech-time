import "./testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, FreeMode, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import tprofile1 from "../../../../Assets/images/Frame 176.svg";
import tprofile2 from "../../../../Assets/images/Frame 176 (1).svg";
import tprofile3 from "../../../../Assets/images/Frame 176 (2).svg";

const Testimonial = () => {
  const testimonialCard = [
    {
      id: 1,
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      dp: tprofile1,
      name: "bella moon",
      jTitle: "product designer",
    },
    {
      id: 2,
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      dp: tprofile2,
      name: "samuel fortune",
      jTitle: "product designer",
    },
    {
      id: 3,
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      dp: tprofile3,
      name: "bryce jason",
      jTitle: "product designer",
    },
    {
      id: 4,
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      dp: tprofile3,
      name: "bryce jason",
      jTitle: "product designer",
    },
    {
      id: 5,
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      dp: tprofile3,
      name: "bryce jason",
      jTitle: "product designer",
    },
  ];
  return (
    <section className="testimonial-main">
      <div className="testimonial-inner">
        <div className="testimonial-div1">
          <h1>what our clients are saying</h1>

          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>

        {/****************************************************** */}
        <div className="testimonial-div2">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, FreeMode, A11y]}
            freeMode={true}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper"
          >
            {testimonialCard.map((testimonialCards, id) => (
              <SwiperSlide key={id} className="testimonial-card">
                <p>{testimonialCards.text}</p>

                <div className="testimonial-card-footer">
                  <div className="testimonial-card-img">
                    <img src={testimonialCards.dp} alt="Dp" />
                  </div>
                  <div className="testimonial-card-name">
                    <h3>{testimonialCards.name}</h3>
                    <h5>{testimonialCards.jTitle}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
