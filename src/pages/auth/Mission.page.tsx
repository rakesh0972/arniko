import { Grid } from "@mantine/core";
import Filled from "../../components/common/Filled";
import Footer from "../../components/common/Footer";
import Nav from "../../components/common/Nav";
export const MissionPage = () => {
  const myStyle = {
    width: "100%",
    backgroundImage: 'url("/assets/main.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <main className="font-pop tracking-wide h-[100vh] w-full">
      <div className="bg-white h-[55vh]">
        <div className="flex flex-col justify-between h-[45vh]" style={myStyle}>
          <Nav />
        </div>
        <div className="bg-gray-100">
          <ul className="flex p-4">
            <li className="inline-flex">
              <a href="#" className="text-gray-500 hover:text-arniko-red">
                Home
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="inline-flex">
              <a href="#" className="text-gray-500 hover:text-arniko-red">
                About Arniko
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="inline-flex">
              <a href="#" className="text-gray-500 hover:text-arniko-red">
                Our Missions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 m-5">
        <div className="bg-blk w-100% h-16 text-white p-5 lg:hidden">
          About Arniko
        </div>

        <Grid>
          <Grid.Col
            lg={4}
            md={4}
            sm={0}
            xs={0}
            className="section1h-full w-full lg:pt-12 hidden lg:block "
            // style={{ display: "none" }}
          >
            <ul className="text-xl font-medium cursor-pointer px-12">
              <li className=" font-semibold text-2xl p-4 hover:text-gray hover:translate-x-6  hover:ease-in-out duration-300">
                Our Mission
              </li>
              <li className="p-4 hover:text-gray  hover:translate-x-6  hover:ease-in-out duration-300 ">
                ICS Trustees
              </li>
              <li className="p-4 hover:text-gray hover:translate-x-6  hover:ease-in-out duration-300">
                Call for Applications
              </li>
              <li className="p-4 hover:text-gray hover:translate-x-6  hover:ease-in-out duration-300 ">
                Leadership Team
              </li>
              <li className="p-4 hover:text-gray  hover:translate-x-6  hover:ease-in-out duration-300">
                School History
              </li>
              <li className="p-4 hover:text-gray hover:translate-x-6  hover:ease-in-out duration-300 ">
                Accreditation & Affiliation
              </li>
              <li className="p-4 hover:text-gray hover:translate-x-6  hover:ease-in-out duration-300 ">
                School Year Calendar
              </li>
              <li className="p-4 hover:text-gray  hover:translate-x-6  hover:ease-in-out duration-300">
                ICS News
              </li>
              <li className="p-4 hover:text-gray hover:translate-x-6  hover:ease-in-out duration-300 ">
                ICS Social Media
              </li>
              <li className="p-4 hover:text-gray  hover:translate-x-6  hover:ease-in-out duration-300">
                Vacancies
              </li>
              <li className="p-4 hover:text-gray  hover:translate-x-6  hover:ease-in-out duration-300">
                Contact ICS
              </li>
            </ul>
          </Grid.Col>

          <Grid.Col lg={4} md={4} sm={6} xs={6} className="section2 pt-12">
            <h1 className="text-arniko-red text-4xl font-normal">
              Our Mission
            </h1>
            <div className="h-1 w-full bg-arniko-red mt-2"></div>

            <p className="text-2xl font-medium text-gray mt-9">
              At ICS we are committed to providing a supportive and enabling
              learning environment in which all members of the community are
              challenged to achieve their individual potential, encouraged to
              pursue their passions, and expected to fulfil their
              responsibilities.
            </p>

            <div className="my-12">
              <img src="/assets/main.png" alt="image" className=" bg-cover" />
            </div>
            <hr className="my-12" />
            <div className="quote">
              <h1 className="text-lg font-light p-4 text-arniko-red">
                <span className="text-6xl ">"</span> It was an expectation that
                we would all go into tertiary education and I was able to learn
                a great deal about the many different academic options available
                after high school from counsellors, tutors, teachers and
                visiting lecturers. All my teachers at ICS were very supportive
                and encouraging about all of my subjects and passions, which
                allowed me the freedom and confidence to choose which ever path
                I wanted.
              </h1>
              <h1 className=" font-light text-lg p-4">
                - Piera M, ICS Class of 2009, MSc, Chemical Biology, University
                of Warwick, PhD candidate, University of Edinburgh
                <span className="text-6xl ">"</span>
              </h1>
            </div>
            <hr className="my-12" />
            <div className="our_vision py-1">
              <h1 className="text-4xl font-normal text-arniko-red ">
                Our Vision
              </h1>
              <div className="supportive">
                <h2 className="text-2xl font-normal text-arniko-red mt-2">
                  Supportive & Enabling Learning Environment
                </h2>

                <ol className="list-disc p-4">
                  <li className="py-1">
                    Differentiated programmes appropriate to a broad spectrum of
                    learning styles and aptitudes consistent with a
                    non-selective admissions policy are offered;
                  </li>
                  <li className="py-1">
                    Diverse student population, with programmes to support and
                    enhance that diversity;
                  </li>
                  <li className="py-1">
                    The principles of understanding and respect between
                    individuals, communities, cultures and nations are promoted
                    and, in particular, reflect those principles in our
                    relationship with our host community;
                  </li>
                  <li className="py-1">
                    Language proficiency is fundamental to international
                    understanding, and therefore support to second-language
                    acquisition and to mother-tongue development is recognised.
                  </li>
                </ol>
              </div>

              <div className="challenge">
                <h2 className="text-2xl font-normal text-arniko-red mt-2">
                  Challenge to Achieve Individual Potential
                </h2>
                <ol className="list-disc p-4">
                  <li className="py-1">
                    Expectation that students will strive to use their talents
                    to the fullest;
                  </li>
                  <li className="py-1">
                    Provision of out-of-class programmes of &nbsp;{" "}
                    {/*  &nbsp; for space */}
                    <a className="text-arniko-red cursor-pointer hover:text-dblue">
                      outdoor and expedition education;
                    </a>
                  </li>
                  <li className="py-1">
                    Commitment that ICS staff should continue to be recognised
                    as leaders in the field of international education;
                  </li>
                  <li className="py-1">
                    Development of programmes of online education and
                    extra-curricular classes to extend learning beyond the
                    classroom and beyond the ICS student community.
                  </li>
                </ol>
                <div className="persuit">
                  <h2 className="text-2xl font-normal text-arniko-red mt-2">
                    Pursuit of passion will require the school to
                  </h2>

                  <ol className="list-disc p-4">
                    <li className="py-1">
                      Support and nurture talent and interest, and accommodate
                      the many forms in which they arise;
                    </li>

                    <li className="py-1">
                      Celebrate excellence and commitment;
                    </li>

                    <li className="py-1">
                      Encourage the idea that individuals can and should &nbsp;
                      {/*  &nbsp; for space */}
                      <a className="text-arniko-red cursor-pointer hover:text-dblue">
                        make a difference.
                      </a>
                    </li>
                  </ol>
                </div>

                <div className="Fullfilment">
                  <h2 className="text-2xl font-normal text-arniko-red mt-2">
                    Fulfilment of responsibility will be accomplished through
                  </h2>

                  <ol className="list-disc p-4">
                    <li className="py-1">
                      An explicit and active commitment to human rights;
                    </li>

                    <li className="py-1">
                      Outreach and community action programmes that involve all
                      of the school’s constituencies: – students, teachers and
                      parents;
                    </li>
                    <li className="py-1">
                      Environmentally responsible operational policies and
                      procedures that embody the environmental awareness of the
                      curriculum;
                    </li>

                    <li className="py-1">
                      Programmes that ensure the full engagement of ICS students
                      with &nbsp;
                      {/*  &nbsp; for space */}
                      <a className="text-arniko-red cursor-pointer hover:text-dblue">
                        local and global issues.
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="learn text-center mb-4">
              <h2 className="text-2xl font-normal text-arniko-red py-4">
                Learn more about the curriculum offered at ICS
              </h2>
              <Filled tit="LEARN AT ARNIKO" />
            </div>
          </Grid.Col>

          <Grid.Col lg={4} md={4} sm={6} xs={6} className="section3 md:pt-12">
            <div className="discoverMore_box py-14 bg-arniko-red w-full text-center  hover:bg-dblue ">
              <h1 className="text-white font-bold text-3xl pt-1 ">
                Discover more
              </h1>
              <h1 className="text-white font-bold text-3xl  pt-1 ">
                about Admissions
              </h1>
              <h1 className="text-white font-bold text-3xl  pt-1 ">
                at Arniko
              </h1>
            </div>

            <hr className="my-12" />

            <div className="quote">
              <h1 className="text-lg font-light p-4 text-arniko-red">
                <span className="text-6xl ">"</span>Our family is returning to
                the Netherlands. We came from a very small local school and will
                take back the best memories about ICS. My daughter didn’t speak
                any English at all and received so much support, after one and a
                half years, curriculum wise she was fine. Thanks to ICS and the
                community. You can’t feel lonely here. There is so much offered
                to help you settle in quickly.
              </h1>
              <h1 className=" font-light text-lg p-4 mb-6">
                - Mrs J, ICS Parent<span className="text-6xl ">"</span>
              </h1>
            </div>
            <hr className="mb-12" />
          </Grid.Col>
        </Grid>
      </div>
      <Footer />
    </main>
  );
};
