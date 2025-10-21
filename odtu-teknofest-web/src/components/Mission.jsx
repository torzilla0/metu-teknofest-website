function Mission() {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Misyonumuz
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              ODTÜ Teknofest takımı olarak, Türkiye'nin teknoloji ve inovasyon alanındaki 
              geleceğini şekillendirmek için var gücümüzle çalışıyoruz. Genç mühendisler 
              ve araştırmacılar olarak, bilim ve teknolojinin sınırlarını zorlayan 
              projeler geliştiriyor ve ülkemizi uluslararası platformlarda temsil ediyoruz.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Havacılık, uzay, otonom sistemler ve yapay zeka alanlarında yürüttüğümüz 
              çalışmalarla, hem akademik hem de endüstriyel düzeyde önemli başarılara imza atıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <div className="text-white font-semibold">İnovasyon</div>
                  <div className="text-gray-400 text-sm">Sürekli gelişim</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <div className="text-white font-semibold">İşbirliği</div>
                  <div className="text-gray-400 text-sm">Takım ruhu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl mb-4 block">🚀</span>
                <p className="text-gray-300 text-lg">Geleceği İnşa Ediyoruz</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission

