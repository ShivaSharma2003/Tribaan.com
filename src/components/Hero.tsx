const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-40">
        <img
          src="/assets/h1.jpg"
          alt="Vibent Entertainment Hero"
          className="h-full w-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Experience
          <br />
          is everything
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          We create unforgettable events that bring people together and leave
          lasting impressions
        </p>
        <button className="bg-green-500 text-white px-8 py-4 rounded text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105">
          Explore Our Work
        </button>
      </div>

      {/* Decorative circles in background */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
