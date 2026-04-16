const News = () => {
  const news = [
    {
      title: 'Vibent Wins Best Event Agency Award 2024',
      excerpt: 'Recognition for our outstanding contributions to the event management industry.',
      date: 'March 15, 2024'
    },
    {
      title: 'Launching Our New Virtual Event Platform',
      excerpt: 'Explore our cutting-edge technology for hybrid and virtual event experiences.',
      date: 'March 10, 2024'
    },
    {
      title: '5000+ Successfully Executed Events',
      excerpt: 'Celebrating our milestone achievement with gratitude to all our clients and partners.',
      date: 'March 5, 2024'
    }
  ]

  return (
    <section id="news" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">News & Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden group cursor-pointer">
              <div className="bg-linear-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition"></div>
                <span className="relative text-white text-3xl font-bold">📰</span>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-3">{article.date}</p>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-green-400 transition">
                  {article.title}
                </h3>
                <p className="text-gray-300">{article.excerpt}</p>
                <a href="#" className="text-green-400 hover:text-green-300 transition mt-4 inline-block font-semibold">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
