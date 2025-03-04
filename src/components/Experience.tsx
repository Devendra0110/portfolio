import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "Extern Labs Pvt. Ltd.",
      location: "Jaipur",
      period: "2022 - Present",
      description: [
        "Lead developer for multiple MERN stack applications, managing a team of 8 developers",
        "Architected and implemented a scalable platform",
        "Optimized database queries and API endpoints, reducing load times by 40%",
        "Implemented CI/CD pipelines and containerization for streamlined deployment",
        "Manage Mobile application releases on App Store and Play store"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Docker", "AWS"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "IDCLE",
      location: "Remote",
      period: "2019 - 2022",
      description: [
        "Assisted in the development of web applications using Angular and Node.js",
        "Implemented front-end features and components based on design specifications",
        "Participated in code reviews and agile development processes",
        "Contributed to database schema design and API development",
        "Implemented Test Cases and Code coverage"
      ],
      technologies: ["Angular", "Node.js", "Express","Fastify", "MongoDB", "MySQL","Socket.io","JavaScript","Typescript","Docker", "HTML/CSS", "Git",]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            My professional journey in full-stack development with MEAN and MERN technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-700 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`mb-12 ${index === experiences.length - 1 ? '' : ''}`}
              >
                <div className="absolute w-4 h-4 bg-white rounded-full -left-2 border border-gray-900"></div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="bg-white text-black px-3 py-1 text-sm rounded-full mt-2 md:mt-0 inline-block">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-zinc-800 text-gray-300 px-3 py-1 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
