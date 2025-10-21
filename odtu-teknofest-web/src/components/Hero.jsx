function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text animate-gradient">
            ODTÜ Teknofest Topluluğu
          </span>
        </h1>

        {/* Slogan */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-blue-300 font-light mb-12 tracking-wide">
          Rise with us
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Türkiye'nin en büyük teknoloji ve havacılık festivali için geliştirilen yenilikçi projeler
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a 
            href="#mission"
            className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all transform hover:scale-110 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80"
          >
            Explore Our Mission
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="#committees"
            className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all border-2 border-white/30 hover:border-white/50"
          >
            Join Our Team
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "15+", label: "Projects", icon: "🚀" },
            { number: "100+", label: "Team Members", icon: "👥" },
            { number: "20+", label: "Awards", icon: "🏆" },
            { number: "5", label: "Categories", icon: "⭐" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

