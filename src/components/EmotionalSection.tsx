
const EmotionalSection = () => {
  return (
    <section className="py-20 bg-vaho-beige/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with correct aspect ratio */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '1080/1350' }}>
              <img
                src="/lovable-uploads/0eacb01a-8b61-4562-9acc-674ec4b853d1.png"
                alt="Lo que queda, es más íntimo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-playfair text-vaho-darkBrown leading-tight">
              El deseo no desaparece.{' '}
              <span className="italic text-vaho-brown">A veces solo se silencia.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-vaho-darkest font-inter leading-relaxed">
              <p>
                La rutina, los cambios hormonales y el paso del tiempo pueden apagar la chispa. 
                Pero no la borran.
              </p>
              
              <p>
                VAHO es un recordatorio íntimo de que la sensualidad sigue ahí.
              </p>
              
              <p className="text-vaho-brown font-medium">
                Sin culpa. Sin filtros. Solo vos y tu cuerpo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
