import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    { 
      title: "İnsansız Hava Aracı", 
      category: "Havacılık",
      description: "Otonom uçuş sistemleri ve görüntü işleme teknolojileri",
      icon: "🚁"
    },
    { 
      title: "Otonom Araç", 
      category: "Teknoloji",
      description: "Yapay zeka destekli sürüş ve sensör füzyon sistemleri",
      icon: "🚗"
    },
    { 
      title: "Roket Teknolojisi", 
      category: "Uzay",
      description: "Yüksek irtifa roket tasarımı ve yakıt sistemleri",
      icon: "🚀"
    },
    { 
      title: "İnsansız Su Altı Aracı", 
      category: "Denizcilik",
      description: "Su altı navigasyon ve otonom hareket sistemleri",
      icon: "🌊"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
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
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projeler</a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors">Takım</a>
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

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projelerimiz
            </h2>
            <p className="text-xl text-gray-300">
              Teknoloji ve inovasyonun buluştuğu projeler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="text-sm text-blue-400 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-slate-700">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bize Katılın!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Teknoloji ve inovasyonun öncüsü ol. ODTÜ Teknofest takımına katıl.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              Başvuru Yap
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ODTÜ TEKNOFEST</h3>
              <p className="text-gray-400 text-sm">
                Türkiye'nin en büyük teknoloji festivalinde geleceği şekillendiriyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Hızlı Linkler</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Projeler</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Etkinlikler</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Sosyal Medya</h3>
              <div className="flex space-x-4">
                {['📱', '🐦', '📧', '💼'].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xl">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 ODTÜ Teknofest. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
