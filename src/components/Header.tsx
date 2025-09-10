import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-xl shadow-xl' : 'bg-white/95'
    }`}>
      {/* Top contact bar */}
      <div className="bg-primary-600 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
              <Phone size={14} />
              <span className="font-medium">+62 21 5555-1234</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
              <Mail size={14} />
              <span className="font-medium">info@indonesianmigrant.org</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 hover:text-primary-200 transition-colors">
            <MapPin size={14} />
            <span className="font-medium">Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-lg border border-secondary-200 transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/logo.jpg"
                  alt="Logo IMI"
                  className="object-contain w-12 h-12"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-secondary-900 tracking-tight">
                Indonesian Migrant Institute
              </h1>
              <p className="text-sm text-secondary-600 font-medium">Institut Migran Indonesia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="#home" className="px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
              Beranda
            </a>
            <a href="#about" className="px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
              Tentang
            </a>
            <a href="#services" className="px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
              Layanan
            </a>
            <a href="#programs" className="px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
              Program
            </a>
            <a href="#documentation" className="px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
              Dokumentasi
            </a>
            <a href="#news" className="px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
              Berita
            </a>
            <a href="#contact" className="px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
              Kontak
            </a>
            <div className="ml-4 flex items-center space-x-3">
              <button className="btn-outline flex items-center space-x-2">
                <Globe size={18} />
                <span>Bergabung</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-secondary-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-secondary-700" />
            ) : (
              <Menu size={24} className="text-secondary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-secondary-200 py-6">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
                Beranda
              </a>
              <a href="#about" className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
                Tentang
              </a>
              <a href="#services" className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
                Layanan
              </a>
              <a href="#programs" className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
                Program
              </a>
              <a href="#documentation" className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
                Dokumentasi
              </a>
              <a href="#news" className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
                Berita
              </a>
              <a href="#contact" className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-bold">
                Kontak
              </a>
              <div className="pt-4">
                <button className="btn-primary w-full flex items-center justify-center space-x-2">
                  <Globe size={18} />
                  <span>Bergabung</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;