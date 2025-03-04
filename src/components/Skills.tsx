import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', level: 75 },
    { name: 'Angular', level: 75 },
    { name: 'React Native', level: 70 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'HTML5/CSS3', level: 70 },
    // { name: 'Redux', level: 80 },
    //{ name: 'Tailwind CSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'Redis', level: 90 },
    // { name: 'GraphQL', level: 75 },
    // { name: 'JWT/Auth', level: 80 },
  ];

  const otherSkills = [
    // { name: 'Git/GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 70 },
    { name: 'Digital Ocean', level: 60 },
    // { name: 'Jest/Testing', level: 80 },
    // { name: 'Agile/Scrum', level: 85 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-2.5">
        <div
          className="bg-white h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            My expertise spans across the entire web development stack, with a focus on MEAN and MERN technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Other Skills</h3>
            {otherSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
