import { useState } from "react";

interface GallerySectionProps {
  category?: string;
  title: string;
  items: { id: number; image: string }[];
}

const GallerySection = ({ title, items }: GallerySectionProps) => (
  <div className="mb-16">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <a
        href="#"
        className="text-gray-700 hover:text-black font-semibold transition"
      >
        See more →
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden h-48 md:h-56 cursor-pointer transform hover:scale-105 transition bg-gray-200"
        >
          <img
            src={item.image}
            alt={`${title} ${item.id}`}
            className="w-full h-full object-cover group-hover:opacity-80 transition"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>
        </div>
      ))}
    </div>
  </div>
);


const Gallery = () => {
  const [activeLocation, setActiveLocation] = useState("All");

  const locations = ["All", "Jaipur ", "Banglore", "Delhi", "Mumbai", "Pune"];

  const galleries = {
    concert: [
      { id: 1, image: "/assets/concert/c1.jpg" },
      { id: 2, image: "/assets/concert/c2.jpg" },
      { id: 3, image: "/assets/concert/c3.jpg" },
      { id: 4, image: "/assets/concert/c4.jpg" },
      { id: 4, image: "/assets/concert/c5.jpg" },
      { id: 4, image: "/assets/concert/c6.jpg" },
      { id: 4, image: "/assets/concert/c7.jpg" },
      { id: 4, image: "/assets/concert/c8.jpg" },
    ],
    DJ: [
      { id: 5, image: "/assets/dj/d1.jpg" },
      { id: 6, image: "/assets/dj/d2.jpg" },
      { id: 7, image: "/assets/dj/d3.jpg" },
      { id: 8, image: "/assets/dj/d4.jpg" },
      { id: 8, image: "/assets/dj/d5.jpg" },
      { id: 8, image: "/assets/dj/d6.jpg" },
      { id: 8, image: "/assets/dj/d7.jpg" },
      { id: 8, image: "/assets/dj/d8.jpg" },
    ],
    standup: [
      { id: 9, image: "/assets/standup/s1.jpg" },
      { id: 10, image: "/assets/standup/s2.jpg" },
      { id: 11, image: "/assets/standup/s3.jpg" },
      { id: 12, image: "/assets/standup/s4.jpg" },
    ],
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            We are an event planning company. grounded in live event production.
            <br />
            curating experiences for corporate and global brands.
          </p>
        </div>

        {/* Location Filter */}
        <div className="flex justify-center gap-6 md:gap-12 mb-16 border-b border-gray-300 pb-6">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setActiveLocation(location)}
              className={`font-semibold transition pb-2 ${
                activeLocation === location
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Gallery Sections */}
        <GallerySection category="dj" title="DJ" items={galleries.DJ} />
        <GallerySection
          category="concert"
          title="Concert"
          items={galleries.concert}
        />
        <GallerySection
          category="standup"
          title="Stand-up"
          items={galleries.standup}
        />
      </div>
    </section>
  );
};

export default Gallery;
