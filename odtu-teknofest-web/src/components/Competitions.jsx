function Competitions() {
  const competitions = [
    { 
      title: "İnsansız Hava Aracı", 
      category: "Havacılık",
      description: "Otonom uçuş sistemleri ve görüntü işleme teknolojileri",
      icon: "🚁",
      status: "Aktif"
    },
    { 
      title: "Otonom Araç", 
      category: "Teknoloji",
      description: "Yapay zeka destekli sürüş ve sensör füzyon sistemleri",
      icon: "🚗",
      status: "Aktif"
    },
    { 
      title: "Roket Teknolojisi", 
      category: "Uzay",
      description: "Yüksek irtifa roket tasarımı ve yakıt sistemleri",
      icon: "🚀",
      status: "Geliştirme"
    },
    { 
      title: "İnsansız Su Altı Aracı", 
      category: "Denizcilik",
      description: "Su altı navigasyon ve otonom hareket sistemleri",
      icon: "🌊",
      status: "Aktif"
    },
    { 
      title: "Yapay Zeka & Makine Öğrenmesi", 
      category: "Yazılım",
      description: "Derin öğrenme modelleri ve bilgisayarlı görü uygulamaları",
      icon: "🤖",
      status: "Aktif"
    },
    { 
      title: "Elektrik-Elektronik Sistemler", 
      category: "Elektrik",
      description: "Güç dağıtımı, kontrol sistemleri ve PCB tasarımı",
      icon: "⚡",
      status: "Geliştirme"
    }
  ]

  return (
    <section id="competitions" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Yarışma Kategorileri
          </h2>
          <p className="text-xl text-gray-300">
            Teknoloji ve inovasyonun buluştuğu projelerimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((competition, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl transform group-hover:scale-110 transition-transform">
                  {competition.icon}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  competition.status === 'Aktif' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {competition.status}
                </span>
              </div>
              <div className="text-sm text-blue-400 font-semibold mb-2">{competition.category}</div>
              <h3 className="text-xl font-bold text-white mb-3">{competition.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{competition.description}</p>
              <div className="pt-4 border-t border-slate-700">
                <a href="#" className="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bize Katılın!
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Teknoloji ve inovasyonun öncüsü ol. ODTÜ Teknofest takımına katıl.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              Başvuru Yap
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competitions

