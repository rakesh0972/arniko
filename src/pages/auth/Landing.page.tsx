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
import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import Information from "../../components/common/Information";

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
    <main className="font-pop overflow-x-hidden tracking-wide">
      <div id="top"></div>
      <div className="flex flex-col justify-between h-screen" style={myStyle}>
        <Nav />

        <BsPlayCircle className="text-6xl absolute bottom-[50%] right-[47%] text-white" />

        <div className="bottom__nav p-4 ">
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
      <Information
        title="Join Arniko"
        content="The Inter-Community School Zurich (ICS) is a fully accredited and
        renowned international
        school in Zurich, Switzerland. We are the only school in Zurich
        offering the International
        Baccalaureate (IB) Programme for Primary Years, Middle Years, and
        Diploma Studies. As an IB
         World School established in 1960, ICS provides personalised
        education for students aged 18
         months to 18 years, including a bilingual diploma option. Our
        supportive community and 
        rigorous curriculum prepares students to flourish in todays quickly
        changing world."
      />

      <Grid>
        {gridcontent.map((data, index) => (
          <Grid.Col md={6} lg={3} key={index}>
            <School title={data.title} content={data.content} img={data.img} />
          </Grid.Col>
        ))}
      </Grid>

      <Information
        title="Life at Arniko"
        content="  Life at ICS extends well beyond the school day. Clubs, sports,
        performances and activities
        help students learn teamwork, develop new skills, and gain
        confidence. Our social media and publications keep our community
        connected with the myriad of events occurring around campus."
      />

      <Grid>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <img src="/assets/r1.png" alt="" className="bg-cover w-full h-full" />
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <div className="r1 bg-arniko-red h-full text-white text-center p-28 lg:p-20">
            <h1 className="text-6xl font-bold p-3 ">5</h1>
            <p className="text-2xl font-semibold">overcast clouds</p>
          </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3} sm={6} className="p-0">
          <div className="r1 p-16 bg-dblue h-full text-white text-center flex flex-col gap-4 lg:p-4">
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
          <div className="r1 p-16 h-full bg-dblue text-white text-lg font-semibold text-center flex flex-col gap-4 lg:p-4 ">
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
      <div className="text-center">
        <Information
          title="Ticket to Thrive"
          content="  ICS is committed to developing the whole child within our culture of
          learning, high 
          expectations, and care. ICS maintains a hard-earned reputation for
          outstanding teaching,
           pedagogical leadership and student achievement. Let our
          admissions team show you how  children thrive at our school."
        />
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
        <img src="/assets/map.png" alt="map" className="cover w-full" />
        <a
          href="#top"
          className="h-[50px] w-[137px] bg-blk absolute bottom-0 right-[35%] lg:right-[45%] flex justify-center"
        >
          <IoIosArrowUp className="text-white text-3xl text-center  mt-3 " />
        </a>
      </div>
      <Footer />
    </main>
  );
};
