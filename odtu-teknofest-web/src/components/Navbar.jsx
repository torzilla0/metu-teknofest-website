function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <span className="text-white font-bold text-xl">ODTÜ TEKNOFEST</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-blue-400 hover:text-blue-300 transition-colors">Ana Sayfa</a>
            <a href="#mission" className="text-gray-300 hover:text-white transition-colors">Misyonumuz</a>
            <a href="#events" className="text-gray-300 hover:text-white transition-colors">Etkinlikler</a>
            <a href="#competitions" className="text-gray-300 hover:text-white transition-colors">Yarışmalar</a>
            <a href="#committees" className="text-gray-300 hover:text-white transition-colors">Komiteler</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">İletişim</a>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

