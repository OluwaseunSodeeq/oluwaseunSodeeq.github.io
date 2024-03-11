import ContentContainer from "../Ui/ContentContainer";

function Skills() {
  const skillsArray = [
    { skill: "HTML", percent: 9 },
    { skill: "CSS", percent: 9 },
    { skill: "JAVASCRIPT", percent: 8 },
    { skill: "REACT.JS", percent: 7 },
    { skill: "TAILWIND CSS", percent: 7 },
    { skill: "GIT", percent: 6 },
  ];
  const maxPercent = 10;
  return (
    <ContentContainer>
      <div className=" lg:flex lg:justify-center lg:items-center gap-x-[72px] mt-[-30px]">
        <div className="hidden lg:block w-[420px] h-[441px]">
          <img src="../skillpic.png" alt="Oluwaseun Sodeeq" />
        </div>
        <div className="px-6 py-10 lg:w-[650px]">
          <div>
            <h4 className="text-blue-text text-base font-normal leading-6 font-outfit">
              Skills
            </h4>
            <h2 className="font-outfit text-3xl lg:text-5xl lg:mt-3 leading-[56px] font-bold text-btn-text-color">
              What I&apos;m good @
            </h2>
            <div className="flex gap-[10px] -mt-[10px] lg:mt-2">
              <div className="bg-blue-text h-[2px] w-[75px] lg:w-[120px]"></div>
              <div className="bg-blue-text h-[2px] w-[20px]"></div>
              <div className="bg-blue-text h-[2px] w-[20px]"></div>
            </div>
            <p className="text-base md:text-[18px] leading-6 font-normal font-outfit text-btn-text-color mt-4">
              As a web developer, I blend creativity and technical expertise to
              craft captivating and user-friendly websites. I bring a commitment
              to cutting-edge technologies and a keen eye for design, ensuring
              your project becomes a digital masterpiece. Let&apos;s collaborate
              to transform your vision into a compelling online presence.
            </p>
          </div>
          <div className="shadow-custom pb-4 lg:pb-2">
            <div className="mt-6 pb-4   pt-4 px-4 rounded-[16px]  lg:flex lg:flex-wrap  lg:gap-x-[40px] ">
              {skillsArray.map((each) => (
                <div key={each.skill} className="mt-3 md:mt-5 md:pb-0 lg:mt-2 ">
                  <h5 className="text-btn-text-color text-base font-quicksand leading-5 font-normal md:text-[18px] lg:text-base">
                    {each.skill}
                  </h5>
                  <div className="flex gap-3 items-center md:mt-2">
                    <div className="w-[262px] md:w-[500px] lg:w-[210px] relative border-btn-text-color  border  py-[2px]   pl-[2px] lg:pl-[1px] pr-[1px] lg:h-[17px] lg:py-[1px]">
                      <div className="w-full bg-plain-white relative z-20 flex items-center gap-[2px] ">
                        {Array.from({ length: maxPercent }, (_, i) => (
                          <div
                            key={i}
                            className={`w-[26px] md:w-[50px] h-[17px] md:h-[25px]   lg:w-[21px] lg:h-[13px] bg-${
                              each.percent + 1 <= i + 1
                                ? "text-color-two"
                                : "blue-text"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="bg-plain-white w-[263px] md:w-[502px] lg:w-[210px]   absolute z-10 bottom-[30%] md:bottom-[30%] lg:h-[3px] lg:bottom-[45%] flex justify-end">
                        <div className="bg-btn-text-color h-[10px] lg:h-[5px] w-full opacity-40"></div>
                      </div>
                    </div>
                    <div className="text-base md:text-[20px] lg:text-[18px] md:ml-4 lg:ml-0 lg:text-basefont-normal text-btn-text-color font-quicksand opacity-70">
                      {each.percent}0%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default Skills;
/*
import ContentContainer from "../Ui/ContentContainer";

function Skills() {
  const skillsArray = [
    { skill: "HTML", percent: 9 },
    { skill: "CSS", percent: 9 },
    { skill: "JAVASCRIPT", percent: 8 },
    { skill: "REACT.JS", percent: 7 },
    { skill: "TAILWIND CSS", percent: 7 },
    { skill: "GIT", percent: 6 },
  ];
  const maxPercent = 10;
  return (
    <ContentContainer>
      <div className=" lg:flex lg:justify-center lg:items-center gap-x-[72px] mt-[-30px]">
        <div className="hidden lg:block w-[420px] h-[441px]">
          <img src="../skillpic.png" alt="Oluwaseun Sodeeq" />
        </div>
        <div className="px-6 py-10 lg:w-[650px]">
          <div>
            <h4 className="text-blue-text text-base font-normal leading-6 font-outfit">
              Skills
            </h4>
            <h2 className="font-outfit text-3xl lg:text-5xl lg:mt-3 leading-[56px] font-bold text-btn-text-color">
              What I&apos;m good @
            </h2>
            <div className="flex gap-[10px] -mt-[10px] lg:mt-2">
              <div className="bg-blue-text h-[2px] w-[75px] lg:w-[120px]"></div>
              <div className="bg-blue-text h-[2px] w-[20px]"></div>
              <div className="bg-blue-text h-[2px] w-[20px]"></div>
            </div>
            <p className="text-base lg:text-[18px] leading-6 font-normal font-outfit text-btn-text-color mt-4">
              As a web developer, I blend creativity and technical expertise to
              craft captivating and user-friendly websites. I bring a commitment
              to cutting-edge technologies and a keen eye for design, ensuring
              your project becomes a digital masterpiece. Let&apos;s collaborate
              to transform your vision into a compelling online presence.
            </p>
          </div>
          <div className="shadow-custom ">
            <div className="mt-6 pb-4 pt-4 px-4 rounded-[16px]  md:flex flex-wrap justify-between ">
              {skillsArray.map((each) => (
                <div key={each.skill}>
                  <h5 className="text-btn-text-color text-base font-quicksand leading-5 font-normal">
                    {each.skill}
                  </h5>
                  <div className="flex gap-3 items-center">
                    <div className="w-[183px] relative border-btn-text-color  border h-[17px] py-[1px]  ">
                      <div className=" bg-plain-white relative z-20 flex items-center gap-[2px]">
                        {Array.from({ length: maxPercent }, (_, i) => (
                          <div
                            key={i}
                            className={`w-[16px] h-[13px] bg-${
                              each.percent + 1 <= i + 1
                                ? "text-color-two"
                                : "blue-text"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="bg-plain-white w-[185px] h-[5px] absolute z-10 bottom-[30%] flex justify-end">
                        <div className="bg-btn-text-color h-[5px] w-1 opacity-40"></div>
                      </div>
                    </div>
                    <div className="text-base font-normal text-btn-text-color font-quicksand opacity-70">
                      {each.percent}0%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default Skills;

*/
