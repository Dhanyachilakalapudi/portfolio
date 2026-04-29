function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black sticky top-0">
      <h1 className="text-xl font-bold text-cyan-400">Dhanya Chilakalapudi</h1>

      <div className="space-x-6 text-gray-300">
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;