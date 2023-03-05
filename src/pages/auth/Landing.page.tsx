import { IoIosArrowUp } from "react-icons/io";
import { Button, Grid } from "@mantine/core";
import {
  AiOutlinePauseCircle,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  BsArrowDownCircle,
  BsFillVolumeMuteFill,
  BsGlobe,
  BsCheckCircle,
  BsClipboardData,
  BsFillPeopleFill,
  BsPlayCircle,
} from "react-icons/bs";
import { MdColorLens } from "react-icons/md";
import Filled from "../../components/common/Filled";
import School from "../../components/common/School";
import Bgreact from "../../components/common/Bgreact";
import Graybox from "../../components/common/Graybox";

export const LandingPage = () => {
  const gridcontent = [
    {
      title: "PRESCHOOL/KINDERGARTEN",
      content: "Our social media and publications keep our community",
      img: "/assets/m1.png",
    },
    {
      title: "PRIMARY SCHOOL",
      content: "Our social media and publications keep our community",
      img: "/assets/m2.png",
    },
    {
      title: "MIDDLE SCHOOL",
      content: "Our social media and publications keep our community",
      img: "/assets/m3.png",
    },
    {
      title: "HIGH SCHOOL",
      content: "Our social media and publications keep our community",
      img: "/assets/n2.png",
    },
  ];
  const bg = [
    {
      title: "PARENT PERSPECTIVES",
      content:
        "We are the only school in Zurich offering the International Baccalaureate (IB) Programme for Primary",
      img: "/assets/n1.png",
    },
    {
      title: "FAMILY TRANSITIONS ",
      content:
        "We are the only school in Zurich offering the International Baccalaureate (IB) Programme for Primary",
      img: "/assets/m4.png",
    },
    {
      title: "STUDENT GRADUATION",
      content:
        "We are the only school in Zurich offering the International Baccalaureate (IB) Programme for Primary",
      img: "/assets/n3.png",
    },
  ];
  const gray = [
    {
      icon: <BsGlobe className="h-[109px] w-[109px] mx-auto" />,
      number: "50+",
      info: "Student Nationalities",
    },
    {
      icon: <BsCheckCircle className="h-[109px] w-[109px] mx-auto" />,
      number: "36.5",
      info: "Average IB Score",
    },
    {
      icon: <BsClipboardData className="h-[109px] w-[109px] mx-auto" />,
      number: "37%",
      info: "IB Bilingual Diplomas",
    },
    {
      icon: <BsFillPeopleFill className="h-[109px] w-[109px] mx-auto" />,
      number: "55+",
      info: "Clubs and teams",
    },
  ];

  const myStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: 'url("/assets/main.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className="font-pop  tracking-wide">
      <div id="top"></div>
      <div className="flex flex-col justify-between h-screen" style={myStyle}>
        <nav className="flex justify-between px-3">
          <img
            className="h-[84px] w-[244px]"
            src="/assets/arnikowhite 1.png"
            alt=""
          />

          <div className="nav__buttons flex justify-around items-center ">
            <Button
              variant="outline"
              radius="xl"
              size="md"
              className="mr-2 font-semibold text-base text-white border-white invisible lg:visible"
            >
              My arniko
            </Button>
            <Button
              variant="outline"
              radius="xl"
              size="md"
              className="mr-2 font-pop font-semibold text-base text-white border-white invisible lg:visible "
            >
              Search
            </Button>
            <Button
              variant="outline"
              radius="xl"
              size="md"
              className="font-pop font-semibold text-base text-white border-white mr-12 "
            >
              Menu
            </Button>
          </div>
        </nav>

        <BsPlayCircle className="text-6xl absolute bottom-[50%] right-[47%] text-white" />

        <div className="bottom__navp-4 ">
          <div className="lg:flex lg:justify-between">
            <BsFillVolumeMuteFill className="h-10 w-10 text-white" />
            <div className="wrapper lg:flex lg:gap-2 md:flex md:gap-2">
              <div className="flex flex-col justify-center p-1">
                <Filled tit="ARRANGE A VISIT" />
              </div>
              <div className="flex flex-col justify-center p-1">
                <Filled tit="REQUEST INFO" />
              </div>
            </div>
            <div className="wrapper invisible flex gap-1 lg:visible">
              <a href="#bottom">
                <BsArrowDownCircle className="h-10 w-10 text-white  " />
              </a>
              <AiOutlinePauseCircle className="h-10 w-10 text-white " />
            </div>
          </div>
        </div>
      </div>
      <div id="bottom"></div>

      <img src="/assets/e1.png" alt="" className="absolute mt-16 -z-50" />

      <div className=" mb-8 text-center mx-auto">
        <h1 className="mt-[78px] mb-4 font-semibold text-3xl">Join Arniko</h1>
        <p className=" font-medium mb-7 p-4 ">
          The Inter-Community School Zurich (ICS) is a fully accredited and
          renowned international
          <br /> school in Zurich, Switzerland. We are the only school in Zurich
          offering the International
          <br /> Baccalaureate (IB) Programme for Primary Years, Middle Years,
          and Diploma Studies. As an IB
          <br /> World School established in 1960, ICS provides personalised
          education for students aged 18
          <br /> months to 18 years, including a bilingual diploma option. Our
          supportive community and <br />
          rigorous curriculum prepares students to flourish in todays quickly
          changing world.
        </p>
      </div>

      <Grid>
        {gridcontent.map((data, index) => (
          <Grid.Col md={6} lg={3} key={index}>
            <School title={data.title} content={data.content} img={data.img} />
          </Grid.Col>
        ))}
      </Grid>

      <div className=" mb-8 text-center mx-auto">
        <h1 className="mt-[78px] mb-5  font-semibold text-3xl">
          Life at Arniko
        </h1>
        <p className="text-base font-medium mb-3 p-4 ">
          Life at ICS extends well beyond the school day. Clubs, sports,
          performances and activities
          <br /> help students learn teamwork, develop new skills, and gain
          confidence. Our social media and publications keep our community
          connected with the myriad of events occurring around <br /> campus.
        </p>
      </div>

      <Grid>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <img src="/assets/r1.png" alt="" className="bg-cover w-full h-full" />
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <div className="r1 bg-arniko-red h-full text-white text-center py-24">
            <h1 className="text-6xl font-bold p-3 ">5</h1>
            <p className="text-2xl font-semibold">overcast clouds</p>
          </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <div className="r1 p-6 bg-dblue h-full text-white text-center flex flex-col gap-4">
            <MdColorLens className="text-6xl font-bold mx-auto pt-3" />
            <p className="text-base font-semibold text-arniko-red">
              Celebrating a range of talents in the performing Arts
            </p>
            <p className="font-semibold text-sm">
              Children can take a dare and express themselves by acting,
              singing, and dancing exploring the creative side of their
              personalities
            </p>
            <p className="font-semibold text-sm">SIGN UP FOR NEWS ALERTS</p>
          </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <img src="/assets/r5.png" alt="" className="bg-cover h-full w-full" />
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <div className="r1 p-8 h-full bg-dblue text-white text-lg font-semibold text-center flex flex-col gap-4 ">
            <h1 className="mt-7 font-semibold text-lg">Wednesday</h1>
            <h1 className="text-6xl font-bold">11</h1>
            <h1 className="font-semibold text-lg">January 2023</h1>
            <h1 className="font-semibold text-lg">SCHOOL YEAR CALENDAR</h1>
          </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <img src="/assets/r4.png" alt="" className="bg-cover h-full w-full" />
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <img src="/assets/r3.png" alt="" className="bg-cover h-full w-full" />
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <img src="/assets/r2.png" alt="" className="bg-cover h-full w-full" />
        </Grid.Col>
      </Grid>

      <div className=" text-center mx-auto mb-6">
        <h1 className="mt-[78px] mb-4 font-pop font-semibold text-3xl">
          Ticket to Thrive
        </h1>
        <p className="text-base font-medium mb-4 p-4">
          ICS is committed to developing the whole child within our culture of
          learning, high <br />
          expectations, and care. ICS maintains a hard-earned reputation for
          outstanding teaching,
          <br /> pedagogical leadership and student achievement. Let our
          admissions team show you how <br /> children thrive at our school.
        </p>
        <Filled tit="ADMISSIONS" />
      </div>

      <Grid>
        {gray.map((data, index) => (
          <Grid.Col lg={3} md={6} sm={12} key={index} className="p-1">
            <Graybox icon={data.icon} number={data.number} info={data.info} />
          </Grid.Col>
        ))}
      </Grid>

      <img src="/assets/e2.png" alt="" className="absolute mt-52 -z-50" />
      <div className="text-center mx-auto">
        <h1 className="mt-[78px] mb-2 font-pop font-semibold text-3xl">
          Why Arniko
        </h1>
        <p className="text-base font-normal mb-4 p-4">
          ICS provides an empowering learning environment where all members of
          the community are <br />
          challenged to achieve their potential, encouraged to pursue their
          passions, and expected to
          <br /> fulfil their responsibilities. Numerous programmes support
          students and parents through all <br />
          stages of their ICS journey.
        </p>
      </div>

      <Grid>
        {bg.map((data, index) => (
          <Grid.Col lg={4} md={6} sm={12} key={index} className="p-1">
            <Bgreact title={data.title} content={data.content} img={data.img} />
          </Grid.Col>
        ))}
      </Grid>

      <div className="relative">
        <img src="/assets/map.png" alt="map" className="cover" />
        <a
          href="#top"
          className="h-[50px] w-[137px] bg-blk absolute bottom-0 right-[50%] flex justify-center"
        >
          <IoIosArrowUp className="text-white text-3xl text-center  mt-3 " />
        </a>
      </div>

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

            <h1 className="font-semibold text-arniko-red text-base  ">
              CALL US
            </h1>
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
              Switzerland. Established in 1960, ICS offers a world class
              education for students aged 18 months to 18 years. ICS Diploma
              students can qualify for the IB Bilingual Diploma.
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
    </main>
  );
};
