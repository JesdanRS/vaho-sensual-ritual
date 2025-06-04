
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const carouselImages = [
    '/lovable-uploads/c24f6b10-68a3-4b3e-902e-b1c644241ade.png',
    '/lovable-uploads/35397841-dc2f-4dbc-9301-b92d97901f28.png',
    '/lovable-uploads/438d7694-e4f7-4093-be06-07a008cad95c.png'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-vaho-darkBrown leading-tight">
            El café se enfría.{' '}
            <span className="italic text-vaho-brown">El deseo</span>{' '}
            no debería hacerlo.
          </h1>
          
          <p className="text-lg md:text-xl text-vaho-darkest font-inter leading-relaxed max-w-2xl">
            VAHO es un perfume afrodisíaco boliviano elaborado con café de altura y esencias naturales. 
            Un ritual para reconectar con tu cuerpo, tu deseo y tu intimidad.
          </p>
          
          <button 
            onClick={scrollToVideo}
            className="bg-vaho-brown hover:bg-vaho-darkBrown text-white px-8 py-4 rounded-full font-inter font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Descubre VAHO
          </button>
        </div>

        {/* Right Column - Carousel without box */}
        <div className="relative animate-slide-in">
          <div className="relative w-full max-w-lg mx-auto" style={{ aspectRatio: '1350/1350' }}>
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`VAHO perfume ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <button
            title="Previous image"
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-vaho-darkBrown p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            title="Previous image"
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-vaho-darkBrown p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                title={`Go to image ${index + 1}`}
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
