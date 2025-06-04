
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "VAHO me ayudó a recuperar algo que creía perdido: el deseo de sentirme atractiva.",
      author: "Carolina, 55 años"
    },
    {
      quote: "No es solo un perfume. Es un momento solo para mí.",
      author: "Mónica, 47 años"
    },
    {
      quote: "Mi pareja volvió a mirarme como antes. Y yo, a sentirme como nunca.",
      author: "Teresa, 61 años"
    }
  ];

  return (
    <section className="py-20 bg-vaho-beige/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with correct aspect ratio */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '1080/1350' }}>
              <img
                src="/lovable-uploads/280c5c5d-1cc4-43d2-ba07-6bdd7f5aa2cc.png"
                alt="Lo que queda después del encuentro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-playfair text-vaho-darkBrown leading-tight">
              Historias reales.{' '}
              <span className="italic text-vaho-brown">Deseos que perduran.</span>
            </h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <blockquote className="text-vaho-darkest font-inter text-lg italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-vaho-brown font-medium not-italic">
                    — {testimonial.author}
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
