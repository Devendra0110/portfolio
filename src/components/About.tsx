import React from 'react';
import { Code2, Server, Database, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            I'm a passionate full-stack developer specializing in MEAN and MERN stack development.
            With a strong foundation in both front-end and back-end technologies, I create
            scalable, efficient, and user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a dedicated full-stack developer with expertise in MongoDB, Express.js,
              React/Angular, and Node.js. My journey in web development began 5 years ago,
              and I've been passionate about creating innovative solutions ever since.
            </p>
            <p className="text-gray-300 mb-4">
              I thrive in collaborative environments and enjoy tackling complex problems
              with elegant solutions. My approach combines technical excellence with a
              focus on user experience and business objectives.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, or sharing knowledge with the developer community.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-md text-black mr-4">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Frontend Development</h4>
                  <p className="text-gray-300">
                    Creating responsive, interactive UIs with React.js and Angular,
                    focusing on performance and accessibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-md text-black mr-4">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Backend Development</h4>
                  <p className="text-gray-300">
                    Building robust APIs and server-side applications with Node.js and Express.js.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-md text-black mr-4">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Database Management</h4>
                  <p className="text-gray-300">
                    Designing and optimizing MongoDB databases for efficient data storage and retrieval.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-md text-black mr-4">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Full-Stack Solutions</h4>
                  <p className="text-gray-300">
                    Delivering end-to-end web applications that solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
