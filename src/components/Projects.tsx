import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  // githubUrl: string;
  liveUrl: string;
  category: 'mern' | 'mean' | 'fullstack';
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'mern' | 'mean' | 'fullstack'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "IWBMS",
      description: "An online portal for MAHABOCW(Maharashtra Building And Other Construction Worker) Welfare Board. To manager worker registeration, renewal and help them to claim their government benefit ",
      image: "https://i.ibb.co/tMMdJ1TP/Screenshot-2025-03-04-at-10-41-48-AM.png",
      tags: ["Angular", "Node.js", "Nest", "MySQL", "Socket.io"],
      // githubUrl: "",
      liveUrl: "https://iwbms.mahabocw.in/",
      category: "fullstack"
    },
    {
      id: 2,
      title: "EO4U",
      description: "A marketplace only for the essential oils. Allow user to search and purchase the product. User can share the product with other user.",
      image: "https://i.ibb.co/bjvNKnSK/Screenshot-2025-03-04-at-11-18-30-AM.png",
      tags: ["Angular", "Node.js", "Fastify", "MongoDB", "Socket.io", "Native Script"],
      // githubUrl: "",
      liveUrl: "",
      category: "mean"
    },
    {
      id: 3,
      title: "Primus One",
      description: "A collaborative project management application with real-time updates, team workspaces, and analytics dashboard built with the MEAN stack.",
      image: "https://i.ibb.co/gLKVv3dN/Screenshot-2025-03-04-at-10-38-04-AM.png",
      tags: ["Angular", "Node.js", "Fastify", "MongoDB", "Socket.io", "Docker"],
      // githubUrl: "",
      liveUrl: "https://primusone.primuspartners.in/",
      category: "mean"
    },
    {
      id: 4,
      title: "Entercraft",
      description: "An Inventory management system which help to keep track of the incoming raw material and outgoing finished part/component give interactive analysis data. Also verify and generate the challan.",
      image: "https://i.ibb.co/Kp6FqhBF/Screenshot-2025-03-04-at-10-48-32-AM.png",
      tags: ["Angular", "Node.js", "Fastify", "MongoDB","Docker"],
      // githubUrl: "https://github.com",
      liveUrl: "https://v2.entercraft.co/",
      category: "mean"
    },
    {
      id: 5,
      title: "Spaceup",
      description: "SpaceUP is a video-first property discovery platform, which helps user to experience the property with videos and Live sessions.",
      image: "https://i.ibb.co/PzG2NmWR/Screenshot-2025-03-04-at-11-25-18-AM.png",
      tags: ["Angular", "Node.js", "Express", "MongoDB", "React Native"],
      // githubUrl: "https://github.com",
      liveUrl: "",
      category: "mean"
    },
    {
      id: 6,
      title: "Shiedeo",
      description: "An ecommerce app allow live video streaming, creating a seamless and engaging shopping experience for users. ",
      image: "https://i.ibb.co/99hDMDTC/Screenshot-2025-03-04-at-11-42-34-AM.png",
      tags: ["Angular", "Node.js", "Express", "MongoDB", "React Native"],
      // githubUrl: "https://github.com",
      liveUrl: "",
      category: "mean"
    },
    {
      id: 7,
      title: "My Magnet",
      description: "Allow real-state agent to manage the lead generation, properties and the brokerage transaction process smoother & hassle-free and helping them keep their pockets heavy.",
      image: "https://i.ibb.co/4ZwLvjrq/Screenshot-2025-03-04-at-11-56-28-AM.png",
      tags: ["React Native", "Firebase", "Socket.io"],
      // githubUrl: "https://github.com",
      liveUrl: "https://play.google.com/store/apps/details?id=io.mymagnet.keys.twa&hl=en",
      category: "fullstack"
    },
    {
      id: 8,
      title: "Good Vibes Herb Nerd Pro",
      description: "The app utilizes advanced AI technology to accurately identify plant species and uncover their potential medicinal benefits, botanical features, growth habits, and traditional uses in medicine",
      image: "https://i.ibb.co/fGFfQm5b/Screenshot-2025-03-04-at-12-00-58-PM.png",
      tags: ["React Native", "Firebase", "Socket.io", ],
      // githubUrl: "https://github.com",
      liveUrl: "https://play.google.com/store/apps/details?id=com.good.vibes.herb.nerd.pro&hl=en",
      category: "fullstack"
    },
    {
      id: 9,
      title: "Fleet Management System",
      description: "A web portal, to help the real-time tracking of vehilcles. Help to reduce the cost of travelling and improve the efficiency of delivery of materials",
      image: "https://i.ibb.co/6ctJC9qr/Screenshot-2025-03-04-at-12-10-55-PM.png",
      tags: ["React", "Socket.io", "React Native", "Php" ],
      // githubUrl: "https://github.com",
      liveUrl: "",
      category: "fullstack"
    },
    {
      id: 10,
      title: "Gas Leak Management System",
      description: "A system to manage the users, areas and entities, including workshop, lines and circuits. Allow user to calculate the cost during the leak of gas and the cost to fix it. ",
      image: "https://i.ibb.co/xqtLJFW6/Screenshot-2025-03-04-at-12-35-59-PM.png",
      tags: ["React", "Socket.io", "React Native", "Php"],
      // githubUrl: "https://github.com",
      liveUrl: "",
      category: "fullstack"
    },
    {
      id: 11,
      title: "Nuego CMS",
      description: "A customizable CMS build using Strapi for the nuego Web Portal.",
      image: "https://i.ibb.co/MxZ9BZ4B/Screenshot-2025-03-04-at-12-50-00-PM.png",
      tags: ["Node", "Strapi", "Docker", "Postgres"],
      // githubUrl: "https://github.com",
      liveUrl: "https://cms.nuego.in/",
      category: "fullstack"
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg mb-8">
            Here are some of my recent projects showcasing my expertise in MEAN and MERN stack development.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'all'
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('mern')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'mern'
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              MERN Stack
            </button>
            <button
              onClick={() => setFilter('mean')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'mean'
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              MEAN Stack
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'fullstack'
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              Other Full-Stack
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-black rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-zinc-800 text-gray-300 px-3 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {/* <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a> */}
                  {project.liveUrl && <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
