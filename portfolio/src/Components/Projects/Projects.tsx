import React from 'react';

const Projects = () => {
  // Placeholder data - replace with your actual projects
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce API Service",
      description: "A highly scalable microservice architecture for an e-commerce backend handling auth, inventory, and Stripe payments.",
      tech: ["Node.js", "Express", "MongoDB", "Stripe API"],
      githubLink: "#", // Replace with real link
      liveLink: "#"    // Replace with real link
    },
    {
      id: 2,
      title: "Real-time Chat Server",
      description: "WebSocket-based chat server supporting private messaging, group rooms, and real-time typing indicators.",
      tech: ["Socket.io", "Redis", "PostgreSQL", "React"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Cloud Storage CLI",
      description: "A command-line tool built to securely upload, encrypt, and retrieve files from AWS S3 buckets.",
      tech: ["Python", "AWS S3", "Cryptography", "Click"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <div className="min-h-screen ml-[60px] flex flex-col justify-center px-6 py-12 md:px-8 bg-[#1a1a1a] text-white select-none">
      
      {/* Top Section Tag */}
      <div className="space-y-1 mb-8">
        <span className="font-tag text-blue-500 block">&lt;section id=&quot;projects&quot;&gt;</span>
      </div>

      <div className="pl-4 md:pl-16 w-full max-w-6xl mx-auto flex-1">
        
        {/* Heading */}
        <div className="mb-12">
          <span className="font-tag text-blue-500 block mb-2">&lt;h2&gt;</span>
          <h2 className="font-rg text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Featured <span className="text-primary-500">Deployments</span>
          </h2>
          <span className="font-tag text-blue-500 block mt-2">&lt;/h2&gt;</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-[#1e1e1e] border border-gray-800 rounded-lg flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              
              {/* Card Terminal Header */}
              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center border-b border-gray-800 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-rg text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="font-label text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-orange-400 bg-orange-400/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1 text-center border border-gray-600 hover:border-white text-gray-300 hover:text-white font-label text-sm py-2 rounded-sm transition-colors">
                    GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1 text-center bg-primary-500/20 text-primary-500 hover:bg-primary-500 hover:text-white font-label text-sm py-2 rounded-sm transition-colors">
                    Live Demo
                  </a>
                </div>
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

export default Projects;