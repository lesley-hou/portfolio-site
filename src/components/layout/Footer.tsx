import React from "react";
import { motion } from "framer-motion";
import { socials } from "../../data/socials";

import GitHubIcon from "../../assets/socials/github.svg";
import LinkedInIcon from "../../assets/socials/linkedin.svg";
import EmailIcon from "../../assets/socials/email.svg";
import SpotifyIcon from "../../assets/socials/spotify.svg";

const iconMap: Record<string, string> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Email: EmailIcon,
  Spotify: SpotifyIcon,
};

const Footer: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <motion.img
              src={iconMap[social.name]}
              alt={social.alt}
              className="w-6 h-6"
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.2}}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
