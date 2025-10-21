function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <span className="text-white font-bold text-xl">ODTÜ TEKNOFEST</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Türkiye'nin en büyük teknoloji festivalinde geleceği şekillendiriyoruz. 
              Öğrenci odaklı projelerle teknoloji ve inovasyonun öncüsü oluyoruz.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: '📱', label: 'Instagram' },
                { icon: '🐦', label: 'Twitter' },
                { icon: '📧', label: 'Email' },
                { icon: '💼', label: 'LinkedIn' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                  title={social.label}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform inline-block">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="#mission" className="text-gray-400 hover:text-blue-400 transition-colors">Misyonumuz</a></li>
              <li><a href="#competitions" className="text-gray-400 hover:text-blue-400 transition-colors">Yarışmalar</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-blue-400 transition-colors">Etkinlikler</a></li>
              <li><a href="#committees" className="text-gray-400 hover:text-blue-400 transition-colors">Komiteler</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-0.5">📍</span>
                <span className="text-gray-400">
                  ODTÜ Kampüsü<br />
                  Ankara, Türkiye
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">📧</span>
                <a href="mailto:info@odtuteknofest.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@odtuteknofest.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">🌐</span>
                <a href="https://teknofest.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  teknofest.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 ODTÜ Teknofest. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

