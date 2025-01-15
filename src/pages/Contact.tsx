import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Canvas from "../components/contact/Canvas";
import { textBlockVariants, popoverVariants } from "../utils/animations";

const Contact: React.FC = () => {
  return (
    <Layout>
      <motion.div
        className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={textBlockVariants}
      >
        <motion.div
          className="text-inter w-[280px] sm:w-[400px] text-center sm:text-left"
          variants={popoverVariants}
        >
          <p className="font-semibold text-porcelain text-xl">contact me</p>
          <p className="text-boulder">
            want to work on something cool together or just say hi?
          </p>
          <p className="text-boulder mt-2">
            shoot me an email,{" "}
            <a
              href="mailto:lesleyhou28@gmail.com"
              className="font-bold underline italic"
            >
              lesleyhou28@gmail.com
            </a>
          </p>
        </motion.div>
        <motion.div variants={popoverVariants}>
          <Canvas />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
