import { useState } from 'react'
import { FaBullseye, FaPalette, FaPen, FaFilm } from 'react-icons/fa'

const Journey = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const steps = [
    {
      icon: FaBullseye,
      title: 'Strategy',
      description: 'We learn about your vision and key objectives to develop a winning concept.'
    },
    {
      icon: FaPalette,
      title: 'Creative',
      description: 'We brainstorm engaging ideas and design that perfectly match the strategy.'
    },
    {
      icon: FaPen,
      title: 'Content',
      description: 'We create ways to highlight you and your mission throughout the messaging and experience.'
    },
    {
      icon: FaFilm,
      title: 'Production',
      description: 'We deliver flawless event management + productions.'
    }
  ]

  const testimonials = [
    {
      quote: '"As event producers and creators, the value of great guest experience is our currency."',
      name: 'Jagrit Agarwal',
      title: 'Founder,Executive producer, Magic Maker',
      image: '/assets/testimonial-1.jpg'
    },
    {
      quote: '"Experience is everything. That\'s what we believe in."',
      name: 'Sarah Johnson',
      title: 'CEO, Creative Agency',
      image: '/assets/testimonial-2.jpg'
    },
    {
      quote: '"Working with this team transformed our event vision into reality."',
      name: 'Michael Chen',
      title: 'Creative Director, Tech Solutions',
      image: '/assets/testimonial-3.jpg'
    }
  ]

  return (
    <section id="journey" className="bg-[#6850FE] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Your Journey With US</h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-white text-center">
                <div className="text-5xl mb-4 flex justify-center">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Our Process Button */}
        <div className="text-center mb-12">
          <button className="bg-white text-purple-600 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition">
            Our Process
          </button>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Quote & Info */}
            <div>
              <p className="text-gray-800 text-lg md:text-xl font-semibold mb-6 leading-relaxed">
                {testimonials[currentSlide].quote}
              </p>
              
              <div className="mb-6">
                <p className="text-gray-900 font-bold text-lg">{testimonials[currentSlide].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentSlide].title}</p>
              </div>

              <button className="bg-purple-600 text-white px-6 py-2 rounded font-semibold hover:bg-purple-700 transition">
                About Vibent
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-64 md:h-96">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 transition ${
                    index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Journey
