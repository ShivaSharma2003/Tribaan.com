const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Talk</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Ready to create an unforgettable experience? Get in touch with our team to discuss your next event.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-green-500 text-white px-8 py-4 rounded font-semibold hover:bg-green-600 transition transform hover:scale-105">
            Schedule a Meeting
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-black transition">
            Send us an Email
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-800">
          <div>
            <p className="text-gray-400 mb-2">Phone</p>
            <p className="text-white text-lg font-semibold">+91 99292 35735</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Email</p>
            <p className="text-white text-lg font-semibold">connect@tribaan.com</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Location</p>
            <p className="text-white text-lg font-semibold">Jaipur, INDIA</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
