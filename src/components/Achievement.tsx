import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useEffect, useState } from "react";

const Achievement = () => {
  const [solved, setSolved] = useState('');
  const [easySolved, setEasySolved]= useState();
  const [mediumSolved, setMediumSolved]= useState();
  const [hardSolved, setHardSolved]= useState();
  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/_Ravi-2022/solved')
      .then(res => res.json())
      .then(data =>{ setSolved(data.solvedProblem),
        setEasySolved(data.easySolved),
        setMediumSolved(data.mediumSolved),
        setHardSolved(data.hardSolved)
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    console.log(solved);
  }, [solved]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Leetcode"
            subTitle={ `${solved} questions on Leetcode`}
            result = "https://leetcode.com/u/_Ravi-2022/"
            des={`Easy solved : ${easySolved} | Medium Solved : ${mediumSolved} | Hard Solved : ${hardSolved}`}
          />
           <ResumeCard
            title="codechef"
            subTitle="1 star"
            result="https://www.codechef.com/users/ravishankartri"
          />
          {/*<ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
