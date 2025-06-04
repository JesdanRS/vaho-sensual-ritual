
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vaho-darkBrown text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair">VAHO</h3>
            <p className="text-vaho-beige font-inter">
              Un perfume afrodisíaco boliviano para reconectar con tu deseo
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            <h4 className="text-lg font-inter font-medium">Nuestros valores</h4>
            <ul className="space-y-2 text-vaho-beige font-inter text-sm">
              <li>• Producto natural, ético y elaborado en Bolivia</li>
              <li>• Libre de crueldad animal</li>
              <li>• Inspirado en la conexión humana</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-inter font-medium">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-vaho-beige hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-vaho-beige hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-vaho-beige hover:text-white transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-vaho-brown pt-8 text-center">
          <p className="text-vaho-beige font-inter text-sm">
            © 2025 Greicy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
