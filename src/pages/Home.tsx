import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Kbd } from "@nextui-org/react";
import Button from "../components/home/Button";
import KeyWrapper from "../components/home/KeyWrapper";
import SearchPopover from "../components/home/SearchPopover";
import { motion } from "framer-motion";
import { asciiArt } from "../data/ascii";
import { lineVariants, textBlockVariants } from "../utils/animations";

const Home: React.FC = () => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const openPopover = () => setPopoverVisible(true);
  const closePopover = () => setPopoverVisible(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        openPopover();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopover();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)] px-8">
      <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Intro Section */}
          <motion.div
            className="flex flex-col space-y-2"
            initial="hidden"
            animate="visible"
            variants={textBlockVariants}
          >
            <motion.p className="text-gravel font-inter font-thin" variants={lineVariants}>
              {`<welcome>`}
            </motion.p>
            <motion.h1 className="text-porcelain font-inter font-semibold text-5xl sm:text-7xl" variants={lineVariants}>
              lesley hou
            </motion.h1>
            <motion.p className="text-porcelain font-inter font-light text-md sm:text-xl" variants={lineVariants}>
              incoming software engineer @ hubspot
            </motion.p>
            <motion.p className="text-boulder font-inter font-thin text-sm sm:text-lg" variants={lineVariants}>
              developer &ndash; designer &ndash; occasional traveler &ndash; em dash enthusiast
            </motion.p>

            {/* Button to Open Popover */}
            <Button onClick={openPopover}>
              <span className="block sm:hidden">press here to start →</span>
              <span className="hidden sm:block">
                press{" "}
                <KeyWrapper>
                  <Kbd keys="command">cmd</Kbd>
                </KeyWrapper>
                {" "}
                <KeyWrapper>
                  <Kbd>enter</Kbd>
                </KeyWrapper>{" "}
                to start →
              </span>
            </Button>
            <motion.p className="text-gravel font-inter font-thin" variants={lineVariants}>
              {`</welcome>`}
            </motion.p>
          </motion.div>

          {/* ASCII Art Section */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-64 text-center">
              {asciiArt.split("\n").map((line, i) => (
                <motion.pre
                  key={i}
                  className="text-porcelain font-courier font-thin text-[0.42rem] leading-none tracking-wide"
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  transition={{ duration: 0.5, delay: i * 0.02 }}
                >
                  {line}
                </motion.pre>
              ))}
            </div>
            <motion.p
              className="text-porcelain font-inter font-thin text-sm mt-2"
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              transition={{ duration: 0.8, delay: 1 }}
            >
              here's some ascii art of me eating ramen in japan!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Popover */}
      {isPopoverVisible && <SearchPopover onClose={closePopover} />}
    </Layout>
  );
};

export default Home;
