
const VideoSection = () => {
  return (
    <section id="video-section" className="py-20 bg-vaho-beige/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-vaho-darkBrown mb-4">
            La experiencia VAHO
          </h2>
          <p className="text-lg text-vaho-darkest font-inter">
            Descubre el ritual que despierta tus sentidos
          </p>
        </div>
        
        {/* Video Placeholder - 1080x1920 aspect ratio */}
        <div className="max-w-md mx-auto">
          <div 
            className="bg-vaho-lightBrown/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-vaho-brown"
            style={{ aspectRatio: '1080/1920', minHeight: '400px' }}
          >
            <div className="text-center p-8">
              <div className="text-vaho-brown mb-4">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-vaho-darkBrown font-inter">
                Video placeholder
                <br />
                <span className="text-sm text-vaho-darkest">1080 x 1920</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
