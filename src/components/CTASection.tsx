
const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-playfair text-vaho-darkBrown leading-tight">
              Convertí tu cuidado{' '}
              <span className="italic text-vaho-brown">en un ritual</span>
            </h2>
            
            <p className="text-xl text-vaho-darkest font-inter leading-relaxed">
              Un perfume que acompaña tu transformación. Una experiencia para atesorar.
            </p>
            
            <button className="bg-vaho-brown hover:bg-vaho-darkBrown text-white px-12 py-4 rounded-full font-inter font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Quiero conocer VAHO
            </button>
          </div>

          {/* Right Column - Image with correct aspect ratio */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '1080/1350' }}>
              <img
                src="/lovable-uploads/a54bbf13-a429-408d-9ce2-3de69602ded4.png"
                alt="Ella no se enfría"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
