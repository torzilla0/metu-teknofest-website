function Committees() {
  const committees = [
    {
      name: "Yazılım Komitesi",
      icon: "💻",
      description: "Otonom sistemler, yapay zeka ve yazılım geliştirme",
      members: "25+",
      color: "blue"
    },
    {
      name: "Mekanik Komitesi",
      icon: "⚙️",
      description: "Mekanik tasarım, üretim ve analiz çalışmaları",
      members: "30+",
      color: "purple"
    },
    {
      name: "Elektrik-Elektronik",
      icon: "⚡",
      description: "Elektronik tasarım, PCB ve güç sistemleri",
      members: "20+",
      color: "yellow"
    },
    {
      name: "Havacılık Komitesi",
      icon: "✈️",
      description: "Aerodinamik, uçuş sistemleri ve kontrol",
      members: "15+",
      color: "green"
    },
    {
      name: "Organizasyon",
      icon: "📋",
      description: "Etkinlik yönetimi ve koordinasyon",
      members: "12+",
      color: "pink"
    },
    {
      name: "İletişim & Medya",
      icon: "📱",
      description: "Sosyal medya, grafik tasarım ve içerik üretimi",
      members: "10+",
      color: "indigo"
    }
  ]

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/60",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/60",
    yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 hover:border-yellow-500/60",
    green: "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/60",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:border-pink-500/60",
    indigo: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 hover:border-indigo-500/60"
  }

  return (
    <section id="committees" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Komitelerimiz
          </h2>
          <p className="text-xl text-gray-300">
            Her biri kendi alanında uzman, tutkulu ekiplerimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {committees.map((committee, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${colorClasses[committee.color]} backdrop-blur-sm border rounded-xl p-8 transition-all hover:transform hover:scale-105 cursor-pointer group`}
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                {committee.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{committee.name}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{committee.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-gray-400 text-sm">Üye Sayısı</span>
                <span className="text-white font-bold text-lg">{committee.members}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Takım Kültürümüz
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                ODTÜ Teknofest ailesi olarak, öğrenmeye açık, yaratıcı ve işbirlikçi 
                bir ortam yaratıyoruz. Her komitemiz, kendi alanında mükemmelliği 
                hedeflerken, birbirleriyle sürekli etkileşim halinde çalışıyor.
              </p>
              <div className="space-y-3">
                {[
                  "Haftalık teknik workshoplar",
                  "Mentörlük programları",
                  "Takım içi proje yarışmaları",
                  "Sosyal etkinlikler ve kamplar"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["🎯", "🚀", "💡", "🏆"].map((emoji, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 border border-blue-500/20 rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
                  <span className="text-6xl">{emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Committees

