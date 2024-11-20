import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const IntroSection = () => {
  const title = [
    "Frontend Developer",
    "Backend Developer",
    "Informatics Student",
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white space-y-4"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400"
        >
          Hi all. I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-lynch-300"
        >
          Imam Syafii
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center space-x-2 text-[#4D5BCE]"
        >
          <span className="text-base">&gt;&gt;</span>
          <ReactTyped
            className="text-lg"
            strings={title}
            typeSpeed={130}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 space-y-1 text-[#4D5BCE]"
        >
          <p className="text-gray-500">
            {"// I continue to explore this technology and more."}
          </p>
          <p className="text-gray-500">
            {"// you can also see it on my Github page"}
          </p>
          <div className="flex items-center space-x-2">
            <div className="text-xs md:text-base">
              <span className="text-[#c161e4]">const </span>
              <span className="text-[#5565E8]">githubLink</span>
              <span className="text-white"> = </span>
              <span className="text-[#FFA07A]">
                <a href="https://github.com/Imamgg">
                  {'"https://github.com/Imamgg"'}
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroSection;
