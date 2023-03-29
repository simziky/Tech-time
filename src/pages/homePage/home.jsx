import "./home.scss";
import Layout from "../../components/Layouts/layout";
import Highquality from "./Sections/High_quality/Hquality";
import Landing from "./Sections/Landing_section/landing";
import Brand from "./Sections/brand/brand";
import Best from "./Sections/Why_We_Best/best";
import Pcourse from "./Sections/popular course/Pcourse";
import Testimonial from "./Sections/testimonials/testimonial";
import Community from "./Sections/Community/community";
import Faq from "./Sections/FAQ/faq";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Brand />
      <Highquality />
      <Best />
      <Pcourse />
      <Testimonial />
      <Community />
      <Faq />
    </Layout>
  );
};

export default Home;
