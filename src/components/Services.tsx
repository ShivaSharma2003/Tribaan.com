const Services = () => {
  const features = [
    {
      title: 'REAL STORIES',
    },
    {
      title: 'LESSONS IN YOUR INBOX',
    },
    {
      title: 'LOTS OF VISUALS AND DOWNLOADS',
    },
    {
      title: 'JUST 30 MINUTES PER WEEK',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-32 bg-[#6850FE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            The Art of Mastering Events
          </h2>
          <p className="text-blue-100 text-lg">A Masterclass Experience</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-video bg-black shadow-2xl">
              <video
                src="/assets/v1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />
            </div>
          </div>

          {/* Text & Features Section */}
          <div className="text-white">
            <p className="text-lg leading-relaxed mb-8">
              Step into four complimentary courses and over 30 lessons on producing events at the top of your game taught by a team that works for the world's top brands.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                  </div>
                  <p className="text-blue-100 font-semibold tracking-wide text-sm">{feature.title}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
