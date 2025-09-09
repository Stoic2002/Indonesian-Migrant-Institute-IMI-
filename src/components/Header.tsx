import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+62 21 5555-1234</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@indonesianmigrant.org</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin size={14} />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo dan Judul */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow border">
              <img
                src={logo}
                alt="Logo IMI"
                className="object-contain w-12 h-12"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-800">Indonesian Migrant Institute</h1>
              <p className="text-sm text-gray-600">Institut Migran Indonesia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Beranda</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Tentang</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Layanan</a>
            <a href="#programs" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Program</a>
            <a href="#news" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Berita</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Kontak</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Bergabung
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Layanan</a>
              <a href="#programs" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Program</a>
              <a href="#news" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Berita</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Kontak</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-fit">
                Bergabung
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;