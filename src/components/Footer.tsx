import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">IMI</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Indonesian Migrant Institute</h3>
                <p className="text-gray-400 text-sm">Institut Migran Indonesia</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Melindungi, memberdayakan, dan memperjuangkan hak-hak pekerja migran Indonesia 
              di seluruh dunia sejak 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Beranda</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">Tentang Kami</a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Layanan</a>
              <a href="#programs" className="block text-gray-300 hover:text-white transition-colors">Program</a>
              <a href="#news" className="block text-gray-300 hover:text-white transition-colors">Berita</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Kontak</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Layanan Utama</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Bantuan Hukum</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Layanan Kesehatan</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Pelatihan & Edukasi</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Hotline 24/7</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Program Reintegrasi</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Advokasi Kebijakan</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Informasi Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">
                    Jl. Kemanggisan Raya No. 15<br />
                    Jakarta Barat 11480<br />
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-red-500" size={18} />
                <div>
                  <p className="text-gray-300">+62 21 5555-1234</p>
                  <p className="text-sm text-gray-400">Hotline 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-red-500" size={18} />
                <div>
                  <p className="text-gray-300">info@indonesianmigrant.org</p>
                  <p className="text-sm text-gray-400">Respons 1x24 jam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <Phone className="text-white" size={20} />
              <span className="text-white font-semibold">Hotline Darurat 24/7:</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="tel:+622155551234" className="text-white font-bold hover:underline">
                +62 21 5555-1234
              </a>
              <a href="tel:+628115555678" className="text-white font-bold hover:underline">
                +62 811-5555-678
              </a>
              <span className="text-white text-sm opacity-90">
                WhatsApp tersedia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-300">© 2025 Indonesian Migrant Institute.</span>
              <span className="text-gray-300">Dibuat dengan</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span className="text-gray-300">untuk migran Indonesia.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;