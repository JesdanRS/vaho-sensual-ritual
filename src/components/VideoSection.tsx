import React, { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [poster, setPoster] = useState<string | undefined>(undefined);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && video) {
          // Attempt to play the video
          video.play().catch(error => {
            console.log("Auto-play was blocked:", error);
            // Optionally notify the user they need to interact to play the video
          });
        } else if (video) {
          video.pause(); // Pause when out of view
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    if (section) {
      observer.observe(section);
      // Manually check if the section is in view on initial load
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.top <= window.innerHeight * 0.7;
      if (isInViewport && video) {
        video.play().catch(error => {
          console.log("Auto-play on initial load was blocked:", error);
        });
      }
    }

    // Generate poster from the first frame
    if (video) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      video.onloadedmetadata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.currentTime = 0; // Seek to the first frame
      };

      video.onseeked = () => {
        if (context) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          setPoster(canvas.toDataURL("image/png")); // Set the poster as a data URL
        }
      };
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="video-section" className="py-20 bg-vaho-beige/20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-vaho-darkBrown mb-4">
            La experiencia VAHO
          </h2>
          <p className="text-lg text-vaho-darkest font-inter">
            Descubre el ritual que despierta tus sentidos
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div
            className="bg-vaho-lightBrown/30 rounded-2xl flex items-center justify-center"
            style={{ aspectRatio: '1080/1920', minHeight: '400px' }}
          >
            <video
              ref={videoRef}
              className="rounded-xl w-full h-full object-cover"
              controls
              poster={poster}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              preload="auto"
              playsInline
            >
              <source src="/lovable-uploads/Inicio.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;