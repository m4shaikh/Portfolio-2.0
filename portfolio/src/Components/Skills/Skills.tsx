import React from 'react';

const Skills = () => {
  // Placeholder data - replace with your actual skills
  const skillCategories = [
    {
      title: "Backend & Languages",
      skills: ["Node.js", "Python", "Java", "Go", "TypeScript", "C++"]
    },
    {
      title: "Databases & ORMs",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose", "SQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Linux", "Git", "CI/CD", "Nginx"]
    }
  ];

  return (
    <div className="min-h-screen ml-[60px] flex flex-col justify-center px-6 py-12 md:px-8 bg-[#1a1a1a] text-white select-none">
      
      {/* Top Section Tag */}
      <div className="space-y-1 mb-8">
        <span className="font-tag text-blue-500 block">&lt;section id=&quot;skills&quot;&gt;</span>
      </div>

      <div className="pl-4 md:pl-16 w-full max-w-6xl mx-auto flex-1">
        
        {/* Heading */}
        <div className="mb-12">
          <span className="font-tag text-blue-500 block mb-2">&lt;h2&gt;</span>
          <h2 className="font-rg text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Technical <span className="text-primary-500">Arsenal</span>
          </h2>
          <span className="font-tag text-blue-500 block mt-2">&lt;/h2&gt;</span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#1e1e1e] border border-gray-800 rounded-lg p-6 hover:border-primary-500/50 transition-colors duration-300">
              <h3 className="font-label text-xl text-white mb-4 border-b border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="font-mono text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-sm border border-green-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Section Tag */}
      <div className="space-y-1 mt-12">
        <span className="font-tag text-blue-500 block">&lt;/section&gt;</span>
      </div>

    </div>
  );
};

export default Skills;