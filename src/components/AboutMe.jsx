import React, { useEffect, useState } from "react";
import Me from "./assests/imgs/jaksh.jpeg";
import { quotes } from "./utils/helper";
import { GoHorizontalRule } from "react-icons/go";

const AboutMe = () => {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState({});

  const getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  useEffect(() => {
    setQuoteOfTheDay(getRandomQuote(quotes));
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Javascript",
    "Python",
    "Network Security",
    "OS",
    "MySQL",
    "Git",
    "Github",
    "Linux",
  ];

  return (
    <main className="md:px-6 lg:px-10">
      <h1
        className="header text-clr-1 text-3xl my-11 uppercase xl:text-4xl"
        data-aos="fade"
        data-aos-duration="700"
        data-aos-offset="0"
      >
        • About me
      </h1>
      <section className="my-16 xl:flex xl:justify-between xl:gap-6">
        <div className="xl:w-1/2">
          <h1 className="uppercase text-clr-1 text-xl">
            <p className="font-medium">Jaksh Patel</p>
            <p className="text-sm text-clr-light-2">
              A <span className="font-medium">Cloud Developer</span> based in{" "}
              <span className="font-medium">India</span>
            </p>
          </h1>
          <p className="my-6">
            Cloud developer passionate about creating scalable and secure cloud
            solutions. Proficient in leveraging cloud technologies to optimize
            performance and enhance user experiences.
          </p>
          <div className="skills">
            <h1 className="uppercase text-clr-1 text-base font-medium">
              Skills
            </h1>
            <h1 className="text-sm font-light text-clr-light-2">
              Languages/tools
            </h1>
            <div className="mt-3">
              <p>Currently I mainly use the following languages and tools.</p>
              <p>{skills.join(" / ")}</p>
            </div>
            <div className="mt-3">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/11pfCyXbYCwXJJAEJ-tKewQGnLuCoPGPx/view?usp=drive_link"
                rel="noreferrer"
                className="text-clr-1 font-medium underline underline-offset-8 hover:no-underline hover:text-[#606060]"
              >
                Resume &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2">
          <img src={Me} className="w-full" alt="Jaksh" />
        </div>
      </section>
      {quoteOfTheDay && (
        <section className="my-14 xl:w-2/3">{/* Your quote section */}</section>
      )}
    </main>
  );
};

export default AboutMe;
