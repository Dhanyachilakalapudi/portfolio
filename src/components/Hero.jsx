function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Dhanya  Chilakalapudi👋
      </h1>

      <p className="text-gray-400 text-lg mb-6">
        AI Developer & Full-Stack Developer
      </p>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4">
        
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-cyan-500 px-6 py-2 rounded-lg text-black font-semibold hover:bg-cyan-400"
        >
          View Resume
        </a>

        {/* GitHub Profile Button */}
        <a
          href="https://github.com/Dhanyachilakalapudi"
          target="_blank"
          className="border border-cyan-500 px-6 py-2 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-black"
        >
          GitHub
        </a>

      </div>
    </section>
  );
}

export default Hero;