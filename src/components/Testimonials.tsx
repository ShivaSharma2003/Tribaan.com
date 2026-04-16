import { useState } from 'react'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      text: 'Vibent transformed our corporate gala into an unforgettable experience. Their attention to detail and creative vision exceeded all expectations.',
      author: 'Sarah Johnson',
      role: 'Event Manager, Fortune 500 Company'
    },
    {
      text: 'Working with Vibent was seamless. From concept to execution, they handled every aspect professionally and delivered outstanding results.',
      author: 'Michael Chen',
      role: 'Marketing Director, Tech Startup'
    },
    {
      text: 'The team at Vibent brought our vision to life in ways we could never imagine. We highly recommend them for any event needs.',
      author: 'Elena Rodriguez',
      role: 'CEO, Creative Agency'
    }
  ]

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">What Our Clients Say</h2>

        <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 md:p-12 min-h-64 flex flex-col justify-between">
          <p className="text-white text-lg md:text-2xl italic mb-8">
            "{testimonials[current].text}"
          </p>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white font-semibold text-lg">{testimonials[current].author}</p>
              <p className="text-purple-200">{testimonials[current].role}</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-white text-purple-700 p-3 rounded-full hover:bg-gray-100 transition"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="bg-white text-purple-700 p-3 rounded-full hover:bg-gray-100 transition"
              >
                →
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === current ? 'bg-white' : 'bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
