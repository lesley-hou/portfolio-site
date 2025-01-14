import Code from "../assets/home/code.svg";
import Link from "../assets/home/link.svg";
import Home from "../assets/home/home.svg";
import User from "../assets/home/user.svg";
import Contact from "../assets/home/contact.svg";
import Resume from "../assets/home/resume.svg"

export const generalItems = [
  {
    onClick: () =>
      navigator.clipboard
        .writeText("https://lesleyhou.com")
        .catch(() => alert("Failed to copy link.")),
    label: "copy link",
    iconSrc: Link,
    iconAlt: "Link icon",
    iconSize: "w-4 h-4",
  },
  {
    onClick: () =>
      window.open("https://github.com/lesley-hou/portfolio-site", "_blank"),
    label: "view source code",
    iconSrc: Code,
    iconAlt: "Code icon",
    iconSize: "w-3 h-3",
  },
  {
    onClick: () => window.open("/resume.pdf", "_blank"),
    label: "my resume",
    iconSrc: Resume,
    iconAlt: "Resume icon",
    iconSize: "w-3 h-3",
  },
];

export const navigationItems = [
  {
    onClick: (navigate: (path: string) => void) => navigate("/"),
    label: "home (you are here!)",
    iconSrc: Home,
    iconAlt: "Home icon",
    iconSize: "w-4 h-4",
  },
  {
    onClick: (navigate: (path: string) => void) => navigate("/about"),
    label: "about",
    iconSrc: User,
    iconAlt: "User icon",
    iconSize: "w-4 h-4",
  },
  {
    onClick: (navigate: (path: string) => void) => navigate("/contact"),
    label: "contact",
    iconSrc: Contact,
    iconAlt: "Contact icon",
    iconSize: "w-4 h-4",
  },
];
