import React from "react";
import Layout from "../components/layout/Layout";
import CurrentLine from "../components/about/CurrentLine";
import Experience from "../components/about/Experience";
import Project from "../components/about/Project";
import { currentInfo } from "../data/current";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import { lineVariants, textBlockVariants } from "../utils/animations";
import { motion } from "framer-motion";

import LocationIcon from "../assets/about/location.svg";
import BookIcon from "../assets/about/book.svg";
import MusicIcon from "../assets/about/music.svg";
import IveyLearnPlusIcon from "../assets/about/learn.svg";
import GameboyIcon from "../assets/about/gameboy.svg";
import TravelBuddyIcon from "../assets/about/buddy.svg";

const iconMap: Record<string, string> = {
  Location: LocationIcon,
  Book: BookIcon,
  Music: MusicIcon,
  IveyLearnPlus: IveyLearnPlusIcon,
  GameBoy: GameboyIcon,
  TravelBuddy: TravelBuddyIcon,
};

const About: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 min-h-[calc(100vh-180px)] px-8">
        <div className="col-span-2 sm:col-span-3"></div>

        {/* Main Content */}
        <motion.div
          className="col-span-8 sm:col-span-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={textBlockVariants} 
        >
          {/* Introduction Section */}
          <motion.div className="my-8" variants={lineVariants}>
            <p className="font-inter text-porcelain my-1">
              hi! my name is lesley and i like building things. i'm a computer
              science and business student at western university and ivey
              business school. currently i am:
            </p>
            <div>
              {currentInfo.map((line, index) => (
                <CurrentLine
                  key={index}
                  alt={line.alt}
                  text={line.text}
                  name={iconMap[line.name]}
                />
              ))}
            </div>
          </motion.div>

          {/* Experiences Section */}
          <motion.div className="my-8" variants={lineVariants}>
            <p className="text-porcelain font-vt323 text-2xl mb-4">experiences</p>
            <div className="relative pl-6">
              <div className="absolute top-4 bottom-8 left-1 w-[1px] bg-metal"></div>
              <div>
                {experiences.map((exp, index) => (
                  <Experience
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    link={exp.link}
                    date={exp.date}
                    location={exp.location}
                    isPresent={exp.isPresent}
                    description={exp.description}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div className="my-4" variants={lineVariants}>
            <p className="text-porcelain font-vt323 text-2xl mb-4">projects</p>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-0">
              {projects.map((project, index) => (
                <Project
                  key={index}
                  name={project.name}
                  icon={iconMap[project.icon]}
                  alt={project.alt}
                  description={project.description}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
        <div className="col-span-2 sm:col-span-3"></div>
      </div>
    </Layout>
  );
};

export default About;
