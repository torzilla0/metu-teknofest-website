function Events() {
  const mockEvents = [
    {
      id: 1,
      title: 'Rocket Competition 2024',
      imageUrl: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Teknofest Aviation Festival',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Student Innovation Summit',
      imageUrl: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Drone Racing Championship',
      imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Tech Workshop Series',
      imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Robotics Hackathon',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 7,
      title: 'AI & Machine Learning Conference',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 8,
      title: 'Autonomous Vehicle Demo Day',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop'
    }
  ]

  return (
    <section id="etkinlikler" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Etkinlikler & Yarışmalar
          </h2>
          <p className="text-xl text-gray-300">
            Yıl boyunca katıldığımız ve organize ettiğimiz etkinlikler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events

