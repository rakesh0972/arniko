import {
  AiOutlinePauseCircle,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import Filled from "../../components/common/Filled";
const Footer = () => {
  return (
    <div className="footer bg-blk ">
      <div className="lg:flex ">
        <div className="footer_section_1 p-5 lg:w-[20%] ">
          <div className="flex justify-center ">
            <img
              className="max-h-[61px]  max-w-[240px]"
              src="/assets/arnikowhite 1.png"
              alt=""
            />
          </div>
          <div className="icons flex gap-3 mt-3 text-white text-3xl cursor-pointer justify-center">
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiFillYoutube />
            <AiOutlineTwitter />
          </div>
        </div>
        <div className="footer_section_2 text-white p-5  lg:w-[20%]">
          <h1 className="font-semibold text-white text-2xl py-5 ">
            Get in touch
          </h1>

          <h1 className="font-semibold text-arniko-red text-base  ">
            CONTACT US
          </h1>
          <p className="text-left text-white font-semibold mb-2 text-sm ">
            ICS Inter-Community School Zurich Strubenacher 3 8126 Zumikon,
            Switzerland
          </p>

          <h1 className="font-semibold text-arniko-red text-base  ">
            EMAIL US
          </h1>
          <p className="text-left text-white font-semibold mb-2 text-sm ">
            contact@arniko.edu
          </p>

          <h1 className="font-semibold text-arniko-red text-base  ">CALL US</h1>
          <p className="text-left text-white font-semibold mb-2 text-sm ">
            (977) 01 5529905, +(977) 01 5550084
          </p>
        </div>

        <div className="footer_section_3 p-5  lg:w-[20%]">
          <h1 className="font-semibold text-white text-2xl py-5 ">
            Quick Links
          </h1>
          <p className="text-left text-white font-semibold text-sm">
            <nav className="flex flex-col gap-1 cursor-pointer">
              <a>Learn at Arniko </a>
              <a>Admissions</a>
              <a>School year Calendar</a>
              <a>Arniko News </a>
              <a>Arniko Bulletin</a>
              <a>Lunch </a>
              <a>Menus</a>
              <a>Our Location</a>
              <a>Privacy </a>
              <a>Notice</a>
              <a>Sitemap</a>
            </nav>
          </p>
        </div>
        <div className="footer_section_4 p-5 text-white  lg:w-[20%]">
          <h1 className="font-semibold text-white text-2xl py-5 ">
            Who we are
          </h1>
          <p className="text-left text-white font-semibold text-sm">
            ICS is an English-language international school in Zurich,
            Switzerland. Established in 1960, ICS offers a world class education
            for students aged 18 months to 18 years. ICS Diploma students can
            qualify for the IB Bilingual Diploma.
          </p>
        </div>

        <div className="footer_section_5 text-white p-5  lg:w-[20%] ">
          <h1 className="font-semibold text-white text-2xl py-5 ">
            Campus Tours
          </h1>
          <p className="text-left text-white font-semibold mb-1 text-sm">
            ICS is an English-language international school in Zurich,
          </p>
          <p className="text-left text-white font-semibold mb-1 text-sm">
            ICS is an English-language international school in Zurich,
          </p>
        </div>
      </div>
      <div className="bottom__but flex gap-2 justify-center mt-12 lg:flex lg:justify-end lg:mr-16">
        <Filled tit="ARRANGE A VISIT" />
        <Filled tit="REQUEST INFO" />
      </div>
      <h3 className="text-sm font-pop font-semibold text-white text-center p-4 lg:flex lg:justify-start lg:ml-3">
        © 2023 Copyright Arniko
      </h3>
    </div>
  );
};

export default Footer;
