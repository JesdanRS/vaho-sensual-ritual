
const ProductSection = () => {
  const features = [
    {
      icon: '🌿',
      text: 'Hecho con esencias naturales y sin crueldad animal'
    },
    {
      icon: '☕',
      text: 'Con café de altura, orgánico y boliviano'
    },
    {
      icon: '🌸',
      text: 'Inspirado en mujeres que atraviesan transformaciones profundas'
    },
    {
      icon: '💖',
      text: 'Un gesto de cuidado que reconecta cuerpo y deseo'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair text-vaho-darkBrown">
              Un aroma íntimo,{' '}
              <span className="italic text-vaho-brown">para una conexión real</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-vaho-beige/30 hover:bg-vaho-beige/50 transition-all duration-300"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <p className="text-vaho-darkest font-inter leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with correct aspect ratio */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '1080/1350' }}>
              <img
                src="/lovable-uploads/34219e70-9e3b-42b2-99f8-e58969c5cf69.png"
                alt="VAHO - El aroma se impregna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
