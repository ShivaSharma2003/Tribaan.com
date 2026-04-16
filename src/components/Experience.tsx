const Experience = () => {
  const experiences = [
    {
      title: 'Corporate',
      image: '/assets/dj/d1.jpg',
      items: [
        'CONFERENCES',
        'MEETING+SUMMITS',
        'VIRTUAL+HYBRID EVENTS',
        'TRADE SHOW BOOTHS',
        'NETWORKING',
        'SOCIAL GATHERINGS',
        'INCENTIVE TRIPS',
      ]
    },
    {
      title: 'Experiential',
      image: '/assets/h1.jpg',
      items: [
        'BRAND ACTIVATION',
        'POP-UP EXPERIENCES',
        'PRODUCT LAUNCHES',
        'MEDIA + INFLUENCER EVENTS',
        'CONCERTS + FESTIVALS',
        'MOBILE TOURS + SAMPLING',
        'PUBLIC INSTALLATIONS',
      ]
    },
    {
      title: 'Nonprofit',
      image: '/assets/concert/c5.jpg',
      items: [
        'GOALS',
        'FUNDRAISERS',
        'AWARD SHOWS',
        'SOCIAL IMPACT CAMPAIGNS',
        'GOVERNMENT AGENCIES',
        'COMMUNITY EVENTS',
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">We Bring Experiences to Life.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index}>
              {/* Image */}
              <div className="mb-8 h-48 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{exp.title}</h3>

              {/* Items List */}
              <div className="space-y-3">
                {exp.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-gray-700 text-sm font-medium leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
