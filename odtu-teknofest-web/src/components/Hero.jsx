function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            ODTÜ <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">TEKNOFEST</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Türkiye'nin en büyük teknoloji ve havacılık festivali için geliştirilen yenilikçi projeler
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
              Projelerimizi Keşfet
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-blue-500/30">
              Takımımız Hakkında
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: "15+", label: "Proje" },
            { number: "100+", label: "Takım Üyesi" },
            { number: "20+", label: "Ödül" },
            { number: "5", label: "Kategori" }
          ].map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

