import "./footer.scss";
import logo from "../../../Assets/images/techtime.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="footer-inner">
        <div className="footer-div1">
          <span>
            <img src={logo} alt="" />
          </span>
          <p>reach out to us on any of our social media networks</p>
          <div className="footer-div1-icons">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaDiscord />
            </span>
          </div>
        </div>
        {/*************************************************** */}
        <div className="footer-div2">
          <ul>
            <h1>useful links</h1>

            <li>home</li>
            <li>about us</li>
            <li>our courses</li>
            <li>testimonials</li>
            <li>our community</li>
          </ul>
        </div>

        {/*************************************************** */}
        <div className="footer-div3">
          <ul>
            <h1>community</h1>

            <li>help centers</li>
            <li>partners</li>
            <li>suggestion</li>
            <li>blog</li>
            <li>newsletter</li>
          </ul>
        </div>

        {/*************************************************** */}
        <div className="footer-div4">
          <h1>subscribe us</h1>

          <div className="subscribe">
            <input placeholder="nft123@gmail.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
