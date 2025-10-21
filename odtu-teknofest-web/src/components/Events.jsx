function Events() {
  const events = [
    {
      title: "Teknofest 2024",
      date: "Eylül 2024",
      location: "İstanbul",
      image: "🎪",
      description: "Türkiye'nin en büyük teknoloji festivali"
    },
    {
      title: "Workshop Serileri",
      date: "Yıl Boyunca",
      location: "ODTÜ Kampüsü",
      image: "🎓",
      description: "Teknik eğitim ve proje geliştirme atölyeleri"
    },
    {
      title: "Hackathon 2024",
      date: "Nisan 2024",
      location: "Ankara",
      image: "💻",
      description: "48 saatlik yoğun kodlama maratonu"
    },
    {
      title: "Roket Yarışması",
      date: "Haziran 2024",
      location: "Roketsan Tesisleri",
      image: "🚀",
      description: "Model roket tasarım ve uçuş yarışması"
    },
    {
      title: "İHA Yarışması",
      date: "Ağustos 2024",
      location: "Aksaray",
      image: "🛸",
      description: "İnsansız hava araçları görev yarışması"
    },
    {
      title: "Ödül Töreni",
      date: "Aralık 2024",
      location: "ODTÜ",
      image: "🏆",
      description: "Yılın başarılarının kutlanması"
    }
  ]

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Etkinlikler & Yarışmalar
          </h2>
          <p className="text-xl text-gray-300">
            Yıl boyunca katıldığımız ve organize ettiğimiz etkinlikler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                <span className="text-7xl transform group-hover:scale-110 transition-transform">
                  {event.image}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-400 font-semibold">{event.date}</span>
                  <span className="text-sm text-gray-400">{event.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events

