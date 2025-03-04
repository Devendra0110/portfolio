import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto flex flex-col items-center text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">MEAN / MERN</span>
          <span className="block mt-2">Stack Developer</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          Building robust full-stack applications with MongoDB, Express, React/Angular, and Node.js
        </p>

        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/Devendra0110"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-200 p-3 rounded-full transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/dev-gaud"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-200 p-3 rounded-full transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:devendragaud01@gmail.com"
            className="bg-white text-black hover:bg-gray-200 p-3 rounded-full transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 flex flex-col items-center"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
