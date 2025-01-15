import { currentInfo } from "./current";
import { experiences } from "./experiences";
import { projects } from "./projects";

const tokenizeSentence = (sentence: string): string[] => {
  const tokens = sentence.split(/\s+/).map((word: string) => word.toLowerCase());
  return [...new Set(tokens)]; 
};

export const searchData = [
  { title: "home", path: "/", content: "incoming software engineer @ hubspot" },
  { title: "home", path: "/", content: "developer - designer - occasional traveler - em dash enthusiast" },

  ...currentInfo.map((info) => ({
    title: "Current Info",
    path: "/about",
    content: info.text,
  })),

  ...experiences.map((exp) => ({
    title: exp.title,
    path: "/about",
    content: `${exp.company} ${exp.date} ${exp.location} ${exp.description}`,
  })),

  ...projects.map((project) => ({
    title: project.name,
    path: "/about",
    content: `${project.description}`,
  })),
].map((item) => ({
  ...item,
  tokens: tokenizeSentence(item.content), 
}));
