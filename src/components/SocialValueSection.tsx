
const SocialValueSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair text-vaho-darkBrown leading-tight">
              Creado con propósito.{' '}
              <span className="italic text-vaho-brown">Sentido con amor.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-vaho-darkest font-inter leading-relaxed">
              <p>
                Cada frasco de VAHO es elaborado con café orgánico cultivado en Bolivia, 
                por manos que cuidan la tierra y su comunidad.
              </p>
              
              <p>
                Elegís reconectar contigo, y al mismo tiempo apoyás a productores locales 
                comprometidos con prácticas sostenibles.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-vaho-brown/10 text-vaho-darkBrown rounded-full font-inter text-sm">
                Café orgánico boliviano
              </span>
              <span className="px-4 py-2 bg-vaho-brown/10 text-vaho-darkBrown rounded-full font-inter text-sm">
                Comercio justo
              </span>
              <span className="px-4 py-2 bg-vaho-brown/10 text-vaho-darkBrown rounded-full font-inter text-sm">
                Prácticas sostenibles
              </span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/lovable-uploads/004b5ab2-4ba1-4989-bbe2-22417bbadc2a.png"
                alt="El café se acaba. El deseo, no."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialValueSection;
