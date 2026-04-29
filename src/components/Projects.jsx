function Projects() {
  const projectList = [
    {
      title: "Smart Support Environment",
      desc: "Built an AI-based customer support system with automated query handling and smart response generation.",
      link: "https://github.com/Dhanyachilakalapudi/smart-support-env",
    },
    {
      title: "AI Chat Assistant",
      desc: "Developed an intelligent chatbot for handling customer queries using AI and automation.",
      link: "https://github.com/Dhanyachilakalapudi/smart-ai-support-centers",
    },
    {
      title: "Portfolio Website",
      desc: "Designed and developed a personal portfolio using React and Tailwind CSS.",
      link: "https://github.com/Dhanyachilakalapudi",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {proj.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {proj.desc}
            </p>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 px-5 py-2 rounded-lg text-black font-semibold hover:bg-cyan-400"
            >
              View Project 🚀
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;